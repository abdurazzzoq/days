let elForm = document.querySelector('form');
let elInput = document.querySelector('#input');
let elTotal = document.querySelector('.total');


elForm.addEventListener('submit', (e)=>{
    elTotal.textContent = ''
    e.preventDefault();
    let number = Number(elInput.value); 
    if (number === 1) {
       elTotal.textContent += ' Monday'
    }
    else if(number === 2){
        elTotal.textContent += ' Tuesday'
    }
    
    else if(number === 3){
        elTotal.textContent += ' Wednesday'
    }
    else if(number === 4){
        elTotal.textContent += ' Thursday'
    }
    else if(number === 5){
        elTotal.textContent += ' Friday'
    }
    else if(number === 6){
        elTotal.textContent += ' Saturday'
    }
    else if(number === 7){
        elTotal.textContent += ' Sunday'
    }
    else if (number >= 7){
        alert ('You cannot enter more than 7')
    }
}
);


  






