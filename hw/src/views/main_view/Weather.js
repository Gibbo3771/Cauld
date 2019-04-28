import { html } from "lit-html";
import { subscribe } from "../../helpers/pub_sub";
import API_KEY from "../../../keystore";
import WeatherAPI from "../../helpers/WeatherAPI";
import CurrentWeather from "../../models/current_weather";
import SingleDayForecast from "../../models/single_day_forecast";
import ForecastDay from "../../components/ForecastDay/ForecastDay";
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
      locations: [],
      weather: {
        current: null,
        forecast: []
      }
    };
  }

  render = data => {
    const { current, forecast } = this.state.weather;
    const markup = html`
      <div id="main-view">
        ${AppHeader("Weather")}
        ${this.searchBar.render({
          ...this.state,
          onItemClick: this.getWeatherForecast,
          onCrossClick: this.handleCrossClick
        })}
        <div id="forecast" class="weather">
          ${current
            ? new ForecastDay({
                current: current,
                forecast: forecast[0],
                isToday: true
              }).render()
            : ``}
        </div>
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
      const { forecast } = response.data;
      const currentWeather = new CurrentWeather(response.data);
      const forecastDays = [];
      for (const day of forecast.forecastday) {
        forecastDays.push(new SingleDayForecast(day));
      }
      this.setState({
        weather: {
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
