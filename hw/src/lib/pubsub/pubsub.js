export default class PubSub {
  constructor() {
    this.events = {};
  }

  subscribe(event, callback) {
    if (!this.events.hasOwnProperty(event)) this.events[event] = [];
    this.events[event].push(callback);
  }

  publish(event, payload = {}) {
    if (!this.events.hasOwnProperty(event)) return [];
    self.events[event].map(callback => callback(payload));
  }
}
