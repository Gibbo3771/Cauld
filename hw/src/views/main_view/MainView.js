import View from "../View";
import DayView from "../day_view/DayView";
import WeatherAPI from "../../helpers/weather_api";
import API_KEY from "../../../keystore";
import { publish, subscribe } from "../../helpers/pub_sub";

export default class MainView extends View {
    constructor(props){
        super({...props, parent: document.getElementById("main-view")});
        this.weather = new WeatherAPI({apiKey: API_KEY});
        subscribe("App:weather-ready", this.render);
    };

    render(weatherData){
        console.log("render");
    };

    displayWeatherData = (evt) => {
        // Display weather stuff
    }
}