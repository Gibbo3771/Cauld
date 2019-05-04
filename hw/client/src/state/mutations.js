import { stat } from "fs";

export default {
  populateDropdown(state, payload) {
    state.locations = payload;
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
  autocompleteReady(state, payload) {
    state.autocompleteReady = payload;
    return state;
  },
  setSearchbarValue(state, payload) {
    state.searchbarValue = payload;
    return state;
  },
  setSelectedLocation(state, payload) {
    state.selectedLocation = payload;
    return state;
  },
  setDropdownAnimationStatus(state, payload) {
    state.animations.dropdown.visible = payload;
    return state;
  },
  setForecastAnimationStatus(state, payload) {
    state.animations.forecast.onScreen = payload;
    return state;
  }
};
