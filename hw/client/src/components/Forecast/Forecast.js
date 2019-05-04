import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import ForecastDay from "../ForecastDay/ForecastDay";
import store from "../../state/index";
import { animate } from "./animations";

store.events.subscribe("Animations:forecast", animate);

export default class Forecast extends Component {
  constructor() {
    super({ store });
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
}
