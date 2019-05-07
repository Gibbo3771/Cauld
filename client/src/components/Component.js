import Store from "../lib/store/store";

export default class Component {
  constructor(props = {}) {
    if (props.store instanceof Store) {
      const { events } = props.store;
      events.subscribe("Store:state-change", states =>
        this.stateDidChange(states.prevState, states.nextState)
      );
      events.subscribe("App:pre-render", this.preRender);
      events.subscribe("App:post-render", this.postRender);
    }
  }

  // Called one before the dom is rendered
  preRender() {}
  // Call once after the dom is rendered
  postRender() {}
  // Called whenever the state changes
  render() {}

  stateDidChange(prevState, nextState) {}
}
