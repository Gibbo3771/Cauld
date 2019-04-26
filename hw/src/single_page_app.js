import Component from "./components/Component";
import { publish, subscribe } from "./helpers/pub_sub";
import WeatherAPI from "./helpers/WeatherAPI";
import API_KEY from "../keystore";
import Weather from "./views/main_view/Weather";
import SearchBar from "./components/SearchBar/SearchBar";
import CrossButton from "./components/CrossButton/CrossButton";
import SingleDayForecast from "./models/single_day_forecast";
import CurrentWeather from "./models/current_weather";
import { render } from "lit-html";

export default class SinglePageApp extends Component {
  constructor(props) {
    super(props);
    this.root = document.getElementById("root");
    this.components = [];
    this.bindEvents();
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    this.weather = new Weather();
  }

  render = () => {
    render(this.weather.render(), this.root);
    this.componentsMounted();
  };

  componentsMounted = () => {
    this.components.forEach(component => {
      if (component.mounted) return;
      component.mounted = true;
      component.componentDidMount();
    });
  };

  componentStateChanged = component => {
    this.render();
    component.componentDidUpdate();
  };

  locationSearch = data => {
    this.weather.search(data.detail.location, response => {
      publish("App:locations-ready", { locations: response });
    });
  };

  getWeatherForecast = location => {
    this.weather.forecast(location, 7, response => {
      const { current, forecast } = response.data;
      const currentWeather = new CurrentWeather(response.data);
      const forecastDays = [];
      for (const day of forecast.forecastday) {
        forecastDays.push(new SingleDayForecast(day));
      }
      publish("App:weather-ready", {
        current: currentWeather,
        forecast: forecastDays
      });
    });
  };

  bindEvents = () => {
    subscribe("SearchBar:search", data => {
      this.locationSearch(data);
    });
    subscribe("SearchBar:location-selected", data => {
      this.getWeatherForecast(data.detail.location);
    });
    subscribe("App:clear", () => {
      const e = document.getElementById("forecast");
      e.innerHTML = "";
      e.classList.remove("blue");
    });
    subscribe("Component:created", evt => {
      this.components.push(evt.detail);
    });
    subscribe("Component:state-changed", evt => {
      this.componentStateChanged(evt.detail);
    });
  };
}
