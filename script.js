// FUNCTIONS
function levelUp(btn) {
  userSequence = [];
  level++;
  tagLine.innerText = `Level : ${level}`;

  randNo = Math.floor(Math.random() * 4) + 1;
  randBtn = document.querySelector(`.box${randNo}`);

  gameSequence.push(randNo);
  console.log("game=", gameSequence);

  btnFlash(randBtn);
}
function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}
function userFlash(btn) {
  btn.classList.add("flashPink");
  setTimeout(() => {
    btn.classList.remove("flashPink");
  }, 500);
}
function btnPress(e) {
  if (isGameStart) {
    userFlash(e.target);

    userSequence.push(Number(e.target.textContent));
    console.log("user=", userSequence);

    check(userSequence.length - 1);
  }
}
function oops() {
  main.style.backgroundColor = "red";
}
function check(index) {
  if (userSequence[index] === gameSequence[index]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    main.style.backgroundColor = "red";
    setTimeout(function () {
      main.style.backgroundColor = "#7cb9b5";
    }, 100);
    main.style.backgroundColor = "7cb9b5";
    tagLine.innerHTML = `GAME OVER. Level Reached : ${level}`;
    start.style.display = "inline-block";
    quit.style.display = "none";
    start.innerText = "PLAY AGAIN";
    gameSequence = [];
    isGameStart = false;
    level = 0;
  }
}
// VARIABLES
let gameSequence = [];
let userSequence = [];
let isGameStart = false;
let level = 0;
let numbers = [1, 2, 3, 4];
let randNo;
let randBtn;

// ELEMENT SLECTION
let tagLine = document.querySelector("h3");
let boxes = document.querySelectorAll(".box");
let start = document.querySelector(".start");
let quit = document.querySelector(".quit");
let main = document.querySelector(".mainCont");
// OTHER WORKS
start.addEventListener("click", function () {
  if (!isGameStart) {
    console.log("Game Started!!");
    isGameStart = true;
    levelUp();
    start.style.display = "none";
    quit.style.display = "inline-block";
    for (box of boxes) {
      box.addEventListener("click", btnPress);
    }
  }
});
quit.addEventListener("click", function () {
  isGameStart = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
  tagLine.innerText = "Tip : Click Play Now to Play again";
  start.style.display = "inline-block";
  start.innerText = "PLAY NOW";
  quit.style.display = "none";
});
