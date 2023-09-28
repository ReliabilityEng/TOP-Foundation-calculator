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
const display = document.querySelector('.display');
console.log(display.textContent);

let numA;
let numB;
let numC;

buttons.forEach(btn => {
    btn.addEventListener('click', ()=>{
        let btnClass = btn.getAttribute('class');
        if(btnClass.includes('numbers')){
            if(display.textContent[0] == '0') {
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                btn.getAttribute('data-key') !== "." ? 
                (display.textContent = "",
                display.textContent += btn.getAttribute('data-key')): display.textContent += "";
            } else {
                (btn.getAttribute('data-key') == "." && !display.textContent.includes('.')) ? display.textContent += "." :  display.textContent += "";

                btn.getAttribute('data-key') !== "." ? 
                display.textContent += btn.getAttribute('data-key') : display.textContent += "";
            }
            
            numA = parseFloat(display.textContent);
        };

    });
});