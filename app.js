const box1 = document.querySelector(".js-box:nth-child(1)");
const box2 = document.querySelector(".js-box:nth-child(2)");
const box3 = document.querySelector(".js-box:nth-child(3)");
const textAll = document.querySelectorAll(".js-text"); // h1とpタグにjs-textのクラスを付与して下さい。

// click event
// box1.addEventListener("click", () => {
//   gsap.to(box1, {
//     autoAlpha: 0,
//     duration: 2,
//   });
// });

// 1. stagger
gsap.from(textAll, {
  autoAlpha: 0,
  y: 50,
  // x: "random(-100, 100. 5)", //このような書き方をする事で値をランダムにする事ができます。
  // x: "random([-150, -100, 100, 150])",
  duration: 0.4,
  stagger: {
    each: 0.6, //各アニメーションの間隔を指定します。
    from: "random", //最初のアニメーションの間隔をランダムにします。
  },
});

// 2. keyframes
// gsap.to(box1, {
// 	keyframes: [
// 		{ duration: 0.3, x: 100 },
// 		{ duration: 0.3, y: 100 },
// 		{ duration: 0.3, x: 200 },
// 	],
// });

// 3. set some values
// gsap.set(box1, {
// 	x: 100,
// 	y: 100,
// 	scale: 2,
// });

// 4. timeline
const TL = gsap.timeline({
  defaults: {
    duration: 0.5,
    y: 30,
  },
});

TL.from(box1, { autoAlpha: 0 })
  .from(box2, { autoAlpha: 0 })
  .from(box3, { autoAlpha: 0 })
  .from("h1", { autoAlpha: 0 })
  .from("p", { autoAlpha: 0 });
