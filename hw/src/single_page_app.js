import { publish, subscribe } from "./helpers/pub_sub";
import Weather from "./views/main_view/Weather";
import { render } from "lit-html";

export default class SinglePageApp {
  constructor() {
    this.root = document.getElementById("root");
    this.components = [];
    this.bindEvents();
    this.weather = new Weather();
  }

  render = () => {
    render(this.weather.render(), this.root);
    if (this.components.length === 0) return;
    this.componentsMounted();
  };

  componentsMounted = () => {
    console.log("before delete", this.components.length);
    this.components.forEach(component => {
      component.componentDidMount();
    });
    this.components = [];
    console.log("after delete", this.components.length);
  };

  componentStateChanged = object => {
    const { component, prevState, newState } = object;
    this.render();
    component.componentDidUpdate(prevState, newState);
  };

  bindEvents = () => {
    subscribe("Component:created", evt => {
      this.components.push(evt.detail);
    });
    subscribe("Component:state-changed", evt => {
      this.componentStateChanged(evt.detail);
    });
  };
}
