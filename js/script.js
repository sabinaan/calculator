let inputValue;
let storedValue;
let operator;

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#btn-equal");
const clearButton = document.querySelector("#clear-btn");
const outputDiv = document.querySelector("#output");

numberButtons.forEach(button => button.addEventListener('click', function(e){ 
    if (!inputValue){
        inputValue = e.target.value.toString();
    } else {
        inputValue += e.target.value.toString();
    }
    display(inputValue);
 })
 );

 
 operatorButtons.forEach(button => button.addEventListener('click', function(e){
    if (!storedValue){
        storedValue = inputValue;
        inputValue = null;
    }else if(inputValue){
        calculateResult()
    }
        
    operator = e.target.value;
})
);


equalButton.addEventListener('click', function(){
    if (!inputValue || !operator) {
        display('ERROR - unfinished input');
    }else{
        calculateResult()
    }
    
});

clearButton.addEventListener('click', clearAll);

function calculateResult(){
    console.log(storedValue, operator, inputValue)
    const result = operate(Number(storedValue), Number(inputValue), operator);
    display(result);
    storedValue = result;
    inputValue = null;
    operator = null;
}

function clearAll(){
    inputValue = null;
    storedValue = null;
    operator = null;
    display("");

}

function display(thingToDisplay){
    outputDiv.textContent = thingToDisplay;
}

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