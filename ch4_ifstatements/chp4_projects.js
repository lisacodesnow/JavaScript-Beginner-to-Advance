// Evaluating Number Game

/*let randomNumber = Math.floor(Math.random() *3)
let userNumber = Number(prompt("Enter a number 0-3"))

if(userNumber > randomNumber){
    console.log(`Your number is higher.`)
}

else if(userNumber < randomNumber){
    console.log(`Your number is lower.`)
}

else{
    console.log(`You guessed the same number.`)
}

console.log(randomNumber)


switch(userNumber){
    case randomNumber:
    console.log(`Same number!`)
    break

    default:
    console.log(`Missed number`)
} */

//Friend Checker Game. Using a name API for random name generator

/*const getAPIData = async function(){
    const results = await fetch("https://random-data-api.com/api/v2/users?size=10")
    const data = await results.json()
    console.log(data)
    randomName(data)
    //Note: CANT RETURN API'S with a await, don't quite know why yet.
    //Have to pass the data to another function and EVEN THEN still can't return it. Just have to use it
   
}
getAPIData();


const randomName = (data) => {

    let randomIndex = Math.floor(Math.random()* 10);
    let pickNameIndex = data[randomIndex];
    let pickName = pickNameIndex.first_name
   
    const guessName = prompt(`Guess a name`)
    let nameMessage 
    
switch(guessName){
    case pickName:
        nameMessage= "Picked correct name"
        break

    default:
        nameMessage= "Wrong name"
}
    console.log(pickName)
    console.log(nameMessage)

} */

// Rock Paper Scissors Game

const myGuess = prompt("Pick rock, paper, or scissors")
const guessObjects = ["rock", "paper", "scissors"]
const randomPick = Math.floor(Math.random() * 3)
const computerGuess = guessObjects[randomPick]
console.log(computerGuess)

let message = `My ${myGuess} vs computer's ${computerGuess} `

/*if(myGuess === "rock" && computerGuess === "scissors"){
        message += "I win"

} else if (myGuess === "rock" && computerGuess === "paper"){

    message += "I lose"}

else if (myGuess === "rock" && computerGuess === "rock"){
    message += "its a tie"
} 

else if(myGuess === "paper" && computerGuess ===  "scissors"){
    message += "I lose"
} else if (myGuess === "paper" && computerGuess === "paper"){
    message += "its a tie"
} else if (myGuess === "paper" && computerGuess === "rock"){
    message += "I win"
} else if(myGuess === "scissors" && computerGuess === "paper"){
    message += "I win"
}else if(myGuess === "scissors" && computerGuess === "rock"){
    message += "I lose"
}
else{
    message += "its a tie"
}*/




console.log(message)









