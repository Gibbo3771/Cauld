import "./styles/style.scss";
import SinglePageApp from "./single_page_app";
import BaseComponent from "./components/BaseComponent";
import PubSub from "./helpers/pub_sub";

// App entry point
document.addEventListener("DOMContentLoaded", () => {
    
    new SinglePageApp(new BaseComponent());
})