export default class SingleDayForecast {
    constructor(props){
        this.props = props;
        // geo data
        this.location = props.location.name;
        this.country = props.location.country;

        // weather
        const { last_updated, temp_c, feelslike_c, wind_mph, wind_dir } = this.props.current;
        const { maxtemp_c, mintemp_c, avgtemp_c, maxwind_mph } = this.props.forecast.forecastday[0].day;
        const { text, icon } = this.props.current.condition;
        this.lastUpdated = last_updated;
        this.tempC = temp_c;
        this.feelsLikeC = feelslike_c;
        this.windMPH = wind_mph;
        this.windDir = wind_dir;
        this.maxTempC = maxtemp_c;
        this.minTempC = mintemp_c;
        this.avgTempC = avgtemp_c;
        this.maxWindMPH = maxwind_mph;

        // icon and descriptor
        this.descriptor = text;
        this.icon = icon;
    };
};