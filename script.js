let humanScore = 0;
let computerScore = 0;

document.getElementById("userScore").textContent = humanScore;
document.getElementById("computerScore").textContent = computerScore;

const choiceButtons = document.querySelectorAll("button");
const result = document.querySelector(".result");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    function getComputerChoice() {
      const choice = ["Rock", "Paper", "Scissors"];
      return choice[Math.floor(Math.random() * 3)];
    }

    const humanSelection = button.value;
    const computerSelection = getComputerChoice();
    const scoreResult = document.getElementById("result");

    playRound(humanSelection, computerSelection);

    function playRound(humanChoice, computerChoice) {
      const rule = {
        Rock: "Scissors",
        Paper: "Rock",
        Scissors: "Paper",
      };

      if (humanChoice === computerChoice) {
        document.getElementById(
          "choice"
        ).textContent = `Draw, you choice is ${button.value} and computer choice is ${computerChoice}`;
      } else if (rule[humanChoice] === computerChoice) {
        humanScore += 1;
        document.getElementById(
          "choice"
        ).textContent = `You win, ${button.value} beats ${computerChoice}`;
        document.getElementById("userScore").textContent = humanScore;
      } else {
        computerScore += 1;
        document.getElementById(
          "choice"
        ).textContent = `You lose, ${computerChoice} beats ${button.value}`;
        document.getElementById("computerScore").textContent = computerScore;
      }
    }

    if (humanScore === 5) {
      humanScore = 0;
      computerScore = 0;

      document.getElementById("userScore").textContent = humanScore;
      document.getElementById("computerScore").textContent = computerScore;
      scoreResult.textContent = "You are the champion";
    } else if (computerScore === 5) {
      humanScore = 0;
      computerScore = 0;

      document.getElementById("userScore").textContent = humanScore;
      document.getElementById("computerScore").textContent = computerScore;
      scoreResult.textContent = "You lost against the computer";
    } else if (humanScore === 0 || computerScore === 0) {
      scoreResult.textContent = "";
    }
  });
});
