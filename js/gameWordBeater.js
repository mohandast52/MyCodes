var time = 6; // default
var resetTime = time; // global: will change on user's difficulty selection
let score = 0;
let isPlaying;


// game logic
var words = null;
const winningWords = [
    'Way to go', 'Super job', 'Greatwork', 'WOW', 'Fantastic', 'Brilliant', 'Excellent', 'Bravo', 'Super', 'Awesome', 'Too blissful', 'Perfect', 'Brilliantwork', 'Super awesome', 'Stayin bliss!', 'Dazzling!', 'Spectacular', 'Terrific', 'Great', 'Megasuper', 'Megabest'
];
// DOMs
const wordInput = document.getElementById("word-input"); // text-box for user to type the word
const currentWord = document.getElementById("current-word"); // 'word' displaying for user
const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const message = document.querySelector('#message span'); // status of the message ie. game over 
const seconds = document.getElementById("seconds"); // how many seconds (depends upon level i.e easy, medium, hard)

let scoreMulti = 1;

// settings
// change difficulty
let difficultyRadioButtons = document.querySelectorAll('input[name=difficulty');
difficultyRadioButtons.forEach(eachRadio => {
    eachRadio.addEventListener('click', function (event) {
        resetTime = event.target.value;
        seconds.innerHTML = resetTime; // paragraph below card (changes as difficulty changes)
        // remove style for all spans (css)
        let spanList = document.querySelectorAll("label");
        spanList.forEach(eachSpan => {
            eachSpan.children[0].style.borderWidth = '10px';

            // height and width of radio button increased on active! (css)
            eachSpan.children[0].style.width = '20px';
            eachSpan.children[0].style.height = '20px';
        });
        document.querySelector("label[for=" + event.target.id + "]").children[0].style.borderWidth = '4px';
        // console.log(spanEle);
        if (event.target.id === 'hard') {
            scoreMulti = 3;
            currentWord.classList.add("glitch-toggle");
        } else if (event.target.id === 'medium') {
            scoreMulti = 2;
            currentWord.classList.add("glitch-toggle");
        } else if (event.target.id === 'easy') {
            scoreMulti = 1;
            currentWord.classList.remove("glitch-toggle"); // remove glitch effect on easy mode!
        }
    });
});

// just changing css for node mode!!
let nightModeToggle = document.getElementById("night-mode");
let nightMode = false;
nightModeToggle.addEventListener('click', function () {
    nightMode = !nightMode;
    if (nightMode) {
        /*
            overlay : hsl(0, 0%, 3.5%);
            header: #232323;
            main-bg:#121212;
            color: #cbcba6;
        */
        document.getElementById("header").style.backgroundColor = "#232323";
        document.getElementById("header").style.color = "#cbcba6";

        document.body.style.backgroundColor = "#121212";

        // card
        document.getElementsByClassName('main-content')[0].style.borderWidth = "2px";
        document.getElementsByClassName('main-content')[0].style.borderColor = "#BDBDBD";
        document.getElementsByClassName('main-content')[0].style.backgroundColor = "#232323";

        // sidenav
        document.getElementsByClassName('settings-menu')[0].style.backgroundColor = "#232323";

        // all colors
        document.documentElement.style.setProperty('--black', '#cbcba6');

    } else {
        // change to default
        document.getElementById("header").style.backgroundColor = "#ffffff";
        document.getElementById("header").style.color = "#212121";

        document.body.style.backgroundColor = "rgba(217, 217, 217, 0.2)";

        // card
        document.getElementsByClassName('main-content')[0].style.borderWidth = "0px";
        document.getElementsByClassName('main-content')[0].style.backgroundColor = "#ffffff";

        // sidenav
        document.getElementsByClassName('settings-menu')[0].style.backgroundColor = "#ffffff";
        document.documentElement.style.setProperty('--black', '#212121');

    }
});

// toggle navigation
var showNavigationMenu = false;
document.getElementById("settings").addEventListener('click', function () {
    let toggleNavClass = document.getElementsByClassName('settings-menu')[0];
    showNavigationMenu = !showNavigationMenu;
    if (showNavigationMenu) {
        toggleNavClass.style.right = "0px";
    } else {
        toggleNavClass.style.right = "-200px";
    }
});


// function to get JSON file locally
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', '../json/words.json', true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}



// initialization!! (onload)
window.addEventListener('load', function () {
    // getting json from local file!
    loadJSON(function (response) {
        words = JSON.parse(response);
    });

    nightModeToggle.checked = false; // false initially ie. Day mode!
    seconds.innerHTML = time; // paragraph below card 
    document.querySelector("label").children[0].style.borderWidth = '4px'; // first radio button (css)
    difficultyRadioButtons[0].checked = true; // easy is default difficulty
    wordInput.value = ''; // set the text-box to blank
});

// to start the game, user has to type 'start'
wordInput.addEventListener('input', function onUserType() {
    if (wordInput.value === 'start'.toLowerCase() && score === 0) {
        init();
    }
});



var countDownInterval = null;
// game status
var checkStatusInterval = null;

function init() {

    // clearing inputs
    wordInput.value = '';

    isPlaying = true; // player has start playing
    showWord(words);

    // on type
    wordInput.addEventListener('input', startMatch);
    // countdown every second
    startCountDownInterval();
    // game status
    startCheckStatusInterval();
}


function startMatch() {
    if (matchWords()) {
        showWord(words); // to get randowm word
        wordInput.value = ''; // reset the text-box
        message.innerHTML = winningWords[Math.floor(Math.random() * winningWords.length)]; // display some motivational meesage
        score += scoreMulti; // increatment score
    }
    scoreDisplay.innerHTML = score;
}

function matchWords() {
    return (wordInput.value === currentWord.innerHTML);
}

function showWord(words) {
    // reset time for each new word
    time = resetTime;

    // random word
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randomIndex].word;

    // randomly captilize and add to data-text attribute
    let randomCaptilizedWord = (words[randomIndex].word);

    // half lowercase and half captilized for glitch effect!
    randomCaptilizedWord = randomCaptilizedWord.slice(0, randomCaptilizedWord.length / 2) + '' +
        randomCaptilizedWord.slice(randomCaptilizedWord.length / 2, randomCaptilizedWord.length + 1).toUpperCase();
    currentWord.dataset.text = randomCaptilizedWord;
}

// to display time after each second
function countDown() {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
}

function checkStatus() {
    if (!isPlaying & time === 0) {
        message.innerHTML = 'Game Over';
        score = 0;
        scoreDisplay.innerHTML = score;
        currentWord.innerHTML = 'start';
        currentWord.dataset.text = 'start';
        stopCheckStatusInterval();
        stopCountDownInterval();
    } else {
        timeDisplay.innerHTML = time;
    }
}


// helper functions
function startCountDownInterval() {
    countDownInterval = setInterval(countDown, 1000);
}

function stopCountDownInterval() {
    clearInterval(countDownInterval);
}

function startCheckStatusInterval() {
    checkStatusInterval = setInterval(checkStatus, 50);
}

function stopCheckStatusInterval() {
    clearInterval(checkStatusInterval);
}