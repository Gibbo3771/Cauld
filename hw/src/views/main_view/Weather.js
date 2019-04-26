import View from "../View";
import { html } from "lit-html";
import { subscribe } from "../../helpers/pub_sub";
import ForecastDayView from "../weather_forecast_views/ForecastDayView";
import Component from "../../components/Component";
import AppHeader from "../../components/AppHeader/AppHeader";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.searchBar = new SearchBar({ root: this.root });
    this.renderDelayMillis = 50;
  }

  render = data => {
    const markup = html`
      <div id="main-view">
        ${AppHeader("Weather")}
        <div id="autocomplete" class="autocomplete">
          ${this.searchBar.render()}
        </div>
        <div id="forecast" class="weather"></div>
      </div>
    `;
    return markup;

    for (let i = 0; i < d.length; i++) {
      const day = new ForecastDayView({
        root: this.props.root,
        isToday: i === 0 ? true : false,
        current: data.detail.current,
        forecast: d[i]
      });
      this.renderDelay(i * this.renderDelayMillis, day.render);
    }
  };

  renderDelay = (milliseconds, callback) => {
    const id = setInterval(() => {
      clearInterval(id);
      callback();
    }, milliseconds);
  };

  renderForecastDay = () => {};
}
