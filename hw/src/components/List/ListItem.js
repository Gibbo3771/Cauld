import Component from "../Component";
import { html } from "lit-html";

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onClick, location } = this.props;
    return html`
      <div @click=${() => onClick()}>${location.name}</div>
    `;
  }
}
