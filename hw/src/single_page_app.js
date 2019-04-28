import { publish, subscribe } from "./helpers/pub_sub";
import Weather from "./views/main_view/Weather";
import { render } from "lit-html";

export default class SinglePageApp {
  constructor() {
    this.root = document.getElementById("root");
    this.components = [];
    this.batchedStateUpdates = [];
    this.bindEvents();
    this.weather = new Weather();
  }

  render = () => {
    render(this.weather.render(), this.root);
    if (this.components.length === 0) return;
    this.componentsMounted();
  };

  componentsMounted = () => {
    this.components.forEach(component => {
      component.componentDidMount();
    });
    this.components = [];
  };

  componentStateChanged = object => {
    const { component, prevState, newState } = object;
    component.componentDidUpdate(prevState, newState);
  };

  bindEvents = () => {
    subscribe("Component:created", evt => {
      this.components.push(evt.detail);
    });
    subscribe("Component:state-changed", evt => {
      if (this.batchedStateUpdates.length > 0) {
        let id = setInterval(() => {
          this.batchedStateUpdates.forEach(object => {
            this.componentStateChanged(object);
          });
          this.batchedStateUpdates = [];
          this.render();
          clearInterval(id);
        }, 3);
      }
      this.batchedStateUpdates.push(evt.detail);
      this.componentStateChanged(evt.detail);
    });
  };
}
