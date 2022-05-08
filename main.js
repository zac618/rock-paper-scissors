function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return(userInput)
    } else {
        return(console.log('Please choose a valid response.'))
    }
}


function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3)
    if(getComputerChoice === 0) {
        return 'rock'
    } else if(getComputerChoice === 1) {
        return 'paper'
    } else if(getComputerChoice === 2) {
        return 'scissors'
    }
}

function determineWinner(userPlays, computerPlays) {
    if(userPlays === computerPlays) {
        return "The game was a tie!"
    }
    if(userPlays === 'rock') {
        if(computerPlays === 'paper') {
            return "The computer has won this round!"
        } else {
        return "You won this round!"
        }
    }
    if(userPlays === 'paper') {
        if(computerPlays === 'scissors') {
            return "The computer has won this round!"
        } else {
            return "You won this round!"
        }
    }
    if(userPlays === 'scissors') {
        if(computerPlays === 'rock') {
            return "The computer has won this round!"
        } else {
            return "You won this round!"
        }
    }
    if(userPlays === 'bomb') {
        return "The computer can't compete with that power...you win!"
        }
} 

function playGame() {
    let userInput = 'paper'
    const userPlays = getUserChoice(userInput);
    const computerPlays = getComputerChoice();
    console.log(`User: ${userPlays}`)
    console.log(`Computer: ${computerPlays}`)
    console.log(determineWinner(userPlays, computerPlays));
}

// console.log(`User: ${userPlays}`)
// console.log(`Computer: ${computerPlays}`)
// 

playGame();
