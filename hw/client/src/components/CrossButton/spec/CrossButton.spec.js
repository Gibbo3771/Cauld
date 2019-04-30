// import "babel-polyfill";
import CrossButton from "../CrossButton";
import { expect } from "chai";
import jsdom from "mocha-jsdom";
import sinon from "sinon";

describe("CrossButton", function() {
  jsdom({
    url: "http://localhost"
  });

  before(function() {
    this.e = document.createElement("button");
    this.e.id = "button-cross";
    document.body.appendChild(this.e);
    this.button = new CrossButton();
  });

  it("fires the click event when clicked", function() {
    const spy = sinon.spy(this.button, "onClick");
    document.getElementById("button-cross").click();
    expect(spy.called).to.be.true;
  });
});
