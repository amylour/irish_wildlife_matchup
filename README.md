# Irish Wildlife MatchUp

[View live project here on Github](https://amylour.github.io/irish_wildlife_matchup/)

Irish Wildlife MatchUp is a matching card game built with HTML, CSS and JavaScript. It is my first JavaScript project built for the Code Institute's Full Stack Software Development course.

<br>

![screenshot of webpage on various media devices](docs/images/web_mockup_com.png)

---

## CONTENTS  
  
* [UXD (User Experience Design)](#user-experience-ux)
  * [User Stories](#user-stories) 
* [Creation process (Strategy -> Surface)](#creation-process)
  * [Wireframes](#wireframes)
* [Design](#design)
  * [Colour Scheme](#color-scheme)
  * [Light/Dark Theme](#lightdark-theme)
  * [Typography](#typography)
  * [Imagery](#imagery)
  * [Sounds](#sounds)
  * [Accessibility](#accessibility)
* [Page Features](#page-features)
* [Future Features](#future-features)
* [Technologies Used](#technologies-used)
  * [Languages Used](#languages-used)
  * [Technologies & Programs Used](#technologies--programs-used)
* [Deployment](#deployment)
  * [How to deploy](#how-to-deploy)
  * [How to clone](#how-to-clone)
  * [How to fork](#how-to-fork)
* [Testing](#testing)
* [Credits](#credits) 

---
<br>

## User Experience (UX)

### **User Stories**

### **Primary Goal**

Irish Wildlife MatchUp is an online memory card game styled with my own artwork of Irish animals. It is suitable for all ages. The game has a Light/Dark mode with the design changing to reflect this. An audio track of nature also plays with an option for the user to mute/unmute the sounds.

### **Visitor Goals**

Irish Wildlife MatchUp has been designed to be easily accessible and fun for all ages. It is a grid style card game that allows the user to flip two cards at a time in order to match them; testing their memory skills. The combination of artwork and nature sounds seek to bring the user into the wild environment as they play the game. Design and styling will be responsive to different media screen sizes and the user will have control over the aesthetic and the sounds played. A timer and moves counter will inform the user of their progress.


### **First Time Visitor**

  - As a first time user, I want to know the rules of the game.
  - As a first time user, I want to choose when to start the game.
  - As a first time user, I want to have the choice of a Light/Dark mode.
  - As a first time user, I want to control any audio playing.
  - As a first time user, I want a visually pleasing experience.
  - As a first time user, I want a friendly, challenging play experience.
  - As a first time user, I want my progress to be recorded.
  - As a first time user, I want to be able to play against my previous score.
  - As a first time user, I want positive feedback when I complete the game.

### **Returning Visitor**

  - As a returning user, I want to be able to personalise my gameboard.
  - As a returning user, I want to be able to configure my gamescreen and experience.
  - As a returning visitor, I want to be able to reset the gamescreen quickly if I share it with another user for their try.
  - As a returning visitor, I want to be able to play the game on different devices.
  
---
<br>

## Creation Process

### **1. Strategy**

The project goal was to build an interactive, memory game suitable for all ages. I wished to use my own artwork to personalise the styling of the game. The theme of the game is 'Irish Wildlife', with different animals displayed on the cards to be matched, and the game environment styled to reflect the Irish landscape.

  - The user will be able to familiarise themselves with the game rules before personalising the gameboard with visual and acoustic features. 
  - The user can develop their memory skills using the timer, moves counter and gamescore board which displays the user's recent score or play in a relaxed manner listening to the background nature soundtrack.

### **2. Scope**

The game must be responsive and playable on mobile, tablet and desktop sized devices. To assist with this, the styling and artwork will be clean, vectorised graphics that will adjust appropriately to the resizing of the screens.

  - The game will allow the user to personalise their board with their name.
  - The game will have a light theme and a dark theme.
  - The game will play a soundtrack of forest sounds.
  - The game will track the time taken and moves made by the player.
  - The game will record the score for the player from the previous play.
  - The game will have two playable sizes; 4x3 and 6x4 grid layouts. The player can choose which size by clicking a button.*

  * Producing artwork for the 6x4 board was at this time not possible due to time restraints, however the larger gameboard will be added in the future with a wider variety of animals displayed on the cards. I wish to have the cards shuffle through all of the available artwork, no matter the gameboard size, so that the user can challenge their skills.

### **3. Structural**

Clear pathways to interactivity are essential for this games success. 

  - The player is informed of the rules via a modal window and a start 'Tick' button to bring them to the gameboard. This window also presents an input section to enter the players name to record their recent score, but this is optional.
  - Buttons and toggles along the perimeter of the gameboard give the player the options to control the visual and acoustic aspects of the game. (Game size choice will be made available in future versions.)
  - The player is informed of their win, time taken and moves made by modal window when the final cards are matched. This modal is personalised with the user's name if they choose to enter it in the 'start' modal.
  - The layout and design of the gameboard changes very minimally between screen sizes to keep the experience consistent, and gameplay familiar.

### **4. Skeleton**

The game site will have a clean layout with every feature identifiable and interactive.

  - On loading, the game page will display a modal window front and centre for the user to immediately start the game (click the 'Tick' button). This window will also offer an optional input section to enter the user's name. The 'Tick' button submits the name. 
  - The gameboard is situated in the center of the screen with the size of 4x3 gamecards displayed.
  - A theme toggle button is displayed top right of the game screen to control the Light/Dark mode.
  - An audio control is situated beside the theme toggle to unmute/mute the nature sounds.
  - Timer and moves counter are located above the gameboard to the left for larger screens and on top for smaller screens.
  - A reset button is located centered, below the cards on the gameboard.
  - The gameboard is centered over background art of an Irish landscape which changes to reflect the Light/Dark mode.
### Wireframes

<details open>
<summary>Wireframe - Desktop main window</summary>

![main desktop window wireframe](docs/images/wf_desktop.png)
</details>
<details open>
<summary>Wireframe - Desktop Start modal window</summary>

![desktop start modal wireframe](docs/images/wf_desktop_start.png)
</details>
<details>
<summary>Wireframe - Desktop Win modal window</summary>

![desktop win modal wireframe](docs/images/wf_desktop_win.png)
</details>
<details>
<summary>Wireframe - Desktop Gameboard</summary>

![gameboard wireframe](docs/images/playboard.png)
</details>

<details open>
<summary>Wireframe - Mobile main window</summary>

![main mobile window wireframe](docs/images/wf_mob.png)
</details>
<details >
<summary>Wireframe - Mobile Start window</summary>

![main desktop window wireframe](docs/images/wf_mob_start.png)
</details>
<details >
<summary>Wireframe - Mobile Win window</summary>

![main desktop window wireframe](docs/images/wf_mobile_win.png)
</details>  
<br>  

### **5. Surface**

---

## Design

### **Colour Scheme**

Using the Adobe Color website, I used the colour picker to select colours from landscape photographs and created palettes from these to create the themed backgrounds. Shades of brown were used to create the gameboard palette. These colours are used throught the gameboard and buttons/toggles, and in both of the Light/Dark Themes.

![gameboard colour palette swatch](docs/images/iw_gameboard.png)
_Colour palette for the gameboard_

The gameboard palette was inspired by natural wood tones and was used to give the gameboard design a 'heavy' feeling as it is the central, most important feature of the gamepage.

<br>

### **Light/Dark Theme**

I decided to include an option to switch between a light and dark theme to keep up with current webpage features. This will be accessed by a toggle switch at the top right of the page. The design of the background and the gameboard will change to reflect this.
![screenshot of forest day with extracted colour palette](docs/images/forest_day_palette%20(2).png)
_Light theme colours extracted from photography by Steven Hylands/Pexels_

<br>

![screenshot of forest night with extracted colour palette](docs/images/night_forest_colorpalette%20(1).png)
_Dark theme colours extracted from photography by Matthew Ang/Pexels_

<br>


### **Typography**  

I chose the serif font 'Inknut Antiqua' from [Google Fonts](https://fonts.google.com/specimen/Inknut+Antiqua) and imported the Light 300 weight for use in my project. The font reminded me of the 'Book of Kells' in keeping with the Irish theme and is used throughout the project.

![screenshot of google font inknut example](docs/images/inknutfont.png)

### **Imagery**

I wished to create the artwork for the game, instead of using photographs, to give the game a more 'playful' feeling. I gathered a selection of copyright free images as my reference material and used colours picked from the images to create the artwork in Procreate.


![selection of artwork in Irish Wildlife MatchUp](docs/images/iw_animals_art.png)

<br>

### **Sounds**

Once the main gameboard has been accessed, by pressing the start 'Tick' button, the forest soundtrack will start playing. The soundtrack is muted and the volume button must be selected for the user to hear the nature sounds. Birds can be heard chirping, leaves rustling in the wind and a stream can be heard babbling.

I considered the use of additional audio feedback with card flip sounds and 'pings' to indicate successful cards matches, however I felt it did not fit with the relaxed game environment that I was seeking.


[Pixabay Sound Effects](https://pixabay.com/sound-effects/forest-with-small-river-birds-and-nature-field-recording-6735/)
<br>

### **Accessibility**

Adobe Color Accessibility Tools used to check for colour blind safeness in gameboard colour palette

![adobe color colour blind checker for main swatch](docs/images/gameboard_cbs.png)


---

## Page Features

### **1. Start Modal** 
![screenshot of start modal](docs/images/feature_startmodal.png)  

The start modal greets the user when the page first loads. It details the rules and offers the option to enter a player name to personalise the gameboard. Pressing the 'Tick' button starts the game.

<br>
  
### **2. Game Board**
![screenshot of game board](docs/images/feature_gameboard_com.png)  

The gameboard offered is a 4x3 grid style gameboard. A hexagonal pattern decorates the backs of the cards to reflect traditional playing card graphics. are flipped, two at a time, revealing artwork created by myself. Matched cards stay facing up. Unmatched cards flip back over and increase the 'Moves' counter by one. A 'Reset' button is present which will reset the game experience for the current player or to set it up for a new player.

<br>
  
### **3. Timer & Moves Counter**
![screenshot of timer and moves counter](docs/images/feature_time_moves.png)  

The timer starts when the first card is clicked and works as a stopwatch recording the time taken, instead of counting down from a set time. This is to allow the player to choose whether they wish to play a relaxed game or to try to beat their recent score. A moves counter increases every time two cards, which don't match, are selected.
  
### **4. Player Name & Recent Score**
![screenshot of player name and recent score](docs/images/feature_recentscore.png)  

The optional player name input from the start modal displays the entered name above the score section. The recent score displayed is the winning time and moves count from the player's last round when they choose to continue playing. This score can be some visual encouragement for the player to beat. 
  
### **5. Theme & Volume Toggles**
![screenshot of theme and volume toggles](docs/images/feature_toggles.png)  

The player has the option to turn on the volume for the nature soundtrack that plays when the game loads, they can then also mute it. The player also has the option to choose a dark theme over the default light theme for a different play experience.
  
### **6. Win Modal**
![screenshot of win modal](docs/images/feature_winmodal.png)  

The win modal displays the player's name if they chosen to enter it initially. It also displays the winning time and moves count for the player to see. Pressing the 'Play Again?' button allows the player to continue the same game experience with a shuffled gameboard, reset timer and moves counter and their previous score displayed in the 'Recent Score' section.

### **7. Dark Theme**
![screenshot of game in dark theme](docs/images/feature_darkmode_com.png)  

The dark theme is accessed via a theme toggle located at the top, right hand corner of the screen. It changes the default day theme to a night-time background, with darker gameboard, timer, moves counter, name and score area. The theme and volume toggles change colour also to standout against the background. Both the day and night themed backgrounds were created by myself in Figma.

<br>

## Future Features

- As mentioned earlier in the README, I had wished to include the option for a larger 6x4 gameboard. Creation of more artwork was beyond the scope for this version, but will be included in the next one.
- In addition, the next version will allow for the complete array of animal artwork to be shuffled and used, no matter the size of the gameboard. The selection of cards will be greater and present fresh boards to encourage the user to continue playing and practising their memory skills.
- I would like to include a high score board with all of the player's names entered and their top scores so that players can compete against others.
---
<br>

## Technologies Used

### **Languages Used**

- HTML5
- CSS3
- JavaScript

### **Technologies & Programs Used** 

- Procreate - used to create the animal artwork and edit images
- Figma - used to produce wireframes and background vector artwork 
- GitHub - used to save and store all files for this website  
- Git - used for version control
- Google Fonts - fonts were imported from here 
- Font Awesome - icons and their associated kit were downloaded from here  
- Adobe Color - for all color palettes and accessibility contrast ratios 
- Remove.bg - for image background removal 
- Simple Image Resizer - to resize all artwork
- Convertio - to convert PNG files to WEBP files
- Favicon.io - for badger favicon  
- Tiny PNG - to compress images 
- Online Audio Convertor - to compress mp3 files
- Google Dev Tools - to debug and for testing responsiveness 
- Google Lighthouse - for auditing the website
- W3C Validator - for validating the HTML and CSS code 
- JSHint - for validating JavaScript

---

## Deployment

### **How to deploy**  

GitHub was used to deploy the website. These were the steps taken to acheive this:  

1. Login to GitHub account.
2. Navigate to the project repository, irish-wildlife-matchup.
3. Click the Settings button near the top of the page.
4. In the left-hand menu, find and click on the Pages button.
5. In the Source section, choose 'main' from the drop-down, select branch menu.
6. Select 'root' from the drop-down folder menu.
7. Click 'Save' and after a few moments the project will have been made live and a link is visible at the top of the page.

<br>

### **How to run this project locally**  

To clone this project from GitHub:  

1. Visit the [Irish Wildlife MatchUp repository](https://github.com/amylour/irish_wildlife_matchup).
2. Click on the <b>Code</b> dropdown menu located beside the green <b>GitPod</b> button. 
3. Choosing your preferred cloning option of <b>HTTPS, SSH</b> or <b>GitHub CLI</b>, click on the clipboard icon to copy the displayed URL. 
4. Open the terminla in your code editor and change the working directory to the location that you wish to use for the cloned directory.
5. Type 'git clone' into the terminal, paste your copied link and press enter.

<br>  

### **To fork the repository on GitHub** 
  
To make a copy of this GitHub repository that allows you to view the content and make changes without affecting the original repository, please take the following steps:
  
1. Login to <b>GitHub</b> and find [this repository](https://github.com/amylour/irish_wildlife_matchup).
2. Locate the <b>Fork</b> button in the top, right hand side of the page.
3. Click on the <b>Fork</b> button to create a copy of the repository in your GitHub account.

<br>  

---

## Testing

---

## Credits

### **Content References**

  - All content created is of my own design using copyright-free resources and is intended for educational purposes.
  - [Free Code Camp](https://tinyurl.com/mpfnzhbt) for their Memory Card Game tutorial which I have practised, understood and adapted to fit my game.
  - [Code Institute](https://codeinstitute.net/ie/) for their HTML/CSS/JavaScript learning material.
  - [W3Schools](https://www.w3schools.com/) for additional learning material:
      - Modal how to -  https://www.w3schools.com/howto/howto_css_modals.asp
  - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for JavaScript best-practise, tutorials and guidance.
  - [Stack Overflow](https://stackoverflow.com/) for assistance:
      - Add '0' to minutes/seconds in timer - https://stackoverflow.com/questions/26898378/javascript-countdown-timer-need-a-second-digit 
      - Centering modals - https://stackoverflow.com/questions/39627549/how-to-center-modal-to-the-center-of-screen
      - Fix text jumping when button clicked - https://stackoverflow.com/a/26908722
  - [Web Designer Hut](https://webdesignerhut.com/3d-buttons-with-css-dropshadow/) for solid drop shadow tutorial.
  - [Keith Paterson Youtube](https://www.youtube.com/watch?v=KB6Yg5hNrqc) for modal user input and response assistance.
  - [Foolish Developer](https://foolishdeveloper.com/create-a-simple-stopwatch-using-javascript-tutorial-code/) for help in creating a timer function.
  - [Eyehunts.com](https://tutorial.eyehunts.com/js/swap-images-in-javascript-simple-onclick-image-swap-example/) for swapping images using JavaScript.

<br>

### **Media References**

  - [Pexels](https://www.pexels.com/), [Unsplash](https://unsplash.com/), and [Pixabay](https://pixabay.com/) for all reference material for creating the animals and background imagery: 
    - Red fox (credit: Adam Sondel)
    - Frog (credit: Inspired Images)
    - Robin (credit: Hans)
    - Falcon (credit: Iulian Ursache)
    - Hedgehog (credit: Amaya Eguizába)
    - Bee (credit: Myriams-Fotos)
  - [Pattern Monster](https://pattern.monster/hexagon-2/) for hexagonal pattern on back of cards.
  - [Favicon](https://favicon.io/) for the favicon used for this site.
  - [Freepik](https://www.freepik.com/) for the volume icon (credit: Amazona Adorada), theme toggle (credit: Saepul Nahwan) and tick button (credit: Vectors Market).
  - [Pixabay](https://pixabay.com/) for the forest soundtrack (credit: Garuda1982).

<br> 

### **Acknowledgements**

