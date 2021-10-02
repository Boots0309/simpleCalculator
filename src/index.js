let num1 = 8;
let num2 = 2;
let answer = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

// creat four function: add(), subtract(), divide(), multiply()
function add() {
    num1 + num2;
};

function subtract() {
    console.log("minus button was clicked");
};

function divide() {
    console.log("divide button was clicked");
};

function multiply() {
    console.log("times button was clicked");
};
// call the correct function when the user clicks on one of the buttons
// perform the given calculation in the paragraph with id="sum-el"