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

// open rules and playname modal on load
window.addEventListener('load', function(){
    this.setTimeout(
        function open(event){
            document.querySelector('.start-modal').style.display = "block";
        },2000)
});

// play music onload

function playSong() {
let playMusic = document.getElementById('ld-vol');
playMusic.addEventListener('click', () => {
    let daySong = document.getElementById('daysong');
    return daySong.paused ? daySong.play() : daySong.pause();
})

}

// take playername, close modal and dislay playername in 'Name' window - code adapted from Keith Paterson https://www.youtube.com/watch?v=KB6Yg5hNrqc
function enterPlayerName() {
    let username = document.querySelector('#username');
    let nameEntered = document.querySelector('#nameEntered');

    const modal = document.querySelector('#start-modal');
    modal.style.display = 'none';

    nameEntered.innerHTML = username.value;
}


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

// end match - stop time, display win message
function endGame() {
    stopTime();
    setTimeout(() =>{
       winMessageDisplay();
    }, 1000);
}


// timer - function learned, practised and adapted from https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/
let time = 0;
let minutes = 0;
let seconds = 0;
let timeStart = false;


seconds = seconds < 10 ? "0" + seconds: seconds;
minutes = minutes < 10 ? "0" + minutes: minutes;  

timeTaken.innerHTML = "00" + ":" + "00";

function timer() {
    time = setInterval(function() {
        seconds++;
        seconds = seconds < 10 ? "0" + seconds: seconds;
        if (seconds === 60) {
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


// shuffleCards function wrapped in IIFE to invoke function immediately 
(function shuffleCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()* 12);
        card.style.order = randomPosition;
    });
})();



//reset game button for new game
function resetGame() {
   window.location.reload();
} 

// win modal pop up
function winMessageDisplay() {
    const winModal = document.querySelector('#win-modal');
    winModal.style.display = 'block';
    winTime = timeTaken.innerHTML;

    

    document.getElementById('playerName').innerHTML = username.value;
    
    document.getElementById('win-time-value').innerHTML = winTime;
    document.getElementById('win-moves-value').innerHTML = moves;
}



// play again button in win modal
function playAgain() {

    setTimeout(() => {
        resetBoard();

        cards.forEach(card => card.classList.remove('flip'));
        cards.forEach(card => card.addEventListener('click', flipCard));


        cards.forEach(card => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        });


        time = 0;
        moves = 0;
        minutes = 0;
        seconds = 0;
        timeTaken.innerHTML = "00" + ":" + "00";
        movesTaken.innerHTML = '00';
        startGame = false;
        allMatched = 0;
        hasTurnedCard = false;
        firstCard, secondCard; // checks for matching cards
        lockBoard = false;

        winMoves = document.getElementById('win-moves-value').innerHTML;
        document.getElementById('playerBestTime').innerHTML = winTime;
        document.getElementById('playerBestMoves').innerHTML = winMoves;

       

        const winModal = document.querySelector('#win-modal');
        winModal.style.display = 'none';
    }, 600);
}

document.querySelector('#win-button').addEventListener('click', playAgain());

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

    if (document.getElementById("ld-vol").src.endsWith('volume-mute.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute_light.png";
    }  else if (document.getElementById("ld-vol").src.endsWith('volume-mute_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute.png";
    }
}

// click volume icon to mute
function volumeChange() {
    if (document.getElementById("ld-vol").src.endsWith('volume.png')  == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute.png";
    }  else if (document.getElementById("ld-vol").src.endsWith('volume-mute.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume.png";
    }

    if (document.getElementById("ld-vol").src.endsWith('volume_light.png')  == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute_light.png";
    }  else if (document.getElementById("ld-vol").src.endsWith('volume-mute_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume_light.png";
    }
}

