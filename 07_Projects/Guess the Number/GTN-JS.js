
let random=(parseInt(Math.random()*100 + 1))    //generating Random Number

const submit = document.querySelector('#subt')
const userinput = document.querySelector('#guessField')
const guessslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess= []
let numGuess = 1
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateGuess(guess)
    })
}


function validateGuess(guess){

    if(isNaN(guess)){
        alert("Please Enter a Valid Number")
    }else if(guess<1){
        alert("Please Enter a Number More than 1")
    }
    else if(guess>100){
        alert("Please Elenter a Number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over randon Number Was ${random}`)
            endgame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){

    if(guess === random){
        displayMessage(`You Guessed it right `)
        endgame()
    }else if(guess<random){
        displayMessage(`Number is less than Number`)
    }else{
        displayMessage(`Number is More than Number`)
    }
}

function displayGuess(guess){
    userinput.value=''
    guessslot.innerHTML+= `${guess} , `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newgame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',()=>{
        
        random=(parseInt(Math.random()*100 + 1)) 
        prevGuess=[]
        numGuess=1
        guessslot.innerHTML=''
        remaining.innerHTML = `${11-numGuess}`
        userinput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}

function endgame(){
    userinput.value =''
    userinput.setAttribute('disabled','')

    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newgame()
}





