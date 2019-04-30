import WeatherAPI from "./WeatherAPI";

const weatherApi = new WeatherAPI({ apiKey: process.env.API_KEY });

export default weatherApi;
