import Component from "../Component";
import CrossButton from "../../components/CrossButton/CrossButton";
import List from "../List/List";
import { html } from "lit-html";
import store from "../../state/index";

export default class SearchBar extends Component {
  constructor(props) {
    super({ store });
    store.events.subscribe("Cross:click", this.clear);
    store.events.subscribe("List:location-selected", location => {
      console.log("Setting searchbar to selected");
      this.setInputValue(location.name);
    });
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
        />
        ${this.crossButton.render()} ${this.list.render()}
      </div>
    `;
  };

  onInputChange = evt => {
    evt.preventDefault();
    const value = evt.target.value;
    this.setInputValue(value);
    if (value.length <= 2) return;
    store.dispatch("autocompleteReady", true);
    store.events.publish("Searchbar:search", store.state.searchbarValue);
  };

  stateDidChange(prevState, nextState) {
    const prevLen = prevState.searchbarValue.length;
    const nextLen = nextState.searchbarValue.length;
    if (nextLen < prevLen && nextLen <= 2) {
      store.dispatch("autocompleteReady", false);
    }
  }

  onSomeSortOfFocus = () => {
    store.dispatch("autocompleteReady", true);
  };

  onMouseLeave = () => {
    store.dispatch("autocompleteReady", false);
  };

  setInputValue = value => {
    store.dispatch("setSearchbarValue", value);
  };

  clear = () => {
    store.dispatch("setSearchbarValue", "");
    document.getElementById("search").focus();
  };
}
