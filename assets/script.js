// light/dark toggle

function lightDark() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}


// card flip function

const cards = document.querySelectorAll('.game-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));