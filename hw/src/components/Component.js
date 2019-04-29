import { publish } from "../lib/pubsub/pubsub";

export default class Component {
  constructor(props) {
    this.props = props;
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
