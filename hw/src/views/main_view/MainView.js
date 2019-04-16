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
  }

  render = data => {
    const d = data.detail.forecast;
    const today = new TodayView({
      root: this.props.root,
      current: data.detail.current,
      forecast: d[0]
    });
    const tomorrow = new ForecastDayView({
      root: this.props.root,
      forecast: d[1]
    });

    today.render();
    tomorrow.render();

    for (let i = 2; i < d.length; i++) {
      const day = new ForecastDayView({
        root: this.props.root,
        forecast: d[i]
      });
      day.render();
    }
  };
}
