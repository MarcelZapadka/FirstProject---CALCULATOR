window.addEventListener('DOMContentLoaded', app);

function app() {
    let resultElement = document.getElementById("result");
    let plusElement = document.getElementById("plus");
    let minusElement = document.getElementById("minus");
    let equalsElement = document.getElementById("equals");
    let multiplyElement = document.getElementById("multiply");
    let divideElement = document.getElementById("divide");
    let dotElement = document.getElementById("dot");
    let clearAll = document.getElementById("clear-all");
    let deleteElement = document.getElementById("delete");
    let percentElement = document.getElementById("percent");
    let switchMode = document.getElementById("switch");
    let container = document.getElementById("container");
    let one = document.getElementById("button-1");
    let two = document.getElementById("button-2");
    let three = document.getElementById("button-3");
    let four = document.getElementById("button-4");
    let five = document.getElementById("button-5");
    let six = document.getElementById("button-6");
    let seven = document.getElementById("button-7");
    let eight = document.getElementById("button-8");
    let nine = document.getElementById("button-9");
    let zero = document.getElementById("button-0");
    let previous = document.getElementById("previous");
    let divOperator = document.getElementById("operator");

    //Adding functionality to buttons
    for (let i = 0; i <= 9; i++) {
        let buttonId = 'button-' + i;
        let buttonElement = document.getElementById(buttonId);
        buttonElement.addEventListener('click', function() {
            resultElement.innerHTML = resultElement.innerHTML + i;
    });}

    //Plus operation
    plusElement.addEventListener('click', function() {
        calculate();
        divOperator.innerText = '+';
    })  

    //Minus operation
    minusElement.addEventListener('click', () => {
        if (resultElement.innerHTML == '') {
            resultElement.innerHTML += '-';
            return; 
        }
         calculate();
         divOperator.innerText = '-'
    }   )

    //Divide operation
    divideElement.addEventListener('click', () => {
        calculate();
        divOperator.innerText = ':';
    })

    //Multiply operation
    multiplyElement.addEventListener('click', () => {
        calculate();
        divOperator.innerText = 'x';
    })

    //Modulus operation
    percentElement.addEventListener('click', () => {
        calculate();
        divOperator.innerText = '%';
    })

    // Equals operation
    equalsElement.addEventListener("click", () =>{
        if (previous.innerText == '') return
            calculate();
            resultElement.innerText = previous.innerText;
            previous.innerText = ''
            divOperator.innerText = ''
    }   )  

    //Adding dot
    dotElement.addEventListener('click', () =>{
        if (resultElement.innerHTML.includes('.')) return;
            resultElement.innerHTML += '.';
    }   )    

    //Clearing calculator
    clearAll.addEventListener('click', () => {
        resultElement.innerText = '';
        previous.innerText = ''
        divOperator.innerText = '';
    })

    //Deleting last number in calculator
    deleteElement.addEventListener( "click", () => resultElement.innerHTML = resultElement.innerHTML.slice(0, -1) )

    // Core function, it runs the Calculator
    function calculate() {
        if (previous.innerText == '') {
            previous.innerText = result.innerText;
            result.innerText = '';
        } else if (previous.innerText != '' && divOperator.innerText == '-') {
            previous.innerText = +previous.innerText - +result.innerText;
            result.innerText = '';
        } else if (previous.innerText != '' && divOperator.innerText == 'x') {
            previous.innerText = +previous.innerText * +result.innerText;
            result.innerText = '';
        } else if (previous.innerText != '' && divOperator.innerText == ':') {
            previous.innerText = +previous.innerText / +result.innerText;
            result.innerText = '';
        } else if (previous.innerText != '' && divOperator.innerText == '+') {
             previous.innerText = +previous.innerText + +result.innerText;
            result.innerText = '';
        } else if (previous.innerText != '' && divOperator.innerText == '%') {
            previous.innerText = +previous.innerText % +result.innerText;
            result.innerText = '';
        }
    }

    //Switch color of calculator onClick
    switchMode.classList.add("add")
    switchMode.addEventListener("click", function() {
        switchMode.classList.toggle("add");
        container.classList.toggle("toggle");
        plusElement.classList.toggle("buttons");
        minusElement.classList.toggle("buttons");
        divideElement.classList.toggle("buttons");
        deleteElement.classList.toggle("buttons");
        percentElement.classList.toggle("buttons");
        multiplyElement.classList.toggle("buttons");
        equalsElement.classList.toggle("buttons");
        clearAll.classList.toggle("buttons");
        dotElement.classList.toggle("buttons");
        one.classList.toggle("buttons");
        two.classList.toggle("buttons");
        three.classList.toggle("buttons");
        four.classList.toggle("buttons");
        five.classList.toggle("buttons");
        six.classList.toggle("buttons");
        seven.classList.toggle("buttons");
        eight.classList.toggle("buttons");
        nine.classList.toggle("buttons");
        zero.classList.toggle("buttons");
        switchMode.classList.toggle("switch_button");
    })
}