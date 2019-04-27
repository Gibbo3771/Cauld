import Component from "../Component";
import CrossButton from "../../components/CrossButton/CrossButton";
import List from "../List/List";
import { publish, subscribe } from "../../helpers/pub_sub";
import { html } from "lit-html";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.crossButton = new CrossButton({ onClick: this.handleCrossClick });
    this.list = new List();
    this.state = {
      input: ""
    };
  }

  render = props => {
    return html`
      <div
        id="autocomplete"
        class="autocomplete"
        @mouseleave=${() => this.clearLocationList()}
      >
        <input
          id="search"
          class="input"
          type="text"
          autocomplete="off"
          placeholder="Enter city or zipcode"
          .value=${this.state.input}
          @input=${evt => this.requestLocations(evt)}
          @focus=${evt => this.requestLocations(evt)}
          @click=${evt => this.requestLocations(evt)}
        />
        ${this.crossButton.render()} ${new List(props).render()}
      </div>
    `;
  };

  onInputChange = evt => {
    this.requestLocations(evt);
  };

  onFocus = () => {};

  onClick = () => {};

  requestLocations = evt => {
    this.setState({ input: evt.target.value });
    const { input } = this.state;
    if (input < 2) return;
    evt.preventDefault();
    const { locationSearch } = this.props;
    locationSearch(input);
  };

  updateLocationList = locations => {
    this.clearLocationList();
    const auto = document.getElementById("autocomplete");
    auto.addEventListener("mouseleave", this.clearLocationList);
    const container = document.createElement("div");
    container.setAttribute("id", "autocomplete-items");
    container.setAttribute("class", "autocomplete-items");
    auto.appendChild(container);
    for (const location of locations.data) {
      const item = document.createElement("div");
      item.innerHTML = location.name;
      container.appendChild(item);
      item.addEventListener("click", this.selectLocation);
    }
  };

  clearLocationList = () => {
    const auto = document.getElementById("autocomplete");
    for (const child of auto.children) {
      if (child.id === "autocomplete-items") {
        auto.removeChild(child);
        break;
      }
    }
  };

  selectLocation = evt => {
    publish("App:clear");
    const text = evt.target.innerText;
    this.setState({ input: text });
    this.clearLocationList();
    publish("SearchBar:location-selected", { location: text });
  };

  handleCrossClick = () => {
    this.setState({ input: "" });
    this.clearLocationList();
  };
}
