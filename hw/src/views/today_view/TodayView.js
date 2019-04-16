import View from "../View";
import { getMonthString } from "../../helpers/date_parser";
import { subscribe } from "../../helpers/pub_sub";

export default class TodayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("current-day");
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
    } = this.props.weather.current;
    const { minTempC, maxTempC, maxWindMPH } = this.props.weather.forecast;
    const date = new Date(lastUpdated);
    const month = getMonthString(date.getMonth());
    this.parent.innerHTML = `<div id="header">
        <h1>TODAY</h1>
        <h3>${month} ${date.getDate()}</h3>
    </div>
    <div>
        <img src="http:${icon}" />
    </div>
    <div>
        <p class="temp-current">${tempC}c°</p>
    </div>
    <span>${minTempC}c°Lo - ${maxTempC}c°Hi</span>
    <p class="weather-descriptor">${descriptor}</p>
    <div class="wind">
        <h4>Wind</h4>
        <p>${windMPH}mph ${windDir}</p>
    <div>`;
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

  bindEvents = () => {
    subscribe("CrossButton:clear", data => {
      this.parent.innerHTML = "";
    });
  };
}
