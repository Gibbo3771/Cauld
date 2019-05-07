import { html } from "lit-html";

const AppHeader = title => {
  return html`
    <div class="header">
      <h3 class="page-title">${title}</h3>
    </div>
  `;
};

export default AppHeader;
