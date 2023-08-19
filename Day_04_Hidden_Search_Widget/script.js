const searchElt = document.querySelector(".search");
const buttonElt = document.querySelector(".btn");
const inputElt = document.querySelector(".input");

buttonElt.addEventListener("click", () => {
    searchElt.classList.toggle("active");
    inputElt.focus();
})