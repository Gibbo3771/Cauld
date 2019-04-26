import View from "../View";
import {
  getMonthString,
  getDayString,
  prettyDateParse
} from "../../helpers/date_parser";
import anime from "animejs";
import { html, render } from "lit-html";
import { classMap } from "lit-html/directives/class-map";

export default class ForecastDayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("forecast");
    this.day = document.createElement("div");
    this.appendChild(this.day);
    this.day.classList.add("blue");
    this.bindEvents();
  }

  render = () => {
    const { date } = this.props.forecast;
    const { isToday } = this.props;
    this.day.id = `forecast-${date}`;
    const markup = html`
      <div id="header">
        <div>
          ${this.renderHeader()}
        </div>
      </div>
      ${this.renderCurrentTemp()}
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
        ${isToday ? this.renderWind() : this.renderWindMax()}
      </div>
    `;
    render(markup, this.day);
  };

  renderHeader = () => {
    const { date, desciptor } = this.props.forecast;
    return html`
      <h1>${getDayString(new Date(date).getDay())}</h1>
      <h3>${prettyDateParse(new Date(date)).desciptor}</h3>
    `;
  };

  renderIcon = () => {
    const { icon } = this.props.forecast;
    return html`
      <img src="http:${icon}" />
    `;
  };

  renderWeatherDescriptor = () => {
    const { descriptor } = this.props.forecast;
    return html`
      <p>${descriptor}</p>
    `;
  };

  renderTempRange = () => {
    const { minTempC, maxTempC } = this.props.forecast;
    const classes = {
      "temperature-range": true
    };
    return html`
      ${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub>
    `;
  };

  renderCurrentTemp = () => {
    const { isToday } = this.props;
    if (!isToday) return;
    const { tempC } = this.props.current;
    const classes = {
      "temp-current": true
    };
    return html`
      <div class=${classMap(classes)}>
        <p>${tempC}c°</p>
      </div>
    `;
  };

  renderWind = () => {
    const { windMPH } = this.props.current;
    return html`
      <h4>Wind</h4>
      <p>${windMPH}mph</p>
    `;
  };

  renderWindMax = () => {
    const { maxWindMPH } = this.props.forecast;
    return html`
      <h4>Wind Max</h4>
      <p>${maxWindMPH}mph</p>
    `;
  };

  bindEvents = () => {};
}
