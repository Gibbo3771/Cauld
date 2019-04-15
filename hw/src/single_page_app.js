import { publish, subscribe } from "./helpers/pub_sub";
import WeatherAPI from "./helpers/weather_api";
import API_KEY from "../keystore";
import MainView from "./views/main_view/MainView";
import SearchBar from "./components/SearchBar/SearchBar";
import CrossButton from "./components/CrossButton/CrossButton";
import SingleDayForecast from "./models/single_day_forecast";
import CurrentWeather from "./models/current_weather";

export default class SinglePageApp {
  constructor() {
    this.root = document.getElementById("root");
    document.body.appendChild(this.root);
    this.bindEvents();
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    this.mainView = new MainView({ root: this.root });
    this.crossButton = new CrossButton({ root: this.root });
    this.searchBar = new SearchBar({ root: this.root });
  }

  locationSearch = data => {
    this.weather.search(data.detail.location, response => {
      publish("App:locations-ready", { locations: response });
    });
  };

  getWeatherForecast = location => {
    this.weather.forecast(location, 5, response => {
      const currentWeather = new CurrentWeather(response.data);
      const forecastDays = [];
      for (const day of response.data.forecast.forecastday) {
        const forecast = new SingleDayForecast(day);
        forecastDays.push(forecast);
      }
      publish("App:weather-ready", {
        current: currentWeather,
        forecast: forecastDays[0]
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
  };
}
