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
    this.components.forEach(component => {
      component.componentDidMount();
    });
    this.components = [];
  };

  componentStateChanged = object => {
    const { component, prevState, newState } = object;
    this.render();
    component.componentDidUpdate(prevState, newState);
  };

  bindEvents = () => {
    subscribe("SearchBar:search", data => {
      this.locationSearch(data);
    });
    subscribe("SearchBar:location-selected", data => {
      this.getWeatherForecast(data.detail.location);
    });
    subscribe("App:clear", () => {
      const e = document.getElementById("forecast");
      e.innerHTML = "";
      e.classList.remove("blue");
    });
    subscribe("Component:created", evt => {
      this.components.push(evt.detail);
    });
    subscribe("Component:state-changed", evt => {
      this.componentStateChanged(evt.detail);
    });
  };
}
