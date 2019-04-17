import View from "../View";
import {
  getMonthString,
  getDayString,
  prettyDateParse
} from "../../helpers/date_parser";

export default class ForecastDayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("forecast");
    this.day = document.createElement("div");
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
    this.day.innerHTML = `<div id="header">
        <div>
          <h1>${getDayString(new Date(date).getDay())}</h1>
          <h3>${prettyDateParse(new Date(date)).desciptor}</h3>
        </div>
    </div>
    <div class="icon">
        <img src="http:${icon}" />
    </div>
    <div class="weather-descriptor">
      <p>${descriptor}</p>
    </div>
    <span class="temperature-range">${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub></span>
    <div class="wind">
        <h4>Wind Max</h4>
        <p>${maxWindMPH}mph</p>
    </div>`;

    this.day.classList.add("blue");
    this.appendChild(this.day);
  };

  bindEvents = () => {};
}
