import Game from './game.mjs';
document.getElementById('start-game-button').onclick = e => {
    document.getElementById('main-menu-container').style.display = 'none';

    document.getElementById('game-container').style.display = 'flex';
    window._game = new Game();
}
document.getElementById('leader-board-button').onclick = e => {
    document.getElementById('main-menu-container').style.display = 'none';

    document.getElementById('leader-board-container').style.display = 'flex';

}
document.getElementById('back-to-main-menu').onclick = e => {
    document.getElementById('main-menu-container').style.display = 'flex';

    document.getElementById('leader-board-container').style.display = 'none';

}
const mainMenuButtons = document.querySelectorAll('.main-menu-button');
mainMenuButtons.forEach((button) => {
    button.addEventListener('click', e => {
        document.getElementById('win-game-contaner').style.display = 'none';
        document.getElementById('lose-game-contaner').style.display = 'none';
        document.getElementById('game-container').style.display = 'none';
        document.getElementById('main-menu-container').style.display = 'flex';
        window._game = null
        const allTd = document.querySelectorAll('#game-field > tbody > tr > td');
        allTd.forEach((td) => {
            td.innerHTML = '';
            td.style.color = 'white'
        })
    })
})
const newGameButtons = document.querySelectorAll('.new-game-button');
newGameButtons.forEach((button) => {
    button.addEventListener('click', e => {
        document.getElementById('win-game-contaner').style.display = 'none';
        document.getElementById('lose-game-contaner').style.display = 'none';
        window._game = null
        const allTd = document.querySelectorAll('#game-field > tbody > tr > td');
        allTd.forEach((td) => {
            td.innerHTML = '';
            td.style.color = 'white'
        })
        window._game = new Game();
    })
})