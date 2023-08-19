const loadTextElt = document.querySelector(".loading-text");
const bgElt = document.querySelector(".bg");
let load = 0;

const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};

const blurring = () => {
    load++;
    if (load > 99) {
        clearInterval(intervalID);
    }
    loadTextElt.textContent = `${load}%`;
    loadTextElt.style.opacity = scale(load, 0, 100, 1, 0);
    bgElt.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

const intervalID = setInterval(blurring, 30);