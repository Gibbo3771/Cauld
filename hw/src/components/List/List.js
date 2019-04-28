import Component from "../Component";
import { html } from "lit-html";
import { ListItem } from "./ListItem";

export default class List extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    const { autoCompleteVisible } = props;
    if (!autoCompleteVisible) return;
    return html`
      <div id="container" class="autocomplete-items">
        ${this.createItems(props)}
      </div>
    `;
  }

  createItems = props => {
    const { locations, onItemClick } = props;
    const items = [];
    locations.forEach(location => {
      items.push(
        ListItem({
          location: location,
          onItemClick: onItemClick
        })
      );
    });
    return items;
  };
}
