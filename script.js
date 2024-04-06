"use strict";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-btn");
const calculator = document.getElementById("calculator");

const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");
const audioBack = new Audio("videoplayback.m4a.wav");

let inputBtns = [];
let inputLenght = [];
let maxLenght = 15;

buttons.forEach((el) => {
  if (!el.classList.contains("calc-btn")) {
    if (!el.classList.contains("clear-btn")) {
      el.addEventListener("click", addToInput);
      inputBtns.push(el);
    }
  }
});

console.log(audioBack);

function addToInput(e) {
  for (let i = 0; inputBtns.length > i; i++) {
    if (e.target == inputBtns[i]) {
      if (inputLenght.length >= maxLenght) {
        return (display.value = "Too much numbers");
      }
      display.value += inputBtns[i].textContent;
      let inputTxt = display.value;
      inputLenght = inputTxt.split("");
      console.log(inputLenght);
    }
  }
}

function calc() {
  try {
    const toCalc = display.value;
    display.value = eval(toCalc);
  } catch (error) {
    display.value = "Error";
  }
}

function clear() {
  display.value = "";
  inputLenght = [];
}

function playAudio() {
  audioBack.play();
  audioBack.volume = 0.2;
}

calcBtn.addEventListener("click", calc);
clearBtn.addEventListener("click", clear);
window.addEventListener("click", (e) => {
  buttons.forEach((el) => (el.onclick = playAudio()));
});
