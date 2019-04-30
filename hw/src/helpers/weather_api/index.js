import WeatherAPI from "./WeatherAPI";
import API_KEY from "../../../keystore";

const weatherApi = new WeatherAPI({ apiKey: API_KEY });

export default weatherApi;
