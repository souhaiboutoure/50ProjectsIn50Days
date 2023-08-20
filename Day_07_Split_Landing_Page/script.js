const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");
const HOVER_LEFT = "hover-left";
const HOVER_RIGHT = "hover-right";


left.addEventListener("mouseenter", () => container.classList.add(HOVER_LEFT));

left.addEventListener("mouseleave", () => container.classList.remove(HOVER_LEFT));

right.addEventListener("mouseenter", () => container.classList.add(HOVER_RIGHT));

right.addEventListener("mouseleave", () => container.classList.remove(HOVER_RIGHT));


