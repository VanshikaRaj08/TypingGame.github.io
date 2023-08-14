const wordEl = document.querySelector(".word");
const txtEl = document.querySelector(".text");
const scoreEl = document.querySelector(".score");
const timeEl = document.querySelector(".time");
const endGameEl = document.querySelector(".end-game-container");
const containerEl = document.querySelector(".container");
const settingsFormEl = document.querySelector(".settingsForm");
const difficultSelect = document.querySelector(".difficulty");

//random words
const words = [
  "sad",
  "angry",
  "happy",
  "vanshika",
  "javascript",
  "css",
  "react",
  "git",
  "gudu",
  "lucky",
  "papa",
  "mummy",
  "node",
];

//init word
let randomWord;

//init score
let score = 0;

//init time
let time = 5;

//init difficult level
let difficultLevel = "easy";

//generate random words
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

//add to DOM
function addWordToDom() {
  randomWord = getRandomWord();
  wordEl.innerHTML = randomWord;
}

addWordToDom();

//update score
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// updateScore();

//update time
function updateTime() {
  time--;
  timeEl.innerHTML = time + " s";
  if (time === 0) {
    clearInterval(timeInterval);

    //game over
    gameOver();
  }
}
updateTime();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//typing functionality
txtEl.addEventListener("input", function (e) {
  console.log(e.target.value);
  const insertedTxt = e.target.value;

  if (insertedTxt === randomWord) {
    //change the word
    addWordToDom();
    //update score
    updateScore();
    //clear the input
    e.target.value = "";

    if (difficultLevel === "easy") {
      time += 5;
    } else if (difficultLevel === "medium") {
      time += 3;
    } else if (difficultLevel === "hard") {
      time += 2;
    }
    //add 5 sec
    // time = time + 5;
    updateTime();
  }
});

//Game Over
function gameOver() {
  //hide the form
  settingsFormEl.style.display = "none";
  containerEl.style.display = "none";

  endGameEl.innerHTML = `
  <p class="over">Game Over</p>
  <p>Your Score: <span class="score">${score}</span></p>
  <button onclick='location.reload()' class="play-again-btn">Play Again</button>
  `;
}

//difficult level fn
difficultSelect.addEventListener("change", function (e) {
  console.log(e.target.value);
  difficultLevel = e.target.value;
  console.log(difficultLevel);
});
