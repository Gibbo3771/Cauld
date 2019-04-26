import { publish } from "../../helpers/pub_sub";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";

export default class CrossButton {
  constructor(props) {
    this.props = props;
    // this.button = document.getElementById("button-cross");
    // this.bindEvents();
  }

  render = () => {
    const classes = {
      fas: true,
      "fa-times": true,
      "button-cross": true
    };
    return html`
      <div id="button-cross" class=${classMap(classes)} type="submit"></div>
    `;
  };

  onClick = () => {
    publish("CrossButton:clear-search");
  };

  bindEvents = () => {
    this.button.addEventListener("click", this.onClick);
  };
}
