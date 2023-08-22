const jokeElt = document.getElementById("joke");
const jokeBtnElt = document.getElementById("jokeBtn");
const JOKE_API_URL = "https://icanhazdadjoke.com";
const JOKE_CONFIG = {
   headers: {
         Accept: "application/json"
   }
};

const generateJoke = () => {
    fetch(JOKE_API_URL, JOKE_CONFIG)
        .then( data => data.json())
        .then( data => {
            jokeElt.textContent = data.joke;
        });
}

generateJoke();

jokeBtnElt.addEventListener("click", generateJoke);