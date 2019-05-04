import anime from "animejs";
import store from "../../state/index";

export const setup = () => {
  const elements = document.querySelectorAll(".day-background");
  anime({
    targets: elements,
    opacity: 0,
    duration: 0,
    translateY: 1000
  });
};

export const show = data => {
  document.querySelector(".weather").style.display = "flex";
  const elements = document.querySelectorAll(".day-background");
  anime({
    targets: elements,
    opacity: 1,
    delay: anime.stagger(100),
    duration: 500,
    translateY: "0px",
    easing: "easeOutBack",
    begin: () => {},
    complete: () => {
      console.log("complete show");
      store.dispatch("setForecastAnimationStatus", true);
    }
  });
};

export const hide = () => {
  const elements = document.querySelectorAll(".day-background");
  anime({
    targets: elements,
    delay: anime.stagger(100),
    duration: 500,
    easing: "easeOutBack",
    translateY: 1000,
    begin: () => {},
    complete: () => {
      document.querySelector(".weather").style.display = "none";
      console.log("complete hide");
      store.dispatch("setForecastAnimationStatus", false);
      store.events.publish("Animations:forecast-off-screen");
      show();
    }
  });
};
