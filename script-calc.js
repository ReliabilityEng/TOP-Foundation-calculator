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
function calculateResult(numB, numA, operator) {
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

let numA;
let numB;
let numC;
let operator;
let prevNonEqOp;
let prevInput;
let dispNum = 0;


buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        

        let btnClass = btn.getAttribute('class');
        if(btnClass.includes('numbers')){

            display.textContent = dispNum;

            if(display.textContent[0] == '0') {
                // If user selected the period / dot
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                // If user selected numbers
                if(btn.getAttribute('data-key') !== "."){
                    display.textContent += btn.getAttribute('data-key')

                    // Need to ensure that there is only one leading zero
                    display.textContent.slice(0,2) != '0.' ? display.textContent -= '0' : display.textContent += "";
                }              
            
            } else {
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                btn.getAttribute('data-key') !== "." ? 
                display.textContent += btn.getAttribute('data-key') : display.textContent += "";
            }

            dispNum = display.textContent;
            prevInput = 'number';

            console.log(`numA: ${numA}`);
            console.log(`numB: ${numB}`);
            console.log(`dispNum: ${dispNum}`);
            console.log(`operator: ${operator}`);
        };

        if(btnClass.includes('operation')) {
            // Convert the text content into a number
            dispNum = parseFloat(display.textContent);
            
            // If the operator is equal
            if(btn.getAttribute('data-key')== "Enter") {
                
                if(numA && numB) {
                    dispNum = calculateResult(numA, numB, operator);
                    numA = dispNum;
                    display.textContent = dispNum;
                    prevInput = '=';
                    dispNum = 0;

                    console.log(`numA: ${numA}`);
                    console.log(`numB: ${numB}`);
                    console.log(`dispNum: ${dispNum}`);
                    console.log(`operator: ${operator}`);

                    return;
                }

                if(!numA) {
                    numA = dispNum;
                    prevInput = '=';

                    console.log(`numA: ${numA}`);
                    console.log(`numB: ${numB}`);
                    console.log(`dispNum: ${dispNum}`);
                    console.log(`operator: ${operator}`);

                    dispNum = 0;



                    return;
                }

                if(!numB) {
                    numB = numA;
                    numA = dispNum;
                    prevInput = '=';
                    dispNum = calculateResult(numA, numB, operator);
                    display.textContent = dispNum;
                    

                    console.log(`numA: ${numA}`);
                    console.log(`numB: ${numB}`);
                    console.log(`dispNum: ${dispNum}`);
                    console.log(`operator: ${operator}`);

                    dispNum = 0;
                    return;
                }

            // If the operator is non-equal (i.e., +, -, *, /)
            } else {
                operator = btn.getAttribute('data-key');
                if(prevInput === 'number' || !prevInput) {
                    if(numA && numB) {
                        dispNum = calculateResult(numA, numB, operator);
                        numA = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }

                    if(!numA) {
                        numA = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }

                    if(!numB) {
                        numB = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }

                } 
                else if (prevInput === 'operator'){
                    prevInput = 'operator';

                    console.log(`numA: ${numA}`);
                    console.log(`numB: ${numB}`);
                    console.log(`dispNum: ${dispNum}`);
                    console.log(`operator: ${operator}`);

                } else if (prevInput === '=') {
                    if(numA && numB) {
                        
                        numA = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }

                    if(!numA) {
                        numA = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }

                    if(!numB) {
                        numB = dispNum;
                        prevInput = 'operator';

                        console.log(`numA: ${numA}`);
                        console.log(`numB: ${numB}`);
                        console.log(`dispNum: ${dispNum}`);
                        console.log(`operator: ${operator}`);

                        dispNum = 0;
                        return;
                    }
                }
                
            }
        }

    });
});