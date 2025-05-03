const content = document.querySelector('.content');
let markup = '';
let player = 'X';

for (let i = 1; i < 10; i += 1) {
    markup += '<div class="item"></div>';
}

content.insertAdjacentHTML('beforeend', markup);

content.addEventListener('click', onClick);

function onClick(evt) {
    if (!evt.target.textContent) { //evt.target.textContent === ""
        evt.target.textContent = player;
        player = player === 'X' ? 'O' : 'X';
    }

}






