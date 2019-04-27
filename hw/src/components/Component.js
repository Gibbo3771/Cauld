import { publish } from "../helpers/pub_sub";

export default class Component {
  constructor(props) {
    this.props = props;
    this.mounted = false;
    publish("Component:created", this);
  }

  render(props) {
    this.props = { ...this.props, ...props };
  }

  componentDidMount() {}

  componentDidUpdate() {}

  setState(newState) {
    const prevState = { ...this.state };
    this.state = { ...this.state, ...newState };
    publish("Component:state-changed", {
      component: this,
      newState: newState,
      prevState: prevState
    });
  }
}
