import queryString from "querystring";
import axios from "axios";

const URL = "http://api.apixu.com/v1/";

export default class WeatherAPI {
    constructor(config){
        this.config = config;
    };

    current = (query) => {
        const params = {
            key: this.config.apiKey,
            q: query
        };
        return request(createURL('current', params));
    }

    createURL = (method, params) => {
        return `${URL}/${method}.json?${queryString.stringify(params)};`
    }

    request = (url) => {
        axios.get(url)
            .then((response) => {
                return response;
            });
    };

};