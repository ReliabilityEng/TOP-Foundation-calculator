// Style Functions
function addMouseStyles(element) {
    element.addEventListener('mouseover', ()=>{
        element.classList.add('hover');
    });

    element.addEventListener('mouseout', ()=>{
        element.classList.remove('hover');
        element.classList.remove('pressed');
    })

    element.addEventListener('mousedown', ()=>{
        element.classList.add('pressed');
    })

    element.addEventListener('mouseup', ()=>{
        element.classList.remove('pressed');
    })
}

function addKeyboardStyles() {
    window.addEventListener('keydown', (evt) => {
        eventKey = evt.key
        if(eventKey === "=") eventKey = 'Enter';
        
        const btn = document.querySelector(`button[data-key="${eventKey}"]`);
        btn.classList.add('pressed');
    });
    
    window.addEventListener('keyup', (evt) => {
        eventKey = evt.key
        if(eventKey === "=") eventKey = 'Enter';
        
        const btn = document.querySelector(`button[data-key="${eventKey}"]`);
        btn.classList.remove('pressed');
    });
}


// Activating styles modification
const buttons = document.querySelectorAll('button');
buttons.forEach(btn => addMouseStyles(btn));
addKeyboardStyles();


// Calculation function
function calculateResult(numA, numB, operator) {
    switch (operator) {
        case '+':
            return numA + numB;
        case '-':
            return numA - numB;
        case '*':
            return numA * numB;
        case '/':
            return numA / numB;
    }
}

const display = document.querySelector('.display');
console.log(display.textContent);

let numA = 0;
let numB = 0;
let numC = 0;
let dispNum = 0;
let operator;

buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        let btnClass = btn.getAttribute('class');
        if(btnClass.includes('numbers')){

            if(dispNum == 0) {
                display.textContent = 0;
            } 

            if(display.textContent[0] == '0') {
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                btn.getAttribute('data-key') !== "." ? 
                (display.textContent = "",
                display.textContent += btn.getAttribute('data-key')): display.textContent += "";

                if(display.textContent == '0.') {
                    console.log('True');
                    btn.getAttribute('data-key') !== "." ? 
                    (display.textContent = "0.",
                    display.textContent += btn.getAttribute('data-key')): display.textContent += "";
                }
                
            
            } else {
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                btn.getAttribute('data-key') !== "." ? 
                display.textContent += btn.getAttribute('data-key') : display.textContent += "";
            }
            dispNum = parseFloat(display.textContent);
        };

        if(btnClass.includes('operation')) {
            
            if(btn.getAttribute('data-key')== "=") {
                if(numA && numB) {
                    numB = calculateResult(numB, numA, operator);
                    display.textContent = numB;
                } 
                
            } else {
                operator = btn.getAttribute('data-key');
                if (numA) {
                    if(!numB) {
                        numB = numA;
                        numA = null;
                    } else {
                        numB = calculateResult(numB, numA, operator);
                        display.textContent = numB;
                    }
                }
            }
        }

    });
});

