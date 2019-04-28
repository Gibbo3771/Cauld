import { getDayString, prettyDateParse } from "../../helpers/date_parser";
import anime from "animejs";
import { html, render } from "lit-html";
import { classMap } from "lit-html/directives/class-map";

export const ForecastDay = props => {
  const { date } = props.forecast;
  const { isToday } = props;
  const classes = {
    blue: true,
    "current-day": isToday
  };
  const markup = html`
    <div class=${classMap(classes)}>
      <div id="header">
        <div>
          ${renderHeader(props)}
        </div>
      </div>
      ${renderCurrentTemp(props)}
      <div class="icon">
        ${renderIcon(props)}
      </div>
      <div class="weather-descriptor">
        ${renderWeatherDescriptor(props)}
      </div>
      <span class="temperature-range" }>
        ${renderTempRange(props)}
      </span>
      <div class="wind">
        ${isToday ? renderWind(props) : renderWindMax(props)}
      </div>
    </div>
  `;
  return markup;
};

const renderHeader = props => {
  ("header");
  const { date, descriptor } = props.forecast;
  return html`
    <h1>${getDayString(new Date(date).getDay())}</h1>
    <h3>${prettyDateParse(new Date(date)).descriptor}</h3>
  `;
};

const renderIcon = props => {
  const { icon } = props.forecast;
  return html`
    <img src="http:${icon}" />
  `;
};

const renderWeatherDescriptor = props => {
  const { descriptor } = props.forecast;
  return html`
    <p>${descriptor}</p>
  `;
};

const renderTempRange = props => {
  const { minTempC, maxTempC } = props.forecast;
  const classes = {
    "temperature-range": true
  };
  return html`
    ${minTempC}c°<sub>Lo</sub> ${maxTempC}c°<sub>Hi</sub>
  `;
};

const renderCurrentTemp = props => {
  const { isToday } = props;
  if (!isToday) return;
  const { tempC } = props.current;
  const classes = {
    "temp-current": true
  };
  return html`
    <div class=${classMap(classes)}>
      <p>${tempC}c°</p>
    </div>
  `;
};

const renderWind = props => {
  const { windMPH } = props.current;
  return html`
    <h4>Wind</h4>
    <p>${windMPH}mph</p>
  `;
};

const renderWindMax = props => {
  const { maxWindMPH } = props.forecast;
  return html`
    <h4>Wind Max</h4>
    <p>${maxWindMPH}mph</p>
  `;
};
