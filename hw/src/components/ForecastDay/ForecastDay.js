import {
  getMonthString,
  getDayString,
  prettyDateParse
} from "../../helpers/date_parser";
import anime from "animejs";
import { html, render } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import Component from "../Component";

export default class ForecastDay extends Component {
  constructor(props) {
    super(props);
  }

  render = props => {
    super.render(props);
    const { date } = this.props.forecast;
    const { isToday } = this.props;
    const classes = {
      blue: true,
      "current-day": isToday
    };
    const markup = html`
      <div class=${classMap(classes)}>
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
      </div>
    `;
    return markup;
  };

  renderHeader = () => {
    ("header");
    const { date, descriptor } = this.props.forecast;
    return html`
      <h1>${getDayString(new Date(date).getDay())}</h1>
      <h3>${prettyDateParse(new Date(date)).descriptor}</h3>
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
}