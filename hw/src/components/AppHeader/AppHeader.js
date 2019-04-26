import { html } from "lit-html";

const AppHeader = title => {
  return html`
    <h3 class="page-title">${title}</h3>
  `;
};

export default AppHeader;
