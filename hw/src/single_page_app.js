import { publish, subscribe } from "./helpers/pub_sub";
import Weather from "./views/main_view/Weather";
import { render } from "lit-html";

export default class SinglePageApp {
  constructor() {
    // This is set to 16.66ms as this is roughly on par
    // with what a person can see, basically 60fps
    this.batchUpdateInterval = 16.66;
    this.root = document.getElementById("root");
    this.components = [];
    // State changes are batched and executed to save render calls
    this.batchedStateChanges = [];
    this.bindEvents();
    this.weather = new Weather();
  }

  render = () => {
    render(this.weather.render(), this.root);
    if (this.components.length === 0) return;
    this.componentsMounted();
  };

  // Calls once all the components have be put into the dom
  componentsMounted = () => {
    this.components.forEach(component => {
      component.componentDidMount();
    });
    this.components = [];
  };

  // Called after a components state has changed
  componentStateChanged = object => {
    const { component, prevState, newState } = object;
    if (newState === prevState) return;
    component.componentDidUpdate(prevState, newState);
  };

  // Exectutes all the batched state changes
  executeBatchedStateChanges = () => {
    this.batchedStateChanges.forEach(object => {
      this.componentStateChanged(object);
    });
    this.batchedStateChanges = [];
    this.render();
  };

  bindEvents = () => {
    subscribe("Component:created", evt => {
      this.components.push(evt.detail);
    });
    subscribe("Component:state-changed", evt => {
      if (this.batchedStateChanges.length > 0) {
        let id = setInterval(() => {
          this.executeBatchedStateChanges();
          clearInterval(id);
        }, this.batchUpdateInterval);
      }
      this.batchedStateChanges.push(evt.detail);
      this.componentStateChanged(evt.detail);
    });
  };
}
