const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

display.value = '';

function resolve() {
    let resultado = eval(display.value)
    switch (resultado) {
        case undefined:
            resultado = '';
        case NaN:
            resultado = 'Math error';
        default:
            break;
    }
    display.value = resultado;
}

buttons.forEach((btn) => {
    btn.addEventListener('click', function(){
        if(btn.id === '='){
            resolve();
        } else if (btn.id === 'ac'){
            display.value = '';
        } else if (btn.id === 'de'){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id;
        }
    })
});