const WeatherAPI = require("./WeatherAPI");

const weatherApi = new WeatherAPI({ apiKey: process.env.API_KEY });

module.exports = weatherApi;
