import Weather from "./components/Weather/Weather";
import { render } from "lit-html";
import store from "./state/index";

export default class SinglePageApp {
  constructor() {
    this.root = document.getElementById("root");
    this.weather = new Weather();
    store.events.subscribe("Store:state-change", this.render);
  }

  render = () => {
    render(this.weather.render(), this.root);
  };
}
