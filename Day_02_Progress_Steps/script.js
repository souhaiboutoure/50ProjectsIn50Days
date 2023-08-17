const prevBtnElt = document.querySelector("#prev");
const nextBtnElt = document.querySelector("#next");
const progressElt = document.getElementById("progress");
const circlesElts = document.querySelectorAll(".circle");

let currentActiveElt = 1;

const update = () => {
    circlesElts.forEach((circleElt, index) => {
        if (index < currentActiveElt) {
            circleElt.classList.add("active");
        }else {
            circleElt.classList.remove("active");
        }
       progressElt.style.width = (currentActiveElt  - 1)/ (circlesElts.length - 1)* 100 + "%";
    });
}

window.addEventListener("load", () => {
    currentActiveElt = 1;
    update();
})

nextBtnElt.addEventListener("click", () => {
    currentActiveElt++;
    if(currentActiveElt >= circlesElts.length){
        currentActiveElt = circlesElts.length;
        nextBtnElt.disabled = true;
        prevBtnElt.disabled = false;
    }else {
        nextBtnElt.disabled = false;
        prevBtnElt.disabled = false;
    }

    update();
});

prevBtnElt.addEventListener("click",() => {
    currentActiveElt--;
    if(currentActiveElt <= 1) {
        currentActiveElt = 1;
        prevBtnElt.disabled = true;
        nextBtnElt.disabled = false;
    }else{
        prevBtnElt.disabled = false;
        nextBtnElt.disabled = false;
    }

    update();
});

