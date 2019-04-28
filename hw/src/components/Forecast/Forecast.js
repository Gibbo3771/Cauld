import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import ForecastDay from "../ForecastDay/ForecastDay";

export default class Forecast extends Component {
  render(props) {
    super.render(props);
    const { available } = this.props;
    if (!available) return;
    const days = this.createForecastDays();
    return html`
      <div id="forecast" class="weather">
        ${repeat(days, (day, index) =>
          day.render({
            current: this.props.current,
            forecast: this.props.forecast[index],
            isToday: index === 0
          })
        )}
      </div>
    `;
  }

  createForecastDays = () => {
    const { current, forecast } = this.props;
    let days = [];
    for (let x = 0; x < forecast.length; x++) {
      days.push(new ForecastDay());
    }
    return days;
  };
}
