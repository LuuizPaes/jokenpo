const result = document.querySelector(".result")
const humanScore = document.querySelector("#human-score")
const machineScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame(humanChoice, playMachine())

}

const playMachine = () => {

const choice = ['rock', 'paper', 'scissors']
   const randomNumber = Math.floor(Math.random() * 3)

    return choice[randomNumber]
}



const playTheGame = (human, machine) => {
    console.log("humano: " + human + "maquina: " + machine)

    if(human === machine) {
        result.innerHTML = "Você empatou!"
    } else if( (human === 'paper' && machine === 'rock') ||
                (human === 'rock' && machine === 'scissors') ||
                (human === 'scissors' && machine === 'paper')) {
        humanScoreNumber++
        humanScore.innerHTML =  humanScoreNumber           
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu!"
    }
}
