import Component from "../../components/Component";
import { html } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import { ForecastDay } from "../ForecastDay/ForecastDay";
import store from "../../state/index";

export const Forecast = () => {
  const { available, current, forecast } = store.state.weather;
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
