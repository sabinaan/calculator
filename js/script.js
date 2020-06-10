let inputValue = "";
let operator;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#btn-equal");
const clearButton = document.querySelector("#clear-btn");
const outputDiv = document.querySelector("#output");

numberButtons.forEach(button => button.addEventListener('click', function(e){ 
    inputValue += e.target.value;
    outputDiv.textContent = inputValue;
 })
 );

 operatorButtons.forEach(button => button.addEventListener('click', function(e){
    operator = e.target.value;
    storedValue = inputValue;
    inputValue = "";
})
);

equalButton.addEventListener('click', function(){
    console.log(Number(storedValue), Number(inputValue), operator);
    const result = operate(Number(storedValue), Number(inputValue), operator);
    outputDiv.textContent = result;
    inputValue = "";
});



function add(a , b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
}

function operate(a, b , operator){
    
    switch (operator){
        case 'add':
            return add(a, b)
        case 'subtract':
            return subtract(a, b)
        case 'multiply':
            return multiply(a, b)
        case 'divide':
            return divide(a, b)
    }
}