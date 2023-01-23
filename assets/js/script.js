// Variables
const cards = document.querySelectorAll('.game-card');
const movesTaken = document.getElementById('moves-taken');
const timeTaken = document.getElementById('time-taken');
const finishMatch = 6;

let startGame = false;
let allMatched = 0;
let hasTurnedCard = false; // checks if card has been clicked
let firstCard, secondCard; // checks for matching cards
let lockBoard = false;
let moves = 0;
let winMoves = document.getElementById('win-moves-value').innerHTML;
let winTime = timeTaken.innerHTML;


// event - listen for card to be clicked and execute flipCard
cards.forEach(card => card.addEventListener('click', flipCard));

// open rules and player name modal on window load
window.addEventListener('load', function () {
    this.setTimeout(
        function open(event) {
            document.querySelector('#start-modal').style.display = "block";
        }, 1000);
});

// play music - volume on or mute button

   let playMusic = document.getElementById('ld-vol');
   playMusic.addEventListener('click', () => {
       let daySong = document.getElementById('daysong');
       // execute song pause/play for mute button
       return daySong.paused ? daySong.play() : daySong.pause();

   });

// take OPTIONAL player name, close modal and display player name in 'Name' window - code adapted from Keith Paterson https://www.youtube.com/watch?v=KB6Yg5hNrqc

    let username = document.querySelector('#username');
    let nameEntered = document.querySelector('#nameEntered');
    let enterName = document.querySelector('.username-tick');

    enterName.addEventListener('click', () => {
    const modal = document.querySelector('#start-modal');
    modal.style.display = 'none';

    nameEntered.innerHTML = username.value;
});

/** card flip and game play function learned, 
 * practised and adapted from freeCodeCamp Youtube 
 * tutorial by Marina Ferreira - https://tinyurl.com/mpfnzhbt */
function flipCard() {
    if (!startGame) {
        startGame = true;
        // start timer when first card is clicked
        timer();
    }

    if (lockBoard) return;
    if (this === firstCard) return; // returns firstCard, secondCard relevant function for unflip and match

    this.classList.add('flip');

    if (!hasTurnedCard) {
        // first click
        hasTurnedCard = true;
        firstCard = this;

        return;
    }

    // second click
    secondCard = this;
    // check for matching card
    checkCardMatch();
}

// check cards match 
function checkCardMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    if (isMatch) allMatched += 1;
    // ternary operator to remove if/else block to remove matched cards from play   
    isMatch ? disableCards() : unflipCards();
    // game ends when all cards are matched
    if (allMatched === finishMatch) endGame();
}

// disable cards when matched so they don't flip back
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// if there is no match then flip cards face down again, board is locked until cards are flipped back
function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1200);

    // record move if there is no match
    recordMove();
}

// counter for moves - move is counted if that turn (two cards flipped) does not return a match
moves = 0;
movesTaken.innerHTML = "00";

function recordMove() {
    moves++;
    // adds '0' to moves counter to ensure 0 before single digit - adapted from https://stackoverflow.com/questions/26898378/javascript-countdown-timer-need-a-second-digit 
    if (moves < 10) {
        moves = "0" + moves;
    }
    movesTaken.innerHTML = moves;
}

// reset cards after each round 
function resetBoard() {
    [hasTurnedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// end match - stop time, display win message
function endGame() {
    stopTime();
    setTimeout(() => {
        winMessageDisplay();
    }, 1000);
}

// timer - function learned, practised and adapted from https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/
let time = 0;
let minutes = 0;
let seconds = 0;

// set minutes as '00' and seconds as '00'
seconds = seconds < 10 ? "0" + seconds : seconds;
minutes = minutes < 10 ? "0" + minutes : minutes;

timeTaken.innerHTML = "00" + ":" + "00";

function timer() {
    time = setInterval(function () {
        seconds++;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        if (seconds === 60) {
            minutes++;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
        }
        timeTaken.innerHTML = minutes + ":" + seconds;
    }, 1000);
}

// stop time function - used when all cards are matched to give player's total time taken
function stopTime() {
    clearInterval(time);
}

// shuffleCards function wrapped in IIFE to invoke function immediately 
(function shuffleCards() {
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();

// reset game button for new game - removes player name and resets all features - timer, moves, cards, theme, music
    let resetBtn = document.querySelector('#reset');

    resetBtn.addEventListener('click', () => {
    window.location.reload();
    });


// win modal pop up
function winMessageDisplay() {
    const winModal = document.querySelector('#win-modal');
    winModal.style.display = 'block';
    winTime = timeTaken.innerHTML;
    // display player name (if entered)
    document.getElementById('playerName').innerHTML = username.value;
    // display winning time and moves count
    document.getElementById('win-time-value').innerHTML = winTime;
    document.getElementById('win-moves-value').innerHTML = moves;
}

// play again button in win modal - keeps player name, theme, music settings but resets cards, board, timer and moves
function playAgain() {

    setTimeout(() => {
        resetBoard();

        cards.forEach(card => card.classList.remove('flip'));
        cards.forEach(card => card.addEventListener('click', flipCard));
        // shuffle cards
        cards.forEach(card => {
            let randomPosition = Math.floor(Math.random() * 12);
            card.style.order = randomPosition;
        });
        // reset board features - not player name, theme or music
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
        // displays winning score in recent score area for player to defeat
        winMoves = document.getElementById('win-moves-value').innerHTML;
        document.getElementById('playerBestTime').innerHTML = winTime;
        document.getElementById('playerBestMoves').innerHTML = winMoves;

        const winModal = document.querySelector('#win-modal');
        winModal.style.display = 'none';
    }, 600);
}

document.querySelector('#win-button').addEventListener('click', playAgain());

// light/dark toggle to control body CSS settings for dark mode
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
    } else if (document.getElementById("ld-theme").src.endsWith('day_in_night.png') == true) {
        document.getElementById("ld-theme").src = "assets/images/night_in_day.png";
    }

    if (document.getElementById("ld-vol").src.endsWith('volume.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume_light.png";
    } else if (document.getElementById("ld-vol").src.endsWith('volume_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume.png";
    }

    if (document.getElementById("ld-vol").src.endsWith('volume-mute.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute_light.png";
    } else if (document.getElementById("ld-vol").src.endsWith('volume-mute_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute.png";
    }
}

// click volume icon to mute

function volumeChange() {
    if (document.getElementById("ld-vol").src.endsWith('volume.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute.png";
    } else if (document.getElementById("ld-vol").src.endsWith('volume-mute.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume.png";
    }

    if (document.getElementById("ld-vol").src.endsWith('volume_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume-mute_light.png";
    } else if (document.getElementById("ld-vol").src.endsWith('volume-mute_light.png') == true) {
        document.getElementById("ld-vol").src = "assets/images/volume_light.png";
    }
}
