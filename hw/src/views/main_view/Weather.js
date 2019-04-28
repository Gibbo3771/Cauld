import { html } from "lit-html";
import { subscribe } from "../../helpers/pub_sub";
import API_KEY from "../../../keystore";
import WeatherAPI from "../../helpers/WeatherAPI";
import CurrentWeather from "../../models/current_weather";
import SingleDayForecast from "../../models/single_day_forecast";
import Forecast from "../../components/Forecast/Forecast";
import Component from "../../components/Component";
import AppHeader from "../../components/AppHeader/AppHeader";
import SearchBar from "../../components/SearchBar/SearchBar";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    this.searchBar = new SearchBar({
      onInputChange: this.locationSearch,
      onLocationSelected: this.getWeatherForecast
    });
    this.forecast = new Forecast();
    this.state = {
      locations: [],
      weather: {
        available: false,
        current: null,
        forecast: []
      }
    };
  }

  render = data => {
    return html`
      <div id="main-view">
        ${AppHeader("Weather")}
        ${this.searchBar.render({
          ...this.state,
          onItemClick: this.getWeatherForecast,
          onCrossClick: this.handleCrossClick
        })}
        ${this.forecast.render({ ...this.state.weather })}
      </div>
    `;
  };

  locationSearch = location => {
    this.weather.search(location, response => {
      this.setState({ locations: response.data });
    });
  };

  getWeatherForecast = location => {
    this.weather.forecast(location.name, 7, response => {
      const { forecast } = response.data;
      const currentWeather = new CurrentWeather(response.data);
      const forecastDays = [];
      for (const day of forecast.forecastday) {
        forecastDays.push(new SingleDayForecast(day));
      }
      this.setState({
        weather: {
          available: true,
          current: currentWeather,
          forecast: forecastDays
        }
      });
    });
  };

  handleCrossClick = () => {
    this.clearLocations();
  };

  clearLocations = () => {
    this.setState({ locations: [] });
  };
}
