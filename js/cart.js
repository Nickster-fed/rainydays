

/* The quantity adjuster - incrementing and decrementing*/ 

let minus = document.querySelector('#minus');

let countValue = document.querySelector('#counter');
let pluss = document.querySelector('#pluss');

let result = document.querySelector('.result');
let table = document.querySelector('.table');

let value = table.rows[3].firstElementChild.childNodes[0].nodeValue;
let numValue = parseFloat(value);

/* Adding value count */


pluss.addEventListener('click', function() {
    let adding = countValue.value;
    
    adding++;

    if (adding > 1) {
        minus.disabled = false;
        
    }
    
    document.querySelector('#counter').value = adding;
    
})



/* Taking away */

minus.addEventListener('click', function() {
    
    let subtract = countValue.value;

    subtract--;

    document.querySelector('#counter').value = subtract;

    if (subtract === 1) {
        minus.disabled = true;
    }

})


/* Adjusting prices */ 

pluss.addEventListener('click', () => {
    let totalResult = countValue.value * numValue;

    result.innerHTML = `<span>$${totalResult}</span>`;
})

minus.addEventListener('click', () => {
    let totalResult = countValue.value * numValue;

    result.innerHTML = `<span>$${totalResult}</span>`;
})


/* Remove content */ 


