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

const calcScrnTxt = document.createElement('div');
calcScrnTxt.classList.add('calcScrnTxr');
calcScrn.appendChild(calcScrnTxt);

let displayTextLoad = 8;

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
deleteBtn.addEventListener('click', () => {
    displayTextLoad = 8;
    calcScrnTxt.textContent = '';
})


const btnRow1 = document.createElement('div');
btnRow1.classList.add('btnRow1');
btnPad.appendChild(btnRow1);

const sevenBtn = document.createElement('button');
sevenBtn.classList.add('sevenBtn');
sevenBtn.textContent = '7';
btnRow1.appendChild(sevenBtn);
sevenBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
        calcScrnTxt.textContent = 'ERROR';
    } else {
        calcScrnTxt.textContent += '7';
        displayTextLoad--;
    }
})

const eightBtn = document.createElement('button');
eightBtn.classList.add('eightBtn');
eightBtn.textContent = '8';
btnRow1.appendChild(eightBtn);
eightBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '8';
})


const nineBtn = document.createElement('button');
nineBtn.classList.add('nineBtn');
nineBtn.textContent = '9';
btnRow1.appendChild(nineBtn);
nineBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '9';
})


const divideBtn = document.createElement('button');
divideBtn.classList.add('divideBtn');
divideBtn.textContent = '÷';
btnRow1.appendChild(divideBtn);
divideBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '÷';
})



const btnRow2 = document.createElement('div');
btnRow2.classList.add('btnRow2');
btnPad.appendChild(btnRow2);

const fourBtn = document.createElement('button');
fourBtn.classList.add('fourBtn');
fourBtn.textContent = '4';
btnRow2.appendChild(fourBtn);
fourBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '4';
})


const fiveBtn = document.createElement('button');
fiveBtn.classList.add('fiveBtn');
fiveBtn.textContent = '5';
btnRow2.appendChild(fiveBtn);
fiveBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '5';
})

const sixBtn = document.createElement('button');
sixBtn.classList.add('sixBtn');
sixBtn.textContent = '6';
btnRow2.appendChild(sixBtn);
sixBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '6';
})

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('multiplyBtn');
multiplyBtn.textContent = 'X';
btnRow2.appendChild(multiplyBtn);
multiplyBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += 'x';
})


const btnRow3 = document.createElement('div');
btnRow3.classList.add('btnRow3');
btnPad.appendChild(btnRow3);

const oneBtn = document.createElement('button');
oneBtn.classList.add('oneBtn');
oneBtn.textContent = '1';
btnRow3.appendChild(oneBtn);
oneBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '1';
})


const twoBtn = document.createElement('button');
twoBtn.classList.add('twoBth');
twoBtn.textContent = '2';
btnRow3.appendChild(twoBtn);
twoBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '2';
})

const threeBtn = document.createElement('button');
threeBtn.classList.add('threeBtn');
threeBtn.textContent = '3';
btnRow3.appendChild(threeBtn);
threeBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '3';
})

const subtractBtn = document.createElement('button');
subtractBtn.classList.add('subtractBtn');
subtractBtn.textContent = '-';
btnRow3.appendChild(subtractBtn);
subtractBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '-';
})


const btnRow4 = document.createElement('div');
btnRow4.classList.add('btnRow4');
btnPad.appendChild(btnRow4);

const decimalBtn = document.createElement('button');
decimalBtn.classList.add('decimalBtn');
decimalBtn.textContent = '.';
btnRow4.appendChild(decimalBtn);
decimalBtn.classList.add('decimalBtn');
decimalBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '.';
})

const zeroBtn = document.createElement('button');
zeroBtn.classList.add('twoBth');
zeroBtn.textContent = '0';
btnRow4.appendChild(zeroBtn);
zeroBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '0';
})


const equalsBtn = document.createElement('button');
equalsBtn.classList.add('equalsBtn');
equalsBtn.textContent = '=';
btnRow4.appendChild(equalsBtn);
equalsBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '=';
})

const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = '+';
btnRow4.appendChild(addBtn);
addBtn.addEventListener('click', () => {
    calcScrnTxt.textContent += '+';
})

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