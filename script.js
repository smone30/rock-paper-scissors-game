// script.js

document.addEventListener('DOMContentLoaded', function() {
    const userChoiceDisplay = document.getElementById('user_choice');
    const compChoiceDisplay = document.getElementById('comp_choice');
    const resultDisplay = document.getElementById('result');
    const roundInfoDisplay = document.getElementById('round_info');
    const userScoreDisplay = document.getElementById('user_score');
    const compScoreDisplay = document.getElementById('computer_score');
    const startButton = document.getElementById('start');
    const restartButton = document.getElementById('restart');

    let userScore = 0;
    let compScore = 0;
    let currentRound = 0;
    const totalRounds = 3;
    let gameActive = false;

    // Function to get a random choice for the computer
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    // Function to determine the result of the game
    function determineWinner(userChoice, compChoice) {
        if (userChoice === compChoice) {
            return 'Draw';
        }

        if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'paper' && compChoice === 'rock') ||
            (userChoice === 'scissors' && compChoice === 'paper')
        ) {
            return 'You Win';
        } else {
            return 'Computer Wins';
        }
    }

    // Function to handle user choice click
    function handleUserChoice(choice) {
        if (!gameActive) return; // Ignore clicks if game is not active

        const compChoice = getComputerChoice();
        const result = determineWinner(choice, compChoice);

        userChoiceDisplay.textContent = `You chose ${choice}`;
        compChoiceDisplay.textContent = `Computer chose ${compChoice}`;
        resultDisplay.textContent = result;

        if (result === 'You Win') {
            userScore++;
            userScoreDisplay.textContent = userScore;
        } else if (result === 'Computer Wins') {
            compScore++;
            compScoreDisplay.textContent = compScore;
        }

        currentRound++;
        if (currentRound < totalRounds) {
            roundInfoDisplay.textContent = `Round ${currentRound} of ${totalRounds}`;
        } else {
            roundInfoDisplay.textContent = `Game Over! Final Score - You: ${userScore}, Computer: ${compScore}`;
            gameActive = false; // End game
        }
    }

    // Function to start the game
    function startGame() {
        userScore = 0;
        compScore = 0;
        currentRound = 0;
        userScoreDisplay.textContent = userScore;
        compScoreDisplay.textContent = compScore;
        roundInfoDisplay.textContent = `Round ${currentRound + 1} of ${totalRounds}`;
        gameActive = true;
    }

    // Function to restart the game
    function restartGame() {
        startGame(); // Reuse the startGame function
    }

    // Add event listeners to buttons
    document.getElementById('rock').addEventListener('click', function() {
        handleUserChoice('rock');
    });

    document.getElementById('paper').addEventListener('click', function() {
        handleUserChoice('paper');
    });

    document.getElementById('scissors').addEventListener('click', function() {
        handleUserChoice('scissors');
    });

    startButton.addEventListener('click', startGame);
    restartButton.addEventListener('click', restartGame);
});
