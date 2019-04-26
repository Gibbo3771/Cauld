import View from "../View";
import { html } from "lit-html";
import { subscribe } from "../../helpers/pub_sub";
import ForecastDayView from "../weather_forecast_views/ForecastDayView";
import AppHeader from "../../components/AppHeader/AppHeader";
import CrossButton from "../../components/CrossButton/CrossButton";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class MainView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("main-view");
    this.searchBar = new SearchBar({ root: this.root });
    this.crossButton = new CrossButton({ root: this.root });
    subscribe("App:weather-ready", this.render);
    this.renderDelayMillis = 50;
  }

  render = data => {
    const markup = html`
      <div id="main-view">
        ${AppHeader("Weather")}
        <div id="autocomplete" class="autocomplete">
          ${this.searchBar.render()} ${this.crossButton.render()}
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
