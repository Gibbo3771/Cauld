import { html } from "lit-html";
import API_KEY from "../../../keystore";
import WeatherAPI from "../../helpers/WeatherAPI";
import { getClientIP } from "../../helpers/IPHelper";
import CurrentWeather from "../../models/current_weather";
import SingleDayForecast from "../../models/single_day_forecast";
import { Forecast } from "../Forecast/Forecast";
import Component from "../Component";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.weather = new WeatherAPI({ apiKey: API_KEY });
    this.searchBar = new SearchBar({
      onInputChange: this.locationSearch,
      onLocationSelected: this.getWeatherForecast
    });
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
          onLocationSelected: this.getWeatherForecast,
          onCrossClick: this.handleCrossClick
        })}
        ${Forecast({ ...this.state.weather })}
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
      this.clearLocations();
    });
  };

  handleCrossClick = () => {
    this.clearLocations();
  };

  clearLocations = () => {
    this.setState({ locations: [] });
  };
}
