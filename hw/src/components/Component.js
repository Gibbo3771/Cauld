import Store from "../lib/store/store";

export default class Component {
  constructor(props = {}) {
    if (props.store instanceof Store) {
      props.store.events.subscribe(
        "Store:state-change",
        this.componentDidUpdate
      );
    }
  }

  render() {}

  componentDidUpdate() {}
}
