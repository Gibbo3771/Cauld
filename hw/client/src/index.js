import "./styles/style.scss";
import SinglePageApp from "./single_page_app";

// App entry point
document.addEventListener("DOMContentLoaded", () => {
  new SinglePageApp().render();
});
