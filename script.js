const output = document.getElementsByClassName("calculator-output")[0]; // Updated class name
let operation = null;
let firstNumber = null;

function insert(num) {
    if (output.innerHTML.replace(/[^.]/g, "").length > 0 && num === ".") {
        return;
    }

    if (operation === null) {
        if (["%", "*", "/", "-", "+"].includes(num)) {
            operation = num;
            firstNumber = output.innerHTML;
            output.innerHTML = 0;
        } else {
            output.innerHTML = (output.innerHTML === "0") ? num : output.innerHTML + num;
        }
    } else {
        if (["%", "*", "/", "-", "+"].includes(num)) {
            operation = num;
        } else {
            output.innerHTML = (output.innerHTML === "0") ? num : output.innerHTML + num;
        }
    }
}

function clean() {
    output.innerHTML = 0;
    operation = null;
    firstNumber = null;
}

function equal() {
    const exp = output.innerHTML;
    if (exp && operation !== null) {
        switch (operation) {
            case '+':
                output.innerHTML = parseFloat(firstNumber) + parseFloat(exp);
                break;
            case '-':
                output.innerHTML = parseFloat(firstNumber) - parseFloat(exp);
                break;
            case '*':
                output.innerHTML = parseFloat(firstNumber) * parseFloat(exp);
                break;
            case '/':
                output.innerHTML = parseFloat(firstNumber) / parseFloat(exp);
                break;
        }
    }
    operation = null;
    firstNumber = null;
}

function percent() {
    console.log('=-');
}

function plusMinus() {
    output.innerHTML *= -1;
}
