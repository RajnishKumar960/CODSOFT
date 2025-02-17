
const display = document.getElementById('display');


function appendValue(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value; 
    } else {
        display.textContent += value; 
    }
}


function clearDisplay() {
    display.textContent = '0';
}


function deleteLast() {
    display.textContent = display.textContent.slice(0, -1) || '0';
}

function calculate() {
    try {
        display.textContent = eval(display.textContent.replace('×', '*').replace('÷', '/')) || '0';
    } catch (error) {
        display.textContent = 'Error';
    }
}
