import View from "../View";
import {
  getMonthString,
  getDayString,
  prettyDateParse
} from "../../helpers/date_parser";
import { subscribe } from "../../helpers/pub_sub";

export default class TodayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("forecast");
    this.day = document.createElement("div");
    this.bindEvents();
  }

  render = () => {
    const {
      lastUpdated,
      icon,
      tempC,
      feelsLikeC,
      windDir,
      windMPH,
      descriptor
    } = this.props.current;
    const { minTempC, maxTempC, maxWindMPH } = this.props.forecast;
    const date = new Date(lastUpdated);
    const month = getMonthString(date.getMonth());
    this.day.innerHTML = `<div id="header">
        <div>
          <h1>${getDayString(date.getDay())}</h1>
          <h3>${prettyDateParse(date).desciptor}</h3>
        </div>
    </div>
    <div class="temp-current">
      <p>${tempC}c°</p>
    </div>
    <div class="icon">
      <img src="http:${icon}" />
    </div>
    <div class="weather-descriptor">
      <p>${descriptor}</p>
    </div>
    <span class="temperature-range">${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub></span>
    <div class="wind">
        <h4>Wind</h4>
        <p>${windMPH}mph ${windDir}</p>
    </div>`;

    this.day.classList.add("blue", "current-day");
    this.appendChild(this.day);
  };

  createTextElement = (text, type) => {
    const e = document.createElement(type);
    e.textContent = text;
    return e;
  };

  createImage = src => {
    const img = document.createElement("img");
    img.src = `http://${src}`;
    return img;
  };

  bindEvents = () => {};
}
