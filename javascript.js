let getComputerChoice = function () {
  let pcChoice = Math.floor(Math.random() * 3);

  pcChoice;

  if (pcChoice == 0) {
    return "rock";
  } else if (pcChoice == 1) {
    return "paper";
  } else if (pcChoice == 2) {
    return "scissors";
  }
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "It's a draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You lose! Paper beats rock!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You win! Rock beats Scissors";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You win! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "It's a draw!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You lose! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You lose! Rock beats Scissors!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You win! Scissors beats Paper!";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "Its a draw!";
  } else {
    return "WHATSISIT";
  }
}

let game = function () {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose: Rock - Paper - Scissors").toLowerCase();
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  }

  if (playerScore > computerScore) {
    alert(
      `Player score: ${playerScore}, computer score: ${computerScore} YOU WIN!`
    );
  } else if (playerScore < computerScore) {
    alert(
      `Player score: ${playerScore}, computer score: ${computerScore} YOU LOSE!`
    );
  } else if (playerScore === computerScore) {
    alert(
      `Player score: ${playerScore}, computer score: ${computerScore} IT'S A DRAW!`
    );
  }

  return playerScore, computerScore;
};

game();
