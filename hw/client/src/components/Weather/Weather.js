import { html } from "lit-html";
import axios from "axios";
import { getClientIP } from "../../helpers/IPHelper";
import Forecast from "../Forecast/Forecast";
import Component from "../Component";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import { Footer } from "../Footer/Footer";
import store from "../../state/index";

export default class Weather extends Component {
  constructor() {
    super({ store });
    this.searchBar = new SearchBar();
    this.forecast = new Forecast();
    store.events.subscribe("Searchbar:search", this.onLocationSearch);
    store.events.subscribe("List:location-selected", this.onLocationSelected);
    store.events.subscribe(
      "Animations:forecast-off-screen",
      this.getWeatherForecast
    );
    // this.getByIP(); Going to make this a button
  }

  render = data => {
    return html`
      <div id="main-view">
        ${AppHeader("CAULD")} ${this.searchBar.render()}
        ${this.forecast.render()}
      </div>
      ${Footer()}
    `;
  };

  stateDidChange(prevState, nextState) {
    if (!prevState.weather.available) return;
    if (!prevState.animations.forecast.onScreen) {
      console.log("why so many");
    }
  }

  getByIP = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://api.ipify.org?format=json"
      )
      .then(response => {
        return this.locationSearch(response.data.ip);
      })
      .then(response => {
        this.getWeatherForecast(store.state.locations[0]);
      })
      .then(() => {
        store.dispatch("setSearchbarValue", store.state.locations[0].name);
      });
  };

  getWeatherForecast = () => {
    const { selectedLocation } = store.state;
    return axios
      .get(`/api/weather/forecast/${selectedLocation.name}`)
      .then(response => {
        console.log("get weather");
        store.dispatch("setWeather", response.data);
        store.dispatch("autocompleteReady", false);
        store.dispatch("populateDropdown", []);
      });
  };

  onLocationSelected = location => {
    store.dispatch("setSelectedLocation", location);
    store.dispatch("setWeatherAvailable", false);
    store.events.publish("App:location-ready");
  };

  onLocationSearch = location => {
    return axios.get(`/api/weather/search/${location}`).then(response => {
      store.dispatch("populateDropdown", response.data);
      store.events.publish("Animations:autocomplete-open");
    });
  };
}
