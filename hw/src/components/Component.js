import { publish } from "../helpers/pub_sub";

export default class Component {
  constructor(props) {
    this.props = props;
    this.mounted = false;
    publish("Component:created", this);
  }

  render() {}

  componentDidMount() {}

  componentDidUpdate() {}

  setState(newState) {
    this.state = newState;
    publish("Component:state-changed", this);
  }
}
