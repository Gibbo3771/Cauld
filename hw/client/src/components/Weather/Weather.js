import { html } from "lit-html";
import weatherApi from "../../helpers/weather_api/index";
import { getClientIP } from "../../helpers/IPHelper";
import CurrentWeather from "../../models/current_weather";
import SingleDayForecast from "../../models/single_day_forecast";
import { Forecast } from "../Forecast/Forecast";
import Component from "../Component";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import store from "../../state/index";

export default class Weather extends Component {
  constructor() {
    super({ store });
    this.searchBar = new SearchBar();
    store.events.subscribe("List:location-selected", this.getWeatherForecast);
    store.events.subscribe("Searchbar:search", this.locationSearch);
  }

  render = data => {
    return html`
      <div id="main-view">
        ${AppHeader("Weather")} ${this.searchBar.render()} ${Forecast()}
      </div>
    `;
  };

  getWeatherForecast = location => {
    weatherApi.forecast(location.name, 7, response => {
      const { forecast } = response.data;
      const current = new CurrentWeather(response.data);
      const forecastDays = [];
      for (const day of forecast.forecastday) {
        forecastDays.push(new SingleDayForecast(day));
      }
      store.dispatch("setWeather", { current, forecast: forecastDays });
      store.dispatch("setWeatherAvailable", { available: true });
      store.dispatch("removeLocations", {});
    });
  };

  locationSearch = location => {
    weatherApi.search(location, response => {
      store.dispatch("addLocations", response.data);
    });
  };
}
