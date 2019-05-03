import anime from "animejs";
import store from "../../state/index";

export const show = data => {
  const elements = document.querySelectorAll(".day-background");
  elements.forEach((el, index) => {
    anime({
      targets: el,
      delay: (index + 1) * 100,
      duration: 1000,
      easing: "easeOutBack",
      translateY: -50,
      begin: () => {
        store.events.publish("setWeather", data);
      }
    });
    anime({
      targets: el,
      opacity: 1,
      delay: (index + 1) * 150,
      duration: 200,
      easing: "linear"
    });
  });
};

export const hide = () => {
  const elements = document.querySelectorAll(".day-background");
  elements.forEach((el, index) => {
    anime({
      targets: el,
      delay: (index + 1) * 100,
      duration: 3000,
      easing: "easeOutBack",
      translateY: 3000
    });
  });
};
