import { publish, subscribe } from "./helpers/pub_sub";
import WeatherAPI from "./helpers/weather_api";
import API_KEY from "../keystore";
import MainView from "./views/main_view/MainView";
import SearchBar from "./components/SearchBar/SearchBar";
import SingleDayForecast from "./models/single_day_forecast";

export default class SinglePageApp {
    constructor(){
        this.root = document.getElementById('root');
        document.body.appendChild(this.root);
        this.bindEvents();
        this.weather = new WeatherAPI({apiKey: API_KEY});
        this.mainView = new MainView({root: this.root});
        this.searchBar = new SearchBar({ root: this.root});
    };

    locationSearch = (data) => {
        this.weather.search(data.detail.location, (response) => {
            publish("App:locations-ready", { locations: response });
        });
    };

    getWeatherForecast = (location) => {
        this.weather.forecast(location, 1, (response) => {
            const singleDayForecast = new SingleDayForecast(response.data);
            publish("App:weather-ready", { forecast : singleDayForecast })
        });
    };

    bindEvents = () => {
        subscribe("SearchBar:search", (data) => {
            this.locationSearch(data);
        });
        subscribe("SearchBar:location-selected", (data) => {
            this.getWeatherForecast(data.detail.location);
        });
    };

};