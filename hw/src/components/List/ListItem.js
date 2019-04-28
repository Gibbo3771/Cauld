import { html } from "lit-html";

export const ListItem = props => {
  const { onLocationSelected, location } = props;
  return html`
    <div @click=${() => onLocationSelected(location)}>
      ${location.name}
    </div>
  `;
};
