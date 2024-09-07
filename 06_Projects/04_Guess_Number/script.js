const submitButton = document.querySelector('#subt')

let randomNumber = parseInt(Math.random()*100 + 1)
// console.log(randomNumber)
let prevGuess = [] //array to store previous guesses
let numGuess = 1; //counting guesses done 
const userInput = document.querySelector('#guessField')

const guessesRem = document.querySelector('.lastResult')
const prevGuessesDisplay = document.querySelector('.guesses')
const lowOrHigh = document.querySelector('.lowOrHi')
const resultParas = document.querySelector('.resultParas')

const p = document.createElement('p')

let playGame = true;

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault();
        const numGuessed = parseInt(userInput.value)
        console.log(numGuessed)
        validateGuess(numGuessed)

    })
}
function validateGuess(guess){
    if(isNaN(guess)){
       displayMessage(`Please enter valid number`)
    }else if (guess > 100){
        displayMessage(`ENter number smaller than 100`)
    }else if(guess < 1){
        displayMessage(`enter number greater than 1`)
    }
    else{
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame()
        }
        else{
            displayGuess(guess)
            // prevGuess.push(guess)
            // numGuess++;
            checkGuess(guess)
            
        }

    }
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h3>${message}</h3>`
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guess it right!!`)
        endGame()
    }
    else if(guess > randomNumber){
        displayMessage(`Your guess is high!`)
    }
    else{
        displayMessage(`Your guess is low!`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    prevGuessesDisplay.innerHTML += `${guess}, `
    numGuess++;
    guessesRem.innerHTML = `${11-numGuess}`
}
function endGame(){
    userInput.value = ''
    playGame = false
    userInput.setAttribute('disabled', '')
    p.classList.add('button')

    p.innerHTML = `<h3 id = "newGame">Start New Game</h3>`
    resultParas.appendChild(p)
    newGame()

}
function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e) {
        prevGuess = []
        resultParas.removeChild(p)
        p.innerHTML = ""
        numGuess = 1
        userInput.removeAttribute('disabled')
        guessesRem.innerHTML = `${11- numGuess}`
        prevGuessesDisplay.innerHTML = ""
        lowOrHigh.innerHTML = ""

        randomNumber = parseInt(Math.random()*100 + 1)

        playGame = true

    })
}
