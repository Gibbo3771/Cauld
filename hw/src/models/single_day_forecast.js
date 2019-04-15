export default class SingleDayForecast {
  constructor(props) {
    // weather
    const {
      maxtemp_c,
      mintemp_c,
      avgtemp_c,
      maxwind_mph,
      totalprecip_mm
    } = props.day;

    this.maxTempC = maxtemp_c;
    this.minTempC = mintemp_c;
    this.avgTempC = avgtemp_c;
    this.maxWindMPH = maxwind_mph;
    this.precipitationTotal = totalprecip_mm;

    // icon and descriptor
    const { text, icon } = props.day.condition;
    this.descriptor = text;
    this.icon = icon;
  }
}
