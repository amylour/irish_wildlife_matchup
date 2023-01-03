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


// card flip function

const cards = document.querySelectorAll('.game-card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));