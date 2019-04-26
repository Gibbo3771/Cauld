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
    const { onClick } = this.props.onClick;
    return html`
      <div
        id="button-cross"
        class=${classMap(classes)}
        type="submit"
        @click=${() => onClick()}
      ></div>
    `;
  };

  // componentDidMount() {
  //   const { onClick } = this.props;
  //   document
  //     .getElementById("button-cross")
  //     .addEventListener("click", () => onClick());
  // }
}
