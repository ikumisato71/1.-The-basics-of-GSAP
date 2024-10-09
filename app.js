const box1 = document.querySelector(".js-box:nth-child(1)");
const box2 = document.querySelector(".js-box:nth-child(2)");
const box3 = document.querySelector(".js-box:nth-child(3)");

gsap.to(box1, {
  opacity: 0.5,
  x: 300,
  yoyo: true,
  duration: 1,
  repeat: -1,
});

gsap.from(box2, {
  x: -100,
  duration: 2,
  backgroundColor: "red",
});

gsap.fromTo(
  box3,
  {
    x: 120,
    opacity: 0,
    rotation: 180,
  },
  {
    x: 0,
    opacity: 1,
    rotation: 360,
    duration: 3,
  }
);
