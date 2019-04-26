import View from "../View";
import WeatherAPI from "../../helpers/weather_api";
import API_KEY from "../../../keystore";
import { publish, subscribe } from "../../helpers/pub_sub";
import TodayView from "../weather_forecast_views/TodayView";
import ForecastDayView from "../weather_forecast_views/ForecastDayView";

export default class MainView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("main-view");
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    subscribe("App:weather-ready", this.render);
    this.renderDelayMillis = 50;
  }

  render = data => {
    const d = data.detail.forecast;
    const today = new ForecastDayView({
      root: this.props.root,
      isToday: true,
      current: data.detail.current,
      forecast: d[0]
    });

    this.renderDelay(this.renderDelayMillis, today.render);

    for (let i = 1; i < d.length; i++) {
      const day = new ForecastDayView({
        root: this.props.root,
        isToday: false,
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
}
