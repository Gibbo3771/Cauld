import Component from "../Component";
import { html } from "lit-html";
import { ListItem } from "./ListItem";
import store from "../../state/index";
import { show, hide } from "./animations";
import { classMap } from "lit-html/directives/class-map";

export default class List extends Component {
  constructor() {
    super({ store });
  }

  render() {
    const { locations } = store.state;
    const classes = {
      "autocomplete-items": true,
      "autocomplete-items-bordered": true
    };
    return html`
      <div id="container" class=${classMap(classes)}>
        ${this.createItems()}
      </div>
    `;
  }

  stateDidChange(prevState, nextState) {
    const {
      locations,
      autoCompleteVisible,
      searchbarValue,
      animations
    } = nextState;
    if (
      autoCompleteVisible &&
      !animations.dropdown.visible &&
      locations.length > 0
    ) {
      store.dispatch("setDropdownAnimationStatus", true);
      show();
      return;
    } else if (
      !autoCompleteVisible &&
      animations.dropdown.visible &&
      (locations.length === 0 || searchbarValue.length <= 2)
    ) {
      store.dispatch("setDropdownAnimationStatus", false);
      hide();
    }
  }

  createItems = props => {
    const { locations } = store.state;
    if (locations.length === 0) return;
    const items = [];
    locations.forEach(location => {
      items.push(ListItem({ location }));
    });
    return items;
  };
}
