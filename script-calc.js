// Animation of GUI
const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    
    btn.addEventListener('mouseover', ()=>{
        btn.classList.add('hover');
    });

    btn.addEventListener('mouseout', ()=>{
        btn.classList.remove('hover');
        btn.classList.remove('pressed');
    })

    btn.addEventListener('mousedown', ()=>{
        btn.classList.add('pressed');
    })

    btn.addEventListener('mouseup', ()=>{
        btn.classList.remove('pressed');
    })
})
