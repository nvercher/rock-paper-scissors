let score = 0;

function game() {
    for (let i = 0; i < 5; i++) {
        function getComputerChoice() {
            const options = ["rock", "paper", "scissors"];
            return options[Math.floor(Math.random() * options.length)];
        }
        
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        
        const computerSelection = getComputerChoice();
        
        function playRound(playerSelection, computerSelection) {
            switch(playerSelection + computerSelection) {
                case "paperpaper":
                    return "You tied! You both picked paper";
                    break;
                case "rockrock":
                    return "You tied! You both picked rock";
                    break;
                case "scissorsscissors":
                    return "You tied! You both picked scissors";
                    break;
                case "paperrock":
                    score++;
                    return "BINGO! Machine had Rock, YOU WIN!";
                    break;
                case "rockpaper":
                    return "OOPS! Machine had Paper, YOU LOSE!";
                    break;
                case "paperscissors":
                    return "BOOPS! Machine had Scissors, YOU LOSE!";
                    break;
                case "scissorspaper":
                    score++;
                    return "BINGO! Machine had Scissors, YOU WIN!";
                    break;
                case "rockscissors":
                    score++;
                    return "BINGO! Machine had Scissors, YOU WIN!";
                    break;
                case "scissorsrock":
                    return "OOPS! Machine had Rock, YOU LOSE!";
                    break;
            }
        }
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();

function declareWinner() {
    if (score > 2) {
        console.log("Player wins")
    } else {
        console.log("Computer wins");
    }
} 

declareWinner();