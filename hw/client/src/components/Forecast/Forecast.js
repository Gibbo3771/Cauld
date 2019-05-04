import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import ForecastDay from "../ForecastDay/ForecastDay";
import store from "../../state/index";
import { show, hide, setup } from "./animations";

export default class Forecast extends Component {
  constructor() {
    super({ store });
    this.forecastDays = this.createForecastDays();
    store.events.subscribe("App:location-ready", this.update);
  }

  render() {
    return html`
      <div id="forecast" class="weather">
        ${repeat(this.forecastDays, day => day.render())}
      </div>
    `;
  }

  createForecastDays = () => {
    const array = [];
    for (let i = 0; i < 7; i++) {
      array.push(new ForecastDay(i === 0, i));
    }
    return array;
  };

  update = () => {
    const { onScreen } = store.state.animations.forecast;
    if (onScreen) hide();
    else show();
  };
}
