import "./styles/style.scss";
import SinglePageApp from "./single_page_app";
import SimpleContainer from "./components/SimpleContainer";
import PubSub from "./helpers/pub_sub";

// App entry point
document.addEventListener("DOMContentLoaded", () => {
    console.log("Initialising");
    new SinglePageApp(SimpleContainer);
    PubSub.publish("APP:CREATED");
});