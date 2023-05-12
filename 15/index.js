var gameTickCounter = 0;

var score = 0;
var shots = 0;

var ufo = null;
const ufoUpdateInterval = 25;
const ufoWidth = 100;
const ufoHeight = 50;
const ufoHorizontalFrequency = 1;
const ufoVerticalFrequency = 2.3;
const ufoHorizontalPeriod = (2 * Math.PI) / (ufoHorizontalFrequency * 1000);
const ufoVerticalPeriod = (2 * Math.PI) / (ufoVerticalFrequency * 1000);

function gameTick() {
    gameTickCounter++;
}

function updateScoreBoard() {
    document.getElementById("scoreBoard").innerHTML = "Score: "
        + score
        + "</br>Shots: "
        + shots;
}

function initRange() {
    let range = document.getElementById("range");

    range.onclick = function() {
        shots++;
        updateScoreBoard();
    }
}

function initUfo() {
    ufo = document.createElement("div");

    ufo.id = "ufo";
    ufo.style.width = ufoWidth + "px";
    ufo.style.height = ufoHeight + "px";
    ufo.style.left = (window.innerWidth - ufoWidth) / 2 + "px";
    ufo.style.top = (window.innerHeight - ufoHeight) / 2 + "px";

    ufo.onclick = function() {
        score++;
        updateScoreBoard();
    }

    setInterval(updateUfo, ufoUpdateInterval);

    document.body.appendChild(ufo);
}

function updateUfo() {
    let width = (window.innerWidth - ufoWidth) / 2;
    let height = (window.innerHeight - ufoHeight) / 2;

    ufo.style.left = (width * Math.sin(ufoHorizontalPeriod * gameTickCounter)) + width + "px";
    ufo.style.top = (height * Math.sin(ufoVerticalPeriod * gameTickCounter)) + height + "px";
}

window.onload = function() {
    document.body.onselectstart = function() { return false; }

    setInterval(gameTick, 1);

    initRange();
    initUfo();

    updateScoreBoard();
}
