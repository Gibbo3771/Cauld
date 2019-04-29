import PubSub from "../pubsub/pubsub";

export default class Store {
  constructor(params) {
    this.actions = {};
    this.mutations = {};
    this.state = {};

    this.events = new PubSub();

    if (params.hasOwnProperty("actions")) this.actions = params.actions;
    if (params.hasOwnProperty("mutations")) this.mutations = params.mutations;

    this.state = new Proxy(params.state || {}, {
      set: (state, key, value) => {
        state[key] = value;
        this.events.publish("Store:state-change", this.state);
        return true;
      }
    });
  }

  dispatch(actionKey, payload) {
    if (typeof this.actions[actionKey] !== "function") {
      console.error(`Action ${actionKey} does not exist`);
      return false;
    }
    this.actions[actionKey](this, payload);
    return true;
  }

  commit(mutationKey, payload) {
    if (typeof this.mutations[mutationKey] !== "function") {
      console.error(`Mutation ${mutationKey} does not exist`);
      return false;
    }

    const newState = this.mutations[mutationKey](this.state, payload);
    this.state.set(Object.assign(this.state, newState));
    return true;
  }
}
