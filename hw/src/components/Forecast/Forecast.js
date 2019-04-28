import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { ForecastDay } from "../ForecastDay/ForecastDay";

export default class Forecast extends Component {
  render(props) {
    super.render(props);
    const { available, current, forecast } = this.props;
    if (!available) return;
    return html`
      <div id="forecast" class="weather">
        ${repeat(forecast, (day, index) =>
          ForecastDay({
            current: this.props.current,
            forecast: day,
            isToday: index === 0
          })
        )}
      </div>
    `;
  }
}
