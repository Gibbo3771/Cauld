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
  autoCompleteVisible: false,
  searchbarValue: "",
  animations: {
    listShow: false
  }
};
