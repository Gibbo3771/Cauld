import { publish, subscribe } from "../../helpers/pub_sub";
import { html } from "lit-html";

export default class SearchBar {
  constructor(props) {
    this.props = props;
    // this.input = document.getElementById("search");
    // this.input.addEventListener("input", this.requestLocations);
    // this.input.addEventListener("focus", this.requestLocations);
    // this.input.addEventListener("click", this.requestLocations);
    this.bindEvents();
  }

  render = () => {
    return html`
      <input
        id="search"
        class="input"
        type="text"
        autocomplete="off"
        placeholder="Enter city or zipcode"
      />
    `;
  };

  requestLocations = evt => {
    if (this.input.value.length < 2) return;
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

  bindEvents = () => {
    subscribe("App:locations-ready", data => {
      this.updateLocationList(data.detail.locations);
    });
    subscribe("CrossButton:clear-search", data => {
      this.input.value = "";
      this.clearLocationList();
    });
  };
}
