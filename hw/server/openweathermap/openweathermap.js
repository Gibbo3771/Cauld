const queryString = require("querystring");
const axios = require("axios");

const URL = "http://api.openweathermap.org/data/2.5";

const OpenWeatherMap = function(config) {
  this.config = config;
};

OpenWeatherMap.prototype.current = function(query) {
  const params = {
    APPID: this.config.apiKey,
    units: "metric",
    q: query
  };
  return this.request(this.createURL("weather", params));
};

OpenWeatherMap.prototype.createURL = function(method, params) {
  return `${URL}/${method}?${queryString.stringify(params)}`;
};

OpenWeatherMap.prototype.request = function(url) {
  return axios.get(url).then(response => {
    return response;
  });
};

module.exports = OpenWeatherMap;
