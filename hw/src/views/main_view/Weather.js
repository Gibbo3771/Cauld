import { html } from "lit-html";
import { subscribe } from "../../helpers/pub_sub";
import API_KEY from "../../../keystore";
import WeatherAPI from "../../helpers/WeatherAPI";
import ForecastDayView from "../weather_forecast_views/ForecastDayView";
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
    this.renderDelayMillis = 50;
    this.state = {
      locations: []
    };
  }

  render = data => {
    const markup = html`
      <div id="main-view">
        ${AppHeader("Weather")}
        ${this.searchBar.render({
          ...this.state,
          onItemClick: this.getWeatherForecast,
          onCrossClick: this.handleCrossClick
        })}
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

  locationSearch = location => {
    this.weather.search(location, response => {
      this.setState({ locations: response.data });
    });
  };

  getWeatherForecast = location => {
    this.weather.forecast(location.name, 7, response => {
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

  handleCrossClick = () => {
    this.clearLocations();
  };

  clearLocations = () => {
    this.setState({ locations: [] });
  };
}
