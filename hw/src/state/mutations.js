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
    state.input = payload;
    return state;
  }
};
