import View from "./View";
import DayView from "./DayView";
import WeatherAPI from "../helpers/weather_api";

export default class MainView extends View {
    constructor(props){
        super(props);
        console.log(process.env);
        this.weather = new WeatherAPI({apiKey: process.env.API_KEY})
    };

    render(){
        const dayView = new DayView(this.props);
        dayView.render();
    };
}