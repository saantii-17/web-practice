const moves = ['rock', 'paper', 'scissors']
const playerPuntuation = document.querySelector('#player-puntuation');
const cpuPuntuation = document.querySelector('#cpu-puntuation');
loadPuntuation();

function checkWinner (playerMove, cpuMove) {
    if (playerMove === 'rock') {
        if (cpuMove === 'rock'){
            playerPuntuation.textContent ++;
            cpuPuntuation.textContent ++;
        }else if (cpuMove === 'paper'){
            cpuPuntuation.textContent ++;
        }else{
            playerPuntuation.textContent ++;
        }
    }else if (playerMove === 'paper') {
        if (cpuMove === 'rock'){
            playerPuntuation.textContent ++;
        }else if (cpuMove === 'paper'){
            playerPuntuation.textContent ++;
            cpuPuntuation.textContent ++;
        }else{
            cpuPuntuation.textContent ++;
        }
    }else{
        if (cpuMove === 'rock'){
            cpuPuntuation.textContent ++;
        }else if (cpuMove === 'paper'){
            playerPuntuation.textContent ++;
        }else{
            playerPuntuation.textContent ++;
            cpuPuntuation.textContent ++;
        }
    }
}

function savePuntuation () {
    localStorage.setItem('playerPuntuation', playerPuntuation.textContent)
    localStorage.setItem('cpuPuntuation', cpuPuntuation.textContent)
}

function loadPuntuation() {
    [playerPuntuation, cpuPuntuation].forEach((elem, index) => {
        const key = index === 0 ? 'playerPuntuation' : 'cpuPuntuation';
        elem.textContent = localStorage.getItem(key) || 0;
    });
}


document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', () => {
        let playerMove = btn.id;
        let cpuMove = moves[Math.floor(Math.random() * 3)];
        checkWinner(playerMove, cpuMove)
        savePuntuation()
    });
});