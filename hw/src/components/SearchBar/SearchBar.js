import Component from "../Component";
import CrossButton from "../../components/CrossButton/CrossButton";
import { publish, subscribe } from "../../helpers/pub_sub";
import { html } from "lit-html";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.crossButton = new CrossButton({ onClick: this.handleCrossClick });
    this.state = {
      input: ""
    };
  }

  componentDidMount() {
    this.input = document.getElementById("search");
    this.input.addEventListener("input", this.requestLocations);
    // this.input.addEventListener("focus", this.requestLocations);
    // this.input.addEventListener("click", this.requestLocations);
  }

  render = () => {
    return html`
      <input
        id="search"
        class="input"
        type="text"
        autocomplete="off"
        placeholder="Enter city or zipcode"
        .value=${this.state.input}
        @input=${evt => this.requestLocations(evt)}
      />
      ${this.crossButton.render()}
    `;
  };

  requestLocations = evt => {
    this.setState({ input: evt.target.value });
    if (this.state.input < 2) return;
    evt.preventDefault();
    publish("SearchBar:search", { location: evt.target.value });
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
    this.input.value = text;
    this.clearLocationList();
    publish("SearchBar:location-selected", { location: text });
  };

  handleCrossClick = () => {
    this.setState({ input: "" });
    this.clearLocationList();
  };

  bindEvents = () => {
    subscribe("App:locations-ready", data => {
      this.updateLocationList(data.detail.locations);
    });
  };
}
