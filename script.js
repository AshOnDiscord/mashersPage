import LocomotiveScroll from "./locomotive-scroll.esm.js";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.15,
});

console.log("test");
