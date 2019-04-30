import { expect } from "chai";
import sinon from "sinon";
import store from "../../state/index";

describe("store.js", function() {
  it("is instanced", function() {
    expect(store).to.not.be.null;
  });
});
