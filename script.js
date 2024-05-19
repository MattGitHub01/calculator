function add(a, b) {
    return a + b
}

function subtract(a ,b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

const container = document.querySelector('.container');

const calcBody = document.createElement('div');
calcBody.classList.add('calcBody');
container.appendChild(calcBody);

const title = document.createElement('h3');
title.textContent = 'Calculator';
title.classList.add('title');

const calcScrn = document.createElement('div');
calcScrn.classList.add('calcScrn');
calcBody.appendChild(calcScrn);
