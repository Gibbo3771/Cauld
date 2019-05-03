import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import ForecastDay from "../ForecastDay/ForecastDay";
import store from "../../state/index";
import { show } from "./animations";
import { hide } from "./animations";

export default class Forecast extends Component {
  constructor() {
    super({ store });
    store.events.subscribe("Animations:forecast", this.update);
    this.forecastDays = this.createForecastDays();
  }

  render() {
    const { available, current, forecast, forecastDays } = store.state.weather;
    if (!available) return;
    return html`
      <div id="forecast" class="weather">
        ${repeat(this.forecastDays, (day, index) => day.render())}
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

  update = data => {
    const { onScreen } = store.state.animations.forecast;
    if (onScreen) hide();
    else show(data);
  };
}
