// Functions
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

