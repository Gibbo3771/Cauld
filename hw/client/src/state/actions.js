export default {
  populateDropdown(context, payload) {
    context.commit("populateDropdown", payload);
  },
  setWeatherAvailable(context, payload) {
    context.commit("setWeatherAvailable", payload);
  },
  setWeather(context, payload) {
    context.commit("setWeather", payload);
  },
  autocompleteReady(context, payload) {
    context.commit("autocompleteReady", payload);
  },
  setSearchbarValue(context, payload) {
    context.commit("setSearchbarValue", payload);
  },
  setSelectedLocation(context, payload) {
    context.commit("setSelectedLocation", payload);
  },
  setDropdownAnimationStatus(context, payload) {
    context.commit("setDropdownAnimationStatus", payload);
  },
  setForecastAnimationStatus(context, payload) {
    context.commit("setForecastAnimationStatus", payload);
  }
};
