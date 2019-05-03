import anime from "animejs";
import store from "../../state/index";

let active = false;

export const animate = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  const { autoCompleteVisible, locations } = store.state;

  if (active) return;
  if (autoCompleteVisible && locations.length > 0) {
    anime({
      targets: el,
      opacity: 1,
      duration: 0,
      complete: () => {
        anime({
          targets: el,
          height: "100%",
          opacity: 1,
          duration: 1000,
          ease: "linear"
        });
        active = false;
      },
      begin: () => {
        active = true;
      }
    });
  } else {
    anime({
      targets: el,
      height: "0",
      duration: 2000,
      ease: "linear",
      opacity: 0,
      complete: () => {
        active = false;
      },
      begin: () => {
        active = true;
      }
    });
  }
};
