import WeatherAPI from "./WeatherAPI";
import API_KEY from "../../../keystore";

export const weatherApi = new WeatherAPI({ apiKey: API_KEY });
