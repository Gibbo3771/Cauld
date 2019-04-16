import View from "../View";
import WeatherAPI from "../../helpers/weather_api";
import API_KEY from "../../../keystore";
import { publish, subscribe } from "../../helpers/pub_sub";
import TodayView from "../today_view/TodayView";

export default class MainView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("main-view");
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    subscribe("App:weather-ready", this.render);
  }

  render = data => {
    const today = new TodayView({
      root: this.props.root,
      weather: data.detail
    });

    today.render();
  };
}
