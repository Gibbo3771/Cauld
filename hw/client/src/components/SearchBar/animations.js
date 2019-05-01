import anime from "animejs";
import store from "../../state/index";

export const animate = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  anime({
    targets: el,
    height: "100%",
    duration: 1000,
    ease: "linear"
  });
};
