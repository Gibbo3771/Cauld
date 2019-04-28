import { html } from "lit-html";

export const ListItem = props => {
  const { onItemClick, location } = props;
  return html`
    <div @click=${() => onItemClick(location)}>
      ${location.name}
    </div>
  `;
};
