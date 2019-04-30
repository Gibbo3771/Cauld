import Component from "../Component";
import { html } from "lit-html";
import { ListItem } from "./ListItem";
import store from "../../state/index";

export default class List extends Component {
  constructor() {
    super({ store });
  }

  render() {
    const { autoCompleteVisible } = store.state;
    if (!autoCompleteVisible) return;
    return html`
      <div id="container" class="autocomplete-items">
        ${this.createItems()}
      </div>
    `;
  }

  createItems = props => {
    const { locations } = store.state;
    const items = [];
    locations.forEach(location => {
      items.push(ListItem({ location }));
    });
    return items;
  };
}
