function getComputerChoice(playerChoice) {
    const randomNumber = (Math.floor(Math.random() * 3))
    let computerChoice;
    if (randomNumber == 0) {
        computerChoice = 'rock';
    }
    else if (randomNumber == 1) {
        computerChoice = 'paper';
    }
    else if (randomNumber == 2) {
        computerChoice = 'scissors'
    }
    checkWinner(computerChoice, playerChoice);
}

function checkWinner(computerChoice, playerChoice) {
    if (playerChoice == 'rock') {
        if (computerChoice == 'rock') {
            document.getElementById('demo').innerHTML = 'Tie'
        }
        else if (computerChoice == 'paper') {
            document.getElementById('demo').innerHTML = 'Computer Wins'
        }
        else if (computerChoice == 'scissors') {
            document.getElementById('demo').innerHTML = 'Player Wins'
        }
    }
    else if (playerChoice == 'paper') {
        if (computerChoice == 'rock') {
            document.getElementById('demo').innerHTML = 'Player Wins'
        }
        else if (computerChoice == 'paper') {
            document.getElementById('demo').innerHTML = 'Tie'
        }
        else if (computerChoice == 'scissors') {
            document.getElementById('demo').innerHTML = 'Computer Wins'
        }
    }
    else if (playerChoice == 'scissors') {
        if (computerChoice == 'rock') {
            document.getElementById('demo').innerHTML = 'Computer Wins'
        }
        else if (computerChoice == 'paper') {
            document.getElementById('demo').innerHTML = 'Player Wins'
        }
        else if (computerChoice == 'scissors') {   
            document.getElementById('demo').innerHTML = 'Tie'
        }
    }
    console.log('Computer: ' + computerChoice);
    console.log('Player: ' + playerChoice)
}