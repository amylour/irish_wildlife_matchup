// General Variables
const cards = document.querySelectorAll('.game-card');


let firstCard, secondCard;

/** card flip and game play function learned, 
* practised and adapted from freeCodeCamp Youtube 
* tutorial by Marina Ferreira */
function flipCard() {
    this.classList.toggle('flip');
}

if(!hasTurnedCard) {
    //first click
    hasTurnedCard = true;
    firstCard = this;
}  else  {
    //second click
    hasTurnedCard = false;
    secondCard = this;

    //are the cards a match?
    if(firstCard.)
}



cards.forEach(card => card.addEventListener('click', flipCard));








// light/dark toggle

function lightDark() {
    var element = document.body;
    element.classList.toggle('dark-mode');
    document.body.classList.toggle('.dark-mode');
}

// change toggle color for light/dark theme
// credit https://tutorial.eyehunts.com/js/swap-images-in-javascript-simple-onclick-image-swap-example/

function changeImage() {
    if (document.getElementById("ld-theme").src.endsWith('night_in_day.png') == true) {
        document.getElementById("ld-theme").src = "assets/images/day_in_night.png";
    }  else if (document.getElementById("ld-theme").src.endsWith('day_in_night.png') == true) {
        document.getElementById("ld-theme").src = "assets/images/night_in_day.png";
    }

    if (document.getElementById("ld-vol").src.endsWith('volume.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume_light.png";
    }  else if (document.getElementById("ld-vol").src.endsWith('volume_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume.png";
    }

    if (document.getElementById("ld-vol-mute").src.endsWith('volume-mute.png') == true) {
        document.getElementById("ld-vol-mute").src = "assets/images/volume-mute_light.png";
    }  else if (document.getElementById("ld-vol-mute").src.endsWith('volume-mute_light.png') == true) {
        document.getElementById("ld-vol-mute").src = "assets/images/volume-mute.png";
    }
}


