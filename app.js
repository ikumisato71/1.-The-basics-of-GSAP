const box1 = document.querySelector(".js-box:nth-child(1)");
const box2 = document.querySelector(".js-box:nth-child(2)");
const box3 = document.querySelector(".js-box:nth-child(3)");
const textAll = document.querySelectorAll(".js-text"); // h1とpタグにjs-textのクラスを付与して下さい。
const logo = document.querySelectorAll(".js-logo");

// click event
box3.addEventListener("click", () => {
  gsap.to(box3, {
    autoAlpha: 0,
    duration: 2,
  });
});
// 回転
gsap.to(box2, {
  x: 100,
  rotate: 360,
  scale: 0.5,
  duration: 2,
});

gsap.to(box1, {
  x: 100,
  duration: 0.5,
});

// 1. stagger
gsap.from(textAll, {
  autoAlpha: 0,
  y: 50,
  x: "random(-100, 100. 5)", //このような書き方をする事で値をランダムにする事ができます。
  x: "random([-150, -100, 100, 150])",
  duration: 0.7,
  stagger: {
    each: 0.6, //各アニメーションの間隔を指定します。
    from: "random", //最初のアニメーションの間隔をランダムにします。
  },
});

// stagger で出現
gsap.from(logo, {
  y: 10,
  alpha: 0,
  duration: 1,
  ease: "bounce.out",
  stagger: {
    each: 0.08, // ばらす間隔（秒）
    from: "random", // ランダムに開始
  },
  // stagger: 0.05, // 0.02秒ごとに出現
});
