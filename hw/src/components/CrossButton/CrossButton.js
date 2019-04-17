import { publish } from "../../helpers/pub_sub";

export default class CrossButton {
  constructor(props) {
    this.props = props;
    this.button = document.getElementById("button-cross");
    this.bindEvents();
  }

  onClick = () => {
    publish("CrossButton:clear-search");
  };

  bindEvents = () => {
    this.button.addEventListener("click", this.onClick);
  };
}
