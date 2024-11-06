const box1 = document.querySelectorAll(".js-box1");
const box2 = document.querySelectorAll(".js-box2");
// const box2 = document.querySelector(".js-box:nth-child(2)");
// const box3 = document.querySelector(".js-box:nth-child(3)");
const textAll = document.querySelectorAll(".js-text"); // h1とpタグにjs-textのクラスを付与して下さい。
const logo = document.querySelectorAll(".js-logo");

// 4. timeline
const TL = gsap.timeline({
  default: {
    ease: "power2",
  },
});

TL.to(box1, {
  height: 200,
  duration: 0.8,
  stagger: {
    each: 0.08, // ばらす間隔（秒）
    from: "random", // ランダムに開始
  },
});
TL.to(
  box2,
  {
    height: 200,
    duration: 0.8,
    stagger: {
      each: 0.08, // ばらす間隔（秒）
      from: "random", // ランダムに開始
    },
  },
  "-=0.8"
)
  // .to(box2, { y: 0, height: 400, duration: 0.8 })
  // .to(box3, { y: 0, duration: 0.8 })
  .from(textAll, { autoAlpha: 0, duration: 0.8, delay: 0.7 })
  .from(logo, {
    y: 10,
    alpha: 0,
    duration: 2,
    ease: "bounce.out",
    stagger: {
      each: 0.08, // ばらす間隔（秒）
      from: "random", // ランダムに開始
    },
  });
