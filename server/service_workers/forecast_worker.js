const CurrentWeather = require("../models/current_weather");
const SingleDayForecast = require("../models/single_day_forecast");

const createModels = data => {
  const { forecast } = data;
  const current = new CurrentWeather(data);
  const forecastDays = [];
  for (const day of forecast.forecastday) {
    forecastDays.push(new SingleDayForecast(day));
  }
  return { current, forecast: forecastDays };
};

module.exports = { createModels };
