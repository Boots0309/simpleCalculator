let num1 = 8;
let num2 = 2;
let answer = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// creat four function: add(), subtract(), divide(), multiply()
function add() {
    let total = num1 + num2;
    answer.textContent = "Result: " + total;
};

function subtract() {
    let total = num1 - num2;
    answer.textContent = "Result: " + total;
};

function divide() {
    let total = num1 / num2;
    answer.textContent = "Result: " + total;
};

function multiply() {
    let total = num1 * num2;
    answer.textContent = "Result: " + total;
};
// call the correct function when the user clicks on one of the buttons
// perform the given calculation in the paragraph with id="sum-el"