import ForecastDay from "../components/ForecastDay/ForecastDay";

// Initial state
export default {
  selectedLocation: null,
  locations: [],
  weather: {
    available: false,
    current: null,
    forecast: []
  },
  autoCompleteReady: false,
  searchbarValue: "",
  animations: {
    dropdown: {
      visible: false
    },
    forecast: {
      onScreen: true
    }
  }
};
