import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { ForecastDay } from "../ForecastDay/ForecastDay";

export const Forecast = props => {
  const { available, current, forecast } = props;
  if (!available) return;
  return html`
    <div id="forecast" class="weather">
      ${repeat(forecast, (day, index) =>
        ForecastDay({
          current: current,
          forecast: day,
          isToday: index === 0
        })
      )}
    </div>
  `;
};
