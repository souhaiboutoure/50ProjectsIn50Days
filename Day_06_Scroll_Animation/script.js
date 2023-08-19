const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", loadBoxes);

loadBoxes();

function loadBoxes() {
    const triggerPointBottom = window.innerHeight / 5 * 4;
    boxes.forEach( box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerPointBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    })
};



