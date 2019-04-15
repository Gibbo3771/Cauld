import queryString from "querystring";
import axios from "axios";

const URL = "http://api.apixu.com/v1";

export default class WeatherAPI {
    constructor(config){
        this.config = config;
    };

    current = (query, callback) => {
        const params = {
            key: this.config.apiKey,
            q: query
        };
        return this.request(this.createURL('current', params), callback);
    }

    forecast = (query, days, callback) => {
        const params = {
            key: this.config.apiKey,
            q: query,
            days: days
        };
        console.log(this.createURL('forecast', params));
        return this.request(this.createURL('forecast', params), callback);
    }

    search = (query, callback) => {
        const params = {
            key: this.config.apiKey,
            q: query
        };
        return this.request(this.createURL('search', params), callback);
    }

    createURL = (method, params) => {
        return `${URL}/${method}.json?${queryString.stringify(params)};`
    }

    request = (url, callback) => {
        axios.get(url)
            .then((response) => {
                callback(response);
            });
    };

};