require('dotenv').config();
import "./styles/style.scss";
import SinglePageApp from "./single_page_app";
import PubSub from "./helpers/pub_sub";

// App entry point
document.addEventListener("DOMContentLoaded", () => {
    console.log("Initialising");
    new SinglePageApp();
});