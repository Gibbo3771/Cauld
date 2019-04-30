export default class CurrentWeather {
  constructor(props) {
    // geo data
    this.location = props.location.name;
    this.country = props.location.country;

    // weather
    const {
      last_updated,
      temp_c,
      feelslike_c,
      wind_mph,
      wind_dir
    } = props.current;
    this.lastUpdated = last_updated;
    this.tempC = temp_c;
    this.feelsLikeC = feelslike_c;
    this.windMPH = wind_mph;
    this.windDir = wind_dir;

    // icon and descriptor
    const { text, icon } = props.current.condition;
    this.descriptor = text;
    this.icon = icon;
  }
}
