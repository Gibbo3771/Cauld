import Component from "../Component";
import { publish } from "../../helpers/pub_sub";
import { html } from "lit-html";
import { classMap } from "lit-html/directives/class-map";

export default class CrossButton extends Component {
  constructor(props) {
    super(props);
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
        @click=${evt => this.props.onClick(evt)}
      ></div>
    `;
  };
}
