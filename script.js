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


const btnRowDelete = document.createElement('div');
btnRowDelete.classList.add('btnRowDelete');
btnPad.appendChild(btnRowDelete);

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('deleteBtn');
deleteBtn.textContent = 'AC'
btnRowDelete.appendChild(deleteBtn);

const btnRow1 = document.createElement('div');
btnRow1.classList.add('btnRow1');
btnPad.appendChild(btnRow1);

const sevenBtn = document.createElement('button');
sevenBtn.classList.add('sevenBtn');
sevenBtn.textContent = '7';
btnRow1.appendChild(sevenBtn);

const eightBtn = document.createElement('button');
eightBtn.classList.add('eightBtn');
eightBtn.textContent = '8';
btnRow1.appendChild(eightBtn);

const nineBtn = document.createElement('button');
nineBtn.classList.add('nineBtn');
nineBtn.textContent = '9';
btnRow1.appendChild(nineBtn);

const divideBtn = document.createElement('button');
divideBtn.classList.add('divideBtn');
divideBtn.textContent = '÷';
btnRow1.appendChild(divideBtn);


const btnRow2 = document.createElement('div');
btnRow2.classList.add('btnRow2');
btnPad.appendChild(btnRow2);

const fourBtn = document.createElement('button');
fourBtn.classList.add('fourBtn');
fourBtn.textContent = '4';
btnRow2.appendChild(fourBtn);

const fiveBtn = document.createElement('button');
fiveBtn.classList.add('fiveBtn');
fiveBtn.textContent = '5';
btnRow2.appendChild(fiveBtn);

const sixBtn = document.createElement('button');
sixBtn.classList.add('sixBtn');
sixBtn.textContent = '6';
btnRow2.appendChild(sixBtn);

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('multiplyBtn');
multiplyBtn.textContent = 'X';
btnRow2.appendChild(multiplyBtn);


const btnRow3 = document.createElement('div');
btnRow3.classList.add('btnRow3');
btnPad.appendChild(btnRow3);

const oneBtn = document.createElement('button');
oneBtn.classList.add('oneBtn');
oneBtn.textContent = '1';
btnRow3.appendChild(oneBtn);

const twoBtn = document.createElement('button');
twoBtn.classList.add('twoBth');
twoBtn.textContent = '2';
btnRow3.appendChild(twoBtn);

const threeBtn = document.createElement('button');
threeBtn.classList.add('threeBtn');
threeBtn.textContent = '3';
btnRow3.appendChild(threeBtn);

const subtractBtn = document.createElement('button');
subtractBtn.classList.add('subtractBtn');
subtractBtn.textContent = '-';
btnRow3.appendChild(subtractBtn);


const btnRow4 = document.createElement('div');
btnRow4.classList.add('btnRow4');
btnPad.appendChild(btnRow4);

const decimalBtn = document.createElement('button');
decimalBtn.classList.add('decimalBtn');
decimalBtn.textContent = '.';
btnRow4.appendChild(decimalBtn);

const zeroBtn = document.createElement('button');
zeroBtn.classList.add('twoBth');
zeroBtn.textContent = '0';
btnRow4.appendChild(zeroBtn);

const equalsBtn = document.createElement('button');
equalsBtn.classList.add('equalsBtn');
equalsBtn.textContent = '=';
btnRow4.appendChild(equalsBtn);

const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = '+';
btnRow4.appendChild(addBtn);

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