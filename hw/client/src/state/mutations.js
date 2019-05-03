import { stat } from "fs";

export default {
  addLocations(state, payload) {
    state.locations = payload;
    return state;
  },
  removeLocations(state, payload) {
    state.locations = [];
    return state;
  },
  setWeatherAvailable(state, payload) {
    state.weather.available = payload;
    return state;
  },
  setWeather(state, payload) {
    state.weather.current = payload.current;
    state.weather.forecast = payload.forecast;
    return state;
  },
  autoCompleteVisible(state, payload) {
    state.autoCompleteVisible = payload;
    return state;
  },
  setSearchbarValue(state, payload) {
    state.searchbarValue = payload;
    return state;
  },
  setCurrentLocation(state, payload) {
    state.currentLocation = payload;
    return state;
  },
  setListShow(state, payload) {
    state.animations.listShow = payload;
    return state;
  }
};
