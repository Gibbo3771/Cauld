import Component from "../Component";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";
import store from "../../state/index";

export default class CrossButton extends Component {
  constructor(props) {
    super({ store });
  }

  render = () => {
    const classes = {
      fas: true,
      "fa-times": true,
      "button-cross": true
    };
    return html`
      <div
        id="button-cross"
        class=${classMap(classes)}
        type="submit"
        @click=${this.handleClick}
      ></div>
    `;
  };

  handleClick = () => {
    store.events.publish("Cross:click", {});
  };
}
