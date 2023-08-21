const SOUNDS = [
    "applause",
    "boo",
    "gasp",
    "tada",
    "victory",
    "wrong"
];
const buttonContainer = document.getElementById("button-container");
let playedSound = "";
SOUNDS.forEach( sound => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = sound;
    button.addEventListener("click", () => {
        pauseSongs();
        document.getElementById(sound).play();
        playedSound = sound;
    })
    buttonContainer.appendChild(button);
});

function pauseSongs() {
    if (playedSound) {
        const sound = document.getElementById(playedSound);
        sound.pause();
        sound.currentTime = 0;
    }
}