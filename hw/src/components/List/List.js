import Component from "../Component";
import { html } from "lit-html";
import ListItem from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { locations } = this.props;
    return html`
      <div id="container" class="autocomplete-items">
        ${this.createItems()}
      </div>
    `;
  }

  createItems = () => {
    const { locations } = this.props;
    if (!locations) return;
    let markup = html``;
    locations.forEach(location => {
      console.log(location.name);
      markup += new ListItem({ location: location }).render();
    });
    console.log(markup);
    return markup;
  };
}
