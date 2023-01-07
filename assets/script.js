// General Variables
const cards = document.querySelectorAll('.game-card');
const movesTaken = document.getElementById('moves-taken');
const timeTaken = document.getElementById('time-taken');
const finishMatch = 6;

let startGame = false;
let allMatched= 0;
let hasTurnedCard = false; // checks if card has been clicked
let firstCard, secondCard; // checks for matching cards
let lockBoard = false;
let moves = 00;
let endTime = "";


//Events
cards.forEach(card => card.addEventListener('click', flipCard));

// Modal - code adapted from PMCoder Youtube https://www.youtube.com/watch?v=IFoG8-oAELM
document.querySelector('.x-close').addEventListener('click', function() {
    document.querySelector('#start-modal').style.display = "none";
});

window.addEventListener('load', function(){
    this.setTimeout(
        function open(event){
            document.querySelector('.start-modal').style.display = "block";
        },2000)
});


/** card flip and game play function learned, 
* practised and adapted from freeCodeCamp Youtube 
* tutorial by Marina Ferreira */
function flipCard() {
    if(!startGame) {
        startGame = true;
        timer();
    }

    if (lockBoard) return;
    if (this === firstCard) return; // returns firstCard, secondCard relevant function for unflip and match

    this.classList.add('flip');

    if(!hasTurnedCard) {
    //first click
      hasTurnedCard = true;
      firstCard = this;

      return;
  } 

    //second click
      secondCard = this;

      checkCardMatch();
}

// check cards match 
function checkCardMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name; 
    if (isMatch) allMatched += 1;
    // ternary operator to remove if/else block to remove matched cards from play   
    isMatch ? disableCards() : unflipCards();

    if (allMatched === finishMatch) endGame();

   }


function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}


function unflipCards() {
    lockBoard = true;

    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1200);

    // record move
    recordMove();
}

//counter for moves
moves = 0;
movesTaken.innerHTML = "00";

function recordMove() {
    moves++;
    // adds '0' to moves counter to ensure 0 before single digit - adapted from https://stackoverflow.com/questions/26898378/javascript-countdown-timer-need-a-second-digit 
    if(moves < 10){moves = "0" + moves};
    movesTaken.innerHTML = moves;
}

function resetBoard() {
   [hasTurnedCard, lockBoard] = [false, false];
   [firstCard, secondCard] = [null, null];
}

// end match
function endGame() {
    stopTime();
}

// timer - function learned, practised and adapted from https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/
let time = 00;
let minutes = 00;
let seconds = 00;
let timeStart = false;

seconds = seconds < 10 ? "0" + seconds: seconds;
minutes = minutes < 10 ? "0" + minutes: minutes;  

timeTaken.innerHTML = "00" + ":" + "00";

function timer() {
    time = setInterval(function() {
        seconds++;
        seconds = seconds < 10 ? "0" + seconds: seconds;
        if (seconds === 59) {
            minutes++;
            minutes = minutes < 10 ? "0" + minutes: minutes; 
            seconds = 0;
        } 
        timeTaken.innerHTML = minutes + ":" + seconds;
    }, 1000);
}

function stopTime() {
    clearInterval(time);
}


/* shuffleCards function wrapped in IIFE to invoke function immediately */
(function shuffleCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()* 12);
        card.style.order = randomPosition;
    });
})();









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


