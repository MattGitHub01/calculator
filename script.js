let prevNum;
let nextNum;
let result = 0;
let operatorCode = null;
let displayTextLoad = 8;
let displayStart = true;
let currentNum = '';


function add(a, b) {
    a = Number(a);
    b = Number(b);
    calcScrnTxt.textContent = a + b;
    result = a + b;
    return a + b
}

function subtract(a ,b) {
    a = Number(a);
    b = Number(b);
    calcScrnTxt.textContent = a - b;
    result = a - b;
    return a - b
}

function multiply(a, b) {
    a = Number(a);
    b = Number(b);
    calcScrnTxt.textContent = a * b;
    result = a * b;
    return a * b
}

function divide(a, b) {
    a = Number(a);
    b = Number(b);
    calcScrnTxt.textContent = a / b;
    result = a / b;
    return a / b
}

function operate(operator, a, b) {
    a = prevNum;
    b = nextNum;
    if (operatorCode == 1) {
        add(a, b);
    } else if (operatorCode == 2) {
        subtract(a, b);
    } else if (operatorCode == 3) {
        multiply(a, b);
    } else if (operatorCode == 4) {
        divide(a, b);
    } else {
        calcScrnTxt.textContent = 'ERROR';
    }
}


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
calcScrnTxt.textContent = '0';
currentNum = calcScrnTxt.textContent;
calcScrn.appendChild(calcScrnTxt);


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
    prevNum = null;
    operator = null;
    nextNum = null;
    displayStart = true;
    displayTextLoad = 8;
    operatorCode = null;
    currentNum = '';
    calcScrnTxt.textContent = '0';
});

const clearEntryBtn = document.createElement('button');
clearEntryBtn.classList.add('clearEntryBtn');
clearEntryBtn.textContent = 'CE'
btnRowDelete.appendChild(clearEntryBtn);
clearEntryBtn.addEventListener('click', () => {
    displayStart = true;
    displayTextLoad = 8;
    currentNum = '';
    calcScrnTxt.textContent = '0';
});


const btnRow1 = document.createElement('div');
btnRow1.classList.add('btnRow1');
btnPad.appendChild(btnRow1);

const sevenBtn = document.createElement('button');
sevenBtn.classList.add('sevenBtn');
sevenBtn.textContent = '7';
btnRow1.appendChild(sevenBtn);
sevenBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '7';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '7';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});

const eightBtn = document.createElement('button');
eightBtn.classList.add('eightBtn');
eightBtn.textContent = '8';
btnRow1.appendChild(eightBtn);
eightBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '8';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '8';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});


const nineBtn = document.createElement('button');
nineBtn.classList.add('nineBtn');
nineBtn.textContent = '9';
btnRow1.appendChild(nineBtn);
nineBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '9';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '9';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});


const divideBtn = document.createElement('button');
divideBtn.classList.add('divideBtn');
divideBtn.textContent = '÷';
btnRow1.appendChild(divideBtn);
divideBtn.addEventListener('click', () => {
if (displayStart === true) {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 4;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent = '÷';
        displayTextLoad = 8;
    } else {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 4;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent = '÷';
        displayTextLoad = 8;
    }
});



const btnRow2 = document.createElement('div');
btnRow2.classList.add('btnRow2');
btnPad.appendChild(btnRow2);

const fourBtn = document.createElement('button');
fourBtn.classList.add('fourBtn');
fourBtn.textContent = '4';
btnRow2.appendChild(fourBtn);
fourBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '4';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '4';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});


const fiveBtn = document.createElement('button');
fiveBtn.classList.add('fiveBtn');
fiveBtn.textContent = '5';
btnRow2.appendChild(fiveBtn);
fiveBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '5';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '5';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});

const sixBtn = document.createElement('button');
sixBtn.classList.add('sixBtn');
sixBtn.textContent = '6';
btnRow2.appendChild(sixBtn);
sixBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '6';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '6';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});

const multiplyBtn = document.createElement('button');
multiplyBtn.classList.add('multiplyBtn');
multiplyBtn.textContent = 'X';
btnRow2.appendChild(multiplyBtn);
multiplyBtn.addEventListener('click', () => {    
    if (displayStart === true) {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 3;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent = 'x';
        displayTextLoad = 8;
    } else {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 3;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent += 'x';
        displayTextLoad = 8;
    }
});


const btnRow3 = document.createElement('div');
btnRow3.classList.add('btnRow3');
btnPad.appendChild(btnRow3);

const oneBtn = document.createElement('button');
oneBtn.classList.add('oneBtn');
oneBtn.textContent = '1';
btnRow3.appendChild(oneBtn);
oneBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '1';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '1';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});


const twoBtn = document.createElement('button');
twoBtn.classList.add('twoBth');
twoBtn.textContent = '2';
btnRow3.appendChild(twoBtn);
twoBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '2';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '2';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});

const threeBtn = document.createElement('button');
threeBtn.classList.add('threeBtn');
threeBtn.textContent = '3';
btnRow3.appendChild(threeBtn);
threeBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '3';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '3';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});

const subtractBtn = document.createElement('button');
subtractBtn.classList.add('subtractBtn');
subtractBtn.textContent = '-';
btnRow3.appendChild(subtractBtn);
subtractBtn.addEventListener('click', () => {
    if (displayStart === true) {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 2;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent = '-';
        displayTextLoad = 8;
    } else {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 2;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent += '-';
        displayTextLoad = 8;
    }
});


const btnRow4 = document.createElement('div');
btnRow4.classList.add('btnRow4');
btnPad.appendChild(btnRow4);

const decimalBtn = document.createElement('button');
decimalBtn.classList.add('decimalBtn');
decimalBtn.textContent = '.';
btnRow4.appendChild(decimalBtn);
decimalBtn.classList.add('decimalBtn');
decimalBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '.';
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '.';
        displayTextLoad--;
    }
});

const zeroBtn = document.createElement('button');
zeroBtn.classList.add('twoBth');
zeroBtn.textContent = '0';
btnRow4.appendChild(zeroBtn);
zeroBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = false;
        calcScrnTxt.textContent = '0';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    } else {
        calcScrnTxt.textContent += '0';
        currentNum = calcScrnTxt.textContent;
        displayTextLoad--;
    }
});


const equalsBtn = document.createElement('button');
equalsBtn.classList.add('equalsBtn');
equalsBtn.textContent = '=';
btnRow4.appendChild(equalsBtn);
equalsBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = true;
        nextNum = currentNum;
        operate(operatorCode, prevNum, nextNum);
        currentNum = result;
        nextNum = 0;
        displayTextLoad = 8;
    } else {
        displayStart = true;
        nextNum = currentNum;
        operate(operatorCode, prevNum, nextNum);
        currentNum = result;
        nextNum = 0;
        displayTextLoad = 8;
    }
});

const addBtn = document.createElement('button');
addBtn.classList.add('addBtn');
addBtn.textContent = '+';
btnRow4.appendChild(addBtn);
addBtn.addEventListener('click', () => {
    if (displayTextLoad === 0) {
    } else if (displayStart === true) {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 1;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent = '+';
        displayTextLoad--;
    } else {
        displayStart = true;
        prevNum = currentNum;
        currentNum = 0;
        operatorCode = 1;
        calcScrnTxt.textContent = '';
        calcScrnTxt.textContent += '+';
        displayTextLoad--;
    }
});