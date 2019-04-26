import View from "../View";
import {
  getMonthString,
  getDayString,
  prettyDateParse
} from "../../helpers/date_parser";
import anime from "animejs";
import { html, render } from "lit-html";

export default class ForecastDayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("forecast");
    this.day = document.createElement("div");
    this.appendChild(this.day);
    this.bindEvents();
  }

  render = () => {
    const {
      descriptor,
      icon,
      date,
      minTempC,
      maxTempC,
      maxWindMPH
    } = this.props.forecast;
    const { isToday } = this.props;
    const markup = html`
      <div id="header">
        <div>
          <h1>${getDayString(new Date(date).getDay())}</h1>
          <h3>${prettyDateParse(new Date(date)).desciptor}</h3>
        </div>
      </div>
      ${this.currentTemp()}
      <div class="icon">
        <img src="http:${icon}" />
      </div>
      <div class="weather-descriptor">
        <p>${descriptor}</p>
      </div>
      <span class="temperature-range"
        >${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub></span
      >
      ${isToday ? this.wind() : this.windMax()}
    `;
    render(markup, this.day);
    this.day.classList.add("blue");
  };

  currentTemp = () => {
    const { isToday } = this.props;
    if (!isToday) return;
    const { tempC } = this.props.current;
    return html`
      <div class="temp-current">
        <p>${tempC}c°</p>
      </div>
    `;
  };

  wind = () => {
    const { windMPH } = this.props.current;
    return html`
      <div class="wind">
        <h4>Wind</h4>
        <p>${windMPH}mph</p>
      </div>
    `;
  };

  windMax = () => {
    const { maxWindMPH } = this.props.forecast;
    return html`
      <div class="wind">
        <h4>Wind Max</h4>
        <p>${maxWindMPH}mph</p>
      </div>
    `;
  };

  bindEvents = () => {};
}
