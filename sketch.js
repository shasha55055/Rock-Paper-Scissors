let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");



function getCompchoice() {
  const choices = ["r" , "p" , "s"];
  const randomnum = (Math.floor(Math.random() * 3));
  return choices[randomnum];
}


function toword(letter) {
  if (letter === "r"){
    return "Rock";
  }
  if(letter === "p") {
    return "Paper";
  }
  if (letter === "s") {
    return "Scissors";
  }
}




function iwon(user, computer) {
  userScore = userScore + 1;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = (toword(user) + " Covers " + toword(computer) + ". You Won :)");
  document.getElementById(user).classList.add("green-glow");
  setTimeout(function() {document.getElementById(user).classList.remove("green-glow")   },300);
}




function ilost(user, computer) {
  compScore = compScore + 1;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = (toword(computer) + " Covers " + toword(user) + ". You Lost :(");
  document.getElementById(user).classList.add("red-glow");
  setTimeout(function() {document.getElementById(user).classList.remove("red-glow")   },300);
}


function itied(user, computer) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = ("You Tied :/");
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(function() {document.getElementById(user).classList.remove("grey-glow")   },300);
}




function game(userChoice) {
  const compchoice = getCompchoice(); 
  switch(userChoice + compchoice ) {
    
    case "rs":
    case "sp":
    case "pr":
      iwon(userChoice, compchoice);
      break;
    case "sr":
    case "ps":
    case "rp":
      ilost(userChoice, compchoice);
      break;
    case "pp":
    case "ss":
    case "rr":
      itied(userChoice, compchoice);
      break;

  }
}






function main() {
  rock_div.addEventListener('click', function() {
    game("r");
  }) ;
  
  paper_div.addEventListener('click', function() {
    game("p");
  }) ;
  
  scissors_div.addEventListener('click', function() {
    game("s");
  }) ;
}

main();