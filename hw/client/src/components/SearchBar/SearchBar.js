import Component from "../Component";
import CrossButton from "../../components/CrossButton/CrossButton";
import List from "../List/List";
import { html } from "lit-html";
import { animate } from "./animations";
import store from "../../state/index";

export default class SearchBar extends Component {
  constructor(props) {
    super({ store });
    store.events.subscribe("Cross:click", this.clear);
    store.events.subscribe("List:location-selected", location =>
      this.setInputValue(location.name)
    );
    store.events.subscribe("Animations:autocomplete-open", animate);
    this.crossButton = new CrossButton();
    this.list = new List();
  }

  render = () => {
    return html`
      <div
        id="autocomplete"
        class="autocomplete"
        @mouseleave=${() => this.onMouseLeave()}
      >
        <input
          id="search"
          class="input"
          type="text"
          autocomplete="off"
          placeholder="Enter city or zipcode"
          .value=${store.state.searchbarValue}
          @input=${this.onInputChange}
          @mouseenter=${this.onMouseEnter}
          @click=${this.onClick}
        />
        ${this.crossButton.render()} ${this.list.render()}
      </div>
    `;
  };

  onInputChange = evt => {
    const value = evt.target.value;
    this.setInputValue(value);
    if (value < 2) return;
    evt.preventDefault();
    store.events.publish("Searchbar:search", store.state.searchbarValue);
    store.events.publish("Animations:autocomplete-open");
  };

  onMouseEnter = () => {
    store.dispatch("autoCompleteVisible", true);
    store.events.publish("Animations:autocomplete-open");
  };

  onClick = () => {
    store.dispatch("autoCompleteVisible", true);
    store.events.publish("Animations:autocomplete-open");
  };

  onMouseLeave = () => {
    store.dispatch("autoCompleteVisible", false);
  };

  setInputValue = value => {
    store.dispatch("setSearchbarValue", value);
  };

  clear = () => {
    store.dispatch("setSearchbarValue", "");
    document.getElementById("search").focus();
  };
}
