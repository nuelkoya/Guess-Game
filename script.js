const guessCount = document.getElementById("guess-count")
const screenText = document.getElementById("screen-text")
const startBtn = document.querySelector(".start-btn")
const enterBtn = document.querySelector(".enter-btn")
const startContainer = document.querySelector(".start")
const playContainer = document.querySelector(".show-play")
const playAgain = document.querySelector(".play-again")
const exit = document.querySelector(".exit")
const exitBtn = document.querySelector(".exit-btn")
const winNumber = document.querySelector(".win-number")
let guessCountNumber = 3


screenText.innerHTML= 
            `Welcome to the Guessing Game press
            the start button to begin`


function randomNumber(){
    const number = Math.floor(Math.random() * 10) + 1
    winNumber.innerHTML = number
}

function start(){
    screenText.innerHTML= 
            `Guessing a number between
            1 and 10`
    startContainer.classList.remove("active")
    playContainer.classList.add("active")
    winNumber.classList.add("accent")
    number = Math.floor(Math.random() * 10) + 1
    winNumber.innerHTML = number
    winNumber.style.display = "block"
    
}

startBtn.addEventListener('click', function(){
    start()
})




enterBtn.addEventListener('click', function(){
    if (document.getElementById("guess-number").value !== ''){
        winnerOrNot()
    }
})



playAgain.addEventListener('click',function(){
    playAgain.classList.remove("active")
    startContainer.classList.remove("active")
    playContainer.classList.add("active")
    exit.classList.remove("active")
    document.getElementById("guess-number").value = ''
    guessCountNumber = 3
    guessCount.innerHTML = `Guess Count: ${guessCountNumber}`
    number = Math.floor(Math.random() * 10) + 1
    winNumber.innerHTML = number
    winNumber.classList.add("accent")
    screenText.innerHTML= 
            `Guessing a number between
            1 and 10`          
})

exitBtn.addEventListener('click', function(){
    startContainer.classList.add("active")
    playContainer.classList.remove("active")
    exit.classList.remove("active")
    playAgain.classList.remove("active")
    document.getElementById("guess-number").value = ''
    winNumber.style.display = "none"
    guessCountNumber = 3
    screenText.innerHTML= 
            `Welcome to the Guessing Game press
            the start button to begin`
})



function winnerOrNot(){
    let inputGuess = parseInt(document.getElementById("guess-number").value)
   
    if(guessCountNumber > 0){
        if (inputGuess === number){
            screenText.innerHTML = `Your guess is correct 🎊🥳`
            guessCountNumber--
            guessCount.innerHTML = `Guess Count: ${guessCountNumber}`
            playContainer.classList.remove("active")
            playAgain.classList.add("active")
            exit.classList.add("active")
            winNumber.classList.remove("accent")
        } else{
            screenText.innerHTML = `Your guess is incorrect 😔.<br>
                                    Guessing a number between
                                    1 and 10`
            guessCountNumber--
            guessCount.innerHTML = `Guess Count: ${guessCountNumber}`
            if(guessCountNumber < 1){
                screenText.innerHTML = `Game Over 😭😭😭`
                playContainer.classList.remove("active")
                playAgain.classList.add("active")
                exit.classList.add("active")
                winNumber.classList.remove("accent")
                winNumber.style.display = "block"
            }
        }
    } 
    
}




