const openElt = document.getElementById("open");
const closeElt = document.getElementById("close");
const containerElt = document.querySelector('.container');

openElt.addEventListener('click', () => containerElt.classList.add("show-nav"));

closeElt.addEventListener('click', () => containerElt.classList.remove("show-nav"));
