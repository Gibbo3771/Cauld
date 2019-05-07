import anime from "animejs";
import store from "../../state/index";

let active = false;

export const show = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  const { autoCompleteVisible, locations } = store.state;
  if (active) return;
  if (locations.length > 0) {
    anime({
      targets: el,
      opacity: 1,
      duration: 0,
      complete: () => {
        anime({
          targets: el,
          duration: 200,
          maxHeight: "1000",
          easing: "linear"
        });
      }
    });
  }
};

export const hide = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  const { autoCompleteVisible, locations } = store.state;
  if (!autoCompleteVisible) {
    anime({
      targets: el,
      maxHeight: "0",
      duration: 200,
      easing: "linear",
      complete: () => {
        anime({
          targets: el,
          opacity: 0,
          duration: 0
        });
      }
    });
  }
};
