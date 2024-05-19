const container = document.querySelector('.container');


const calcBody = document.createElement('div');
calcBody.classList.add('calcBody');
container.appendChild(calcBody);

const title = document.createElement('h3');
title.textContent = 'Calculator';
title.classList.add('title');
calcBody.appendChild(title);


const calcScrn = document.createElement('div');
calcScrn.classList.add('calcScrn');
calcBody.appendChild(calcScrn);

const btnPad = document.createElement('div');
btnPad.classList.add('btnPad');
calcBody.appendChild(btnPad);

const sevenBtn = document.createElement('button');
sevenBtn.classList.add('sevenBtn');
sevenBtn.textContent = '7';
btnPad.appendChild(sevenBtn);

const eightBtn = document.createElement('button');
eightBtn.classList.add('eightBtn');
eightBtn.textContent = '8';
btnPad.appendChild(eightBtn);

const nineBtn = document.createElement('button');
nineBtn.classList.add('nineBtn');
nineBtn.textContent = '9';
btnPad.appendChild(nineBtn);

const divideBtn = document.createElement('button');
divideBtn.classList.add('divideBtn');
divideBtn.textContent = '÷';
btnPad.appendChild(divideBtn);

const fourBtn = document.createElement('button');
fourBtn.classList.add('fourBtn');
fourBtn.textContent = '4';
btnPad.appendChild(fourBtn);

const fiveBtn = document.createElement('button');
fiveBtn.classList.add('fiveBtn');
fiveBtn.textContent = '5';
btnPad.appendChild(fiveBtn);

const sixBtn = document.createElement('button');
sixBtn.classList.add('sixBtn');
sixBtn.textContent = '6';
btnPad.appendChild(sixBtn);

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('multiplyBtn');
multiplyBtn.textContent = 'X';
btnPad.appendChild(multiplyBtn);

const oneBtn = document.createElement('button');
oneBtn.classList.add('oneBtn');
oneBtn.textContent = '1';
btnPad.appendChild(oneBtn);

const twoBtn = document.createElement('button');
twoBtn.classList.add('twoBth');
twoBtn.textContent = '2';
btnPad.appendChild(twoBtn);

const threeBtn = document.createElement('button');
threeBtn.classList.add('threeBtn');
threeBtn.textContent = '3';
btnPad.appendChild(threeBtn);

const subtractBtn = document.createElement('button');
subtractBtn.classList.add('subtractBtn');
subtractBtn.textContent = '-';
btnPad.appendChild(subtractBtn);

const decimalBtn = document.createElement('button');
decimalBtn.classList.add('decimalBtn');
decimalBtn.textContent = '.';
btnPad.appendChild(decimalBtn);

const zeroBtn = document.createElement('button');
zeroBtn.classList.add('twoBth');
zeroBtn.textContent = '0';
btnPad.appendChild(zeroBtn);

const equalsBtn = document.createElement('button');
equalsBtn.classList.add('equalsBtn');
equalsBtn.textContent = '=';
btnPad.appendChild(equalsBtn);

const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = '+';
btnPad.appendChild(addBtn);

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

function operate(operator, a, b) {

}