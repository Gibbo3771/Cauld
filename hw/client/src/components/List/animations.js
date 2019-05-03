import anime from "animejs";
import store from "../../state/index";

let active = false;

export const show = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  const { autoCompleteVisible, locations } = store.state;
  if (active) return;
  if (autoCompleteVisible && locations.length > 0) {
    anime({
      targets: el,
      height: "100%",
      opacity: 1,
      duration: 1000,
      complete: () => {
        active = false;
        console.log("ending show");
      },
      begin: () => {
        console.log("Beginning show");
        active = true;
      }
    });
  }
};

export const hide = () => {
  const el = document.querySelector(".autocomplete-items");
  if (!el) return;
  const { autoCompleteVisible, locations } = store.state;
  if (!autoCompleteVisible || locations.length === 0) {
    anime({
      targets: el,
      height: "0",
      opacity: 0,
      duration: 1000,
      complete: () => {
        console.log("ending hide");
        active = false;
      },
      begin: () => {
        console.log("Beginning hide");
        active = true;
      }
    });
  }
};
