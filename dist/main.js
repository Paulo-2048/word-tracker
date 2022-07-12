"use strict";
const textInput = document.querySelector("#userInput");
const textInputArea = document.querySelector(".inputArea");
const counter = document.querySelector(".counter");
const buttonReset = document.querySelector(".buttonReset");
const originText = document.querySelector(".textExample");
let timer = [0, 0, 0, 0];
let interval;
let intervalRunner = false;
function leadingZero(time) {
    let timeModify;
    if (time <= 9) {
        timeModify = "0" + time;
    }
    else {
        timeModify = time.toString();
    }
    return timeModify;
}
function runtTimer() {
    let currentTime = `${leadingZero(timer[0])}:${leadingZero(timer[1])}:${leadingZero(timer[2])}`;
    counter.innerHTML = currentTime;
    timer[3]++;
    timer[0] = Math.floor(timer[3] / 100 / 60);
    timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60);
    timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000);
}
function start() {
    let textInputLenght = textInput === null || textInput === void 0 ? void 0 : textInput.value.length;
    if (textInputLenght === 0 && !intervalRunner) {
        intervalRunner = true;
        interval = setInterval(runtTimer, 10);
    }
}
function spellCheck() {
    var _a;
    let textEntered = textInput === null || textInput === void 0 ? void 0 : textInput.value;
    let originTextMath = (_a = originText.textContent) === null || _a === void 0 ? void 0 : _a.substring(0, textEntered === null || textEntered === void 0 ? void 0 : textEntered.length);
    if (textEntered == originText.textContent) {
        textInputArea.style.borderColor = "#429890";
        clearInterval(interval);
    }
    else {
        if (textEntered == originTextMath) {
            textInputArea.style.borderColor = "#65ccf3";
        }
        else {
            textInputArea.style.borderColor = "#e95f0f";
        }
    }
}
function reset() {
    clearInterval(interval);
    interval = 0;
    timer = [0, 0, 0, 0];
    intervalRunner = false;
    textInput.value = "";
    counter.innerHTML = "00:00:00";
    textInput.style.borderColor = "gray";
}
textInput === null || textInput === void 0 ? void 0 : textInput.addEventListener("keypress", start, false);
textInput === null || textInput === void 0 ? void 0 : textInput.addEventListener("keyup", spellCheck, false);
buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.addEventListener("click", reset, false);
