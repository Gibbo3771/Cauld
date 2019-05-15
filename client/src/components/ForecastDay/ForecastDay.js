import { getDayString, prettyDateParse } from "../../helpers/date_parser";
import anime from "animejs";
import { html, render } from "lit-html";
import store from "../../state/index";
import { classMap } from "lit-html/directives/class-map";
import Component from "../Component";

export default class ForecastDay extends Component {
  constructor(isToday, forecastIndex) {
    super({ store });
    this.isToday = isToday;
    this.forecastIndex = forecastIndex;
  }

  render() {
    const { date } = store.state.weather.forecast[this.forecastIndex];
    const classes = {
      "day-background": true,
      "current-day": this.isToday
    };
    const markup = html`
      <div id="${new Date(date).getDay()}-day" class=${classMap(classes)}>
        <div id="header">
          <div>
            ${this.renderHeader()}
          </div>
        </div>
        <div class="temp-current">
          ${this.renderCurrentTemp()}
        </div>
        <div class="icon">
          ${this.renderIcon()}
        </div>
        <div class="weather-descriptor">
          ${this.renderWeatherDescriptor()}
        </div>
        <span class="temperature-range" }>
          ${this.renderTempRange()}
        </span>
        <div class="wind">
          ${this.isToday ? this.renderWind() : this.renderWindMax()}
        </div>
      </div>
    `;
    return markup;
  }

  renderHeader = () => {
    const { date } = store.state.weather.forecast[this.forecastIndex];
    return html`
      <h1>${getDayString(new Date(date).getDay())}</h1>
      <h3>${prettyDateParse(new Date(date)).descriptor}</h3>
    `;
  };

  renderIcon = () => {
    const { icon } = store.state.weather.forecast[this.forecastIndex];
    return html`
      <img src="http:${icon}" />
    `;
  };

  renderWeatherDescriptor = () => {
    const { descriptor } = store.state.weather.forecast[this.forecastIndex];
    return html`
      <p>${descriptor}</p>
    `;
  };

  renderTempRange = () => {
    const { minTempC, maxTempC } = store.state.weather.forecast[
      this.forecastIndex
    ];
    return html`
      ${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub>
    `;
  };

  renderCurrentTemp = () => {
    if (!this.isToday) return;
    const { tempC } = store.state.weather.current;
    return html`
      <p>${tempC}c°</p>
    `;
  };

  renderWind = () => {
    const { windMPH } = store.state.weather.current;
    return html`
      <h4>Wind</h4>
      <p>${windMPH}mph</p>
    `;
  };

  renderWindMax = () => {
    const { maxWindMPH } = store.state.weather.forecast[this.forecastIndex];
    return html`
      <h4>Wind Max</h4>
      <p>${maxWindMPH}mph</p>
    `;
  };
}
