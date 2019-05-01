import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import store from "../../state/index";

export const Footer = () => {
  return html`
    <div class="footer">${renderIcon()}</div>
  `;
};

const renderIcon = () => {
  const classes = {
    fab: true,
    "fa-github": true,
    "footer-link-git": true
  };
  return html`
    <div class="footer">
      <a
        href="https://github.com/Gibbo3771/Weather-forecaster/tree/master/hw"
        class=${classMap(classes)}
      ></a>
      <a
        class="footer-link-atrr"
        href="https://www.apixu.com/"
        title="Free
          Weather API"
      >
        Powered by Apixu.com</a
      >
    </div>
  `;
};
