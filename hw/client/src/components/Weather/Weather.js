import { html } from "lit-html";
import axios from "axios";
import { getClientIP } from "../../helpers/IPHelper";
import { Forecast } from "../Forecast/Forecast";
import Component from "../Component";
import AppHeader from "../AppHeader/AppHeader";
import SearchBar from "../SearchBar/SearchBar";
import { Footer } from "../Footer/Footer";
import store from "../../state/index";

export default class Weather extends Component {
  constructor() {
    super({ store });
    this.searchBar = new SearchBar();
    store.events.subscribe("List:location-selected", this.getWeatherForecast);
    store.events.subscribe("Searchbar:search", this.locationSearch);
    // this.getByIP();
  }

  render = data => {
    return html`
      <div id="main-view">
        ${AppHeader("CAULD")} ${this.searchBar.render()} ${Forecast()}
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
        store.dispatch("setWeatherAvailable", { available: true });
        store.dispatch("removeLocations", {});
        store.events.publish("Animations:forecast");
      });
  };

  locationSearch = location => {
    return axios.get(`/api/weather/search/${location}`).then(response => {
      store.dispatch("addLocations", response.data);
      store.events.publish("Animations:autocomplete-open");
    });
  };
}
