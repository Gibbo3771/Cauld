const queryString = require("querystring");
const axios = require("axios");

const URL = "http://api.apixu.com/v1";

const WeatherAPI = function(config) {
  this.config = config;
};

WeatherAPI.prototype.current = function(query) {
  const params = {
    key: this.config.apiKey,
    q: query
  };
  return this.request(this.createURL("current", params));
};

WeatherAPI.prototype.forecast = function(query, days) {
  const params = {
    key: this.config.apiKey,
    q: query,
    days: days
  };
  return this.request(this.createURL("forecast", params));
};

WeatherAPI.prototype.search = function(query) {
  const params = {
    key: this.config.apiKey,
    q: query
  };
  return this.request(this.createURL("search", params));
};

WeatherAPI.prototype.createURL = function(method, params) {
  return `${URL}/${method}.json?${queryString.stringify(params)}`;
};

WeatherAPI.prototype.request = function(url) {
  return axios.get(url).then(response => {
    return response;
  });
};

module.exports = WeatherAPI;
