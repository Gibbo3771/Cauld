import Component from "../Component";
import weatherApi from "../../helpers/weather_api/index";
import CrossButton from "../../components/CrossButton/CrossButton";
import List from "../List/List";
import { html } from "lit-html";
import store from "../../state/index";

export default class SearchBar extends Component {
  constructor(props) {
    super({ store });
    store.events.subscribe("Cross:click", this.clear);
    store.events.subscribe("List:location-selected", location =>
      this.setInputValue(location.name)
    );
    this.crossButton = new CrossButton();
    this.list = new List();
  }

  render = () => {
    // console.log(store.state);
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
  };

  onMouseEnter = () => {
    store.dispatch("autoCompleteVisible", true);
  };

  onClick = () => {
    store.dispatch("autoCompleteVisible", true);
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
