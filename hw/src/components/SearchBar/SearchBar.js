import Component from "../Component";
import CrossButton from "../../components/CrossButton/CrossButton";
import List from "../List/List";
import { publish, subscribe } from "../../helpers/pub_sub";
import { html } from "lit-html";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.crossButton = new CrossButton({ onClick: this.onCrossClick });
    this.list = new List();
    this.state = {
      autoCompleteVisible: false,
      input: ""
    };
  }

  render = props => {
    super.render(props);
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
          .value=${this.state.input}
          @input=${evt => this.onInputChange(evt)}
          @mouseenter=${evt => this.onMouseEnter(evt)}
          @click=${evt => this.onClick(evt)}
        />
        ${this.crossButton.render()}
        ${this.list.render({ ...this.state, ...this.props })}
      </div>
    `;
  };

  onInputChange = evt => {
    this.setState({ autoCompleteVisible: true });
    this.setInputValue(evt.target.value);
    const { input } = this.state;
    if (input < 2) return;
    evt.preventDefault();
    const { onInputChange } = this.props;
    onInputChange(input);
  };

  onMouseEnter = () => {
    this.setState({ autoCompleteVisible: true });
  };

  onClick = () => {
    this.setState({ autoCompleteVisible: true });
  };

  onMouseLeave = () => {
    this.setState({ autoCompleteVisible: false });
  };

  setInputValue = value => {
    this.setState({ input: value });
  };

  onCrossClick = () => {
    this.setState({ input: "" });
    this.props.onCrossClick();
  };
}
