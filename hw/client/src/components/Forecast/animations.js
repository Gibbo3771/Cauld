import anime from "animejs";

export const animate = (target, delay) => {
  const elements = document.querySelectorAll(".day-background");
  anime({
    targets: elements,
    delay: anime.stagger(100),
    opacity: 1,
    duration: 250,
    easing: "easeOutBack",
    translateY: -50
  });
};
