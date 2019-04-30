import { html } from "lit-html";
import store from "../../state/index";

export const ListItem = props => {
  const { onLocationSelected, location } = props;
  return html`
    <div @click=${() => store.dispatch("List:location-selected", { location })}>
      ${location.name}
    </div>
  `;
};
