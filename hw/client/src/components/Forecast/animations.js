import anime from "animejs";

export const animate = (target, delay) => {
  const elements = document.querySelectorAll(".day-background");
  elements.forEach((el, index) => {
    anime({
      targets: el,
      delay: (index + 1) * 100,
      duration: 1000,
      ease: "easeInCubic",
      translateY: -50
    });
    anime({
      targets: el,
      opacity: 1,
      delay: (index + 1) * 150,
      duration: 2000,
      ease: "linear"
    });
  });
};
