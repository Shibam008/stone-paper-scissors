let allChoices = document.querySelectorAll(".myChoice")
let user = document.querySelector(".user-div")
let computer = document.querySelector(".computer-div")
let result = document.querySelector(".result")
let winSound = new Audio("win.mp3")
let drawSound = new Audio('draw.mp3')
let looseSound = new Audio('loose.mp3')


function startShake() {
     user.style = "animation: shake 1s linear 3";
     computer.style="animation: shake 1s linear 3";
}

function stopShake() {
     user.style = null;
     computer.style =  null;
}

allChoices.forEach((choice) => {
     choice.addEventListener('click', ()=> {
       // Reset previous result classes
       result.classList.remove("win", "loose", "draw");
       result.innerText = null;

       // now returning previous state in stone ans pausing sounds.
       user.innerText = '👊';
       computer.innerText = "👊";
       winSound.pause();
       looseSound.pause()
       drawSound.pause()

       let userChoice = choice.getAttribute("id");
       //* making computer choice
       let options = ["stone", "paper", "scicor"];
       let randIdx = Math.floor(Math.random() * 3);
       let computerChoice = options[randIdx];

       startShake();
       setTimeout(() => {
         playGame(userChoice, computerChoice);
         stopShake();
       }, 3000);
       
     })
})

function playGame(userChoice, computerChoice) {
  // console.log('user : ' + userChoice);
  // console.log('comp : ' + computerChoice);

  //* Showing user choice :
  if (userChoice === "stone") user.innerText = "👊";
  else if (userChoice === "paper") user.innerText = "🖐️";
  else user.innerText = "✌️";

  //* Showing computer choice : 
  if (computerChoice === "stone") computer.innerText = "👊";
  else if (computerChoice === "paper") computer.innerText = "🖐️";
  else computer.innerText = "✌️";


  
  

  if (userChoice === computerChoice) {
    result.innerText = "Draw";
    result.classList.add("draw");
    drawSound.play()
  } else if (
    (userChoice === "stone" && computerChoice === "scicor") ||
    (userChoice === "paper" && computerChoice === "stone") ||
    (userChoice === "scicor" && computerChoice === "paper")
  ) {
    result.innerText = "You won";
    result.classList.add("win");
    winSound.play();
  } else {
    result.innerText = "You loose!";
    result.classList.add("loose");
    looseSound.play();
  }
}