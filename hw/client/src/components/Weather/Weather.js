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
    store.events.subscribe("Searchbar:search", this.locationSearch);
    store.events.subscribe("List:location-selected", this.getWeatherForecast);
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

  getWeatherForecast = location => {
    return axios
      .get(`/api/weather/forecast/${location.name}`)
      .then(response => {
        store.dispatch("setCurrentLocation", location);
        store.dispatch("setWeather", response.data);
        store.dispatch("setWeatherAvailable", true);
        store.dispatch("autoCompleteVisible", false);
        store.dispatch("addLocations", []);
        // store.events.publish("Animations:forecast");
      });
  };

  locationSearch = location => {
    return axios.get(`/api/weather/search/${location}`).then(response => {
      store.dispatch("addLocations", response.data);
      store.events.publish("Animations:autocomplete-open");
    });
  };
}
