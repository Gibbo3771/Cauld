export default {
  addLocations(context, payload) {
    context.commit("addItem", payload);
  },
  removeLocations(context, payload) {
    context.commit("removeLocations", payload);
  },
  setWeatherAvailable(context, payload) {
    context.commit("setWeatherAvailable", payload);
  },
  setWeather(context, payload) {
    context.commit("setWeather", payload);
  },
  autoCompleteVisible(context, payload) {
    context.commit("autoCompleteVisible", payload);
  },
  setSearchbarValue(context, payload) {
    context.commit("setSearchbarValue", payload);
  }
};
