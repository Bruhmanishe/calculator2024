"use strict";

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator-btn");

const calcBtn = document.getElementById("calcBtn");
const clearBtn = document.getElementById("clearBtn");

let inputBtns = [];

buttons.forEach((el) => {
  if (!el.classList.contains("calc-btn")) {
    if (!el.classList.contains("clear-btn")) {
      el.addEventListener("click", addToInput);
      inputBtns.push(el);
    }
  }
});

console.log(inputBtns);

function addToInput(e) {
  for (let i = 0; inputBtns.length > i; i++) {
    if (e.target == inputBtns[i]) {
      display.value += inputBtns[i].textContent;
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
}

calcBtn.addEventListener("click", calc);
clearBtn.addEventListener("click", clear);
