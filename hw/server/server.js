require("dotenv").config();
const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const weatherApi = require("./weather_api/index");
const { createModels } = require("./service_workers/forecast_worker");

const publicPath = path.join(__dirname, "../client/public");
app.use(express.static(publicPath));

app.get("", (req, res) => res.send());

app.get("/api/weather/forecast/:name", (req, res) => {
  const name = req.params.name;
  weatherApi
    .forecast(name, 7)
    .then(response => {
      res.send(createModels(response.data));
    })
    .catch(err => console.log(err));
});

app.get("/api/weather/search/:name", (req, res) => {
  const name = req.params.name;
  weatherApi
    .search(name)
    .then(response => {
      res.json(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
