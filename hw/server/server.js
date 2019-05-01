require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const apixu = require("./apixu/index");
const openWeatherMap = require("./openweathermap/index");
const { getClientIP } = require("./ipify/ipify");
const { createModels } = require("./service_workers/forecast_worker");

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

app.get("", (req, res) => res.send());

app.get("/api/ip", (req, res) => {
  getClientIP().then(response => {
    res.send(response.data);
  });
});

app.get("/api/weather/current/:location", (req, res) => {
  const location = req.params.location;
  openWeatherMap
    .current(location)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});

app.get("/api/weather/forecast/:name", (req, res) => {
  const name = req.params.name;
  apixu
    .forecast(name, 7)
    .then(response => {
      res.send(createModels(response.data));
    })
    .catch(err => console.log(err));
});

app.get("/api/weather/search/:name", (req, res) => {
  const name = req.params.name;
  apixu
    .search(name)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
