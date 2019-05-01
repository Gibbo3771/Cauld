const OpenWeatherMap = require("./openweathermap");

const openWeatherMap = new OpenWeatherMap({ apiKey: process.env.OWM_API_KEY });

module.exports = openWeatherMap;
