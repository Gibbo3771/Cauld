import Component from "../Component";
import { html } from "lit-html";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onItemClick, location } = this.props;
    return html`
      <div @click=${() => onItemClick(location)}>
        ${location.name}
      </div>
    `;
  }
}
