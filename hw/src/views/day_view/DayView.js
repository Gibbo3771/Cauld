import View from "../View";
import { prettyDateParse } from "../../helpers/date_parser";

export default class DayView extends View {
  constructor(props) {
    super(props);
    this.parent = document.getElementById("current-day");
  }

  render() {
    const { tempC, feelsLikeC, windMPH, windDir } = this.props.weather;
    const lastUpdated = prettyDateParse(this.props.weather.lastUpdated);
    const header = this.createTextElement("TEST", "h5");
    this.appendChild(header);
  }

  createTextElement = (text, type) => {
    const e = document.createElement(type);
    e.textContent = text;
    return e;
  };

  createImage = src => {
    const img = document.createElement("img");
    img.src = `http://${src}`;
    return img;
  };

  determineTodayOrTomorrow = lastUpdated => {
    const splitDate = lastUpdated.toString();
    const date = new Date(lastUpdated);
    const today = new Date();
    console.log(lastUpdated);
    if (date.getDate() === today.getDate()) return "CURRENT WEATHER";
    if (date.getDate() === today.getDate() + 1) return "TOMORR0W";
    return;
  };
}
