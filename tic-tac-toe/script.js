let turn = 'X';
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function(){
        btn.textContent = turn;
        if(turn === 'X'){
            turn = 'O';
        }else{
            turn = 'X';
        }
    });
});