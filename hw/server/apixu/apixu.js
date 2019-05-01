const queryString = require("querystring");
const axios = require("axios");

const URL = "http://api.apixu.com/v1";

const APIXU = function(config) {
  this.config = config;
};

APIXU.prototype.current = function(query) {
  const params = {
    key: this.config.apiKey,
    q: query
  };
  return this.request(this.createURL("current", params));
};

APIXU.prototype.forecast = function(query, days) {
  const params = {
    key: this.config.apiKey,
    q: query,
    days: days
  };
  return this.request(this.createURL("forecast", params));
};

APIXU.prototype.search = function(query) {
  const params = {
    key: this.config.apiKey,
    q: query
  };
  return this.request(this.createURL("search", params));
};

APIXU.prototype.createURL = function(method, params) {
  return `${URL}/${method}.json?${queryString.stringify(params)}`;
};

APIXU.prototype.request = function(url) {
  return axios.get(url).then(response => {
    return response;
  });
};

module.exports = APIXU;
