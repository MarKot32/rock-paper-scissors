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
