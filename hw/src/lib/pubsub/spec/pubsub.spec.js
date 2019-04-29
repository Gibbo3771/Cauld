import PubSub from "../pubsub";
import { expect } from "chai";
import sinon from "sinon";

const mock = () => {};

describe("Pubsub", function() {
  before(function() {
    this.pubsub = new PubSub();
  });
  describe("subscribe", function() {
    it("subscribes the function", function() {
      this.pubsub.subscribe("mock", mock);
      expect(this.pubsub.events.hasOwnProperty["mock"]).to.equal([]);
    });
  });
});
