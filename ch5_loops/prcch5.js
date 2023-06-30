//Ex 5.1 Create a number guessing game

/*const guesses = 5
const randomNumber = Math.floor(Math.random() * 5)+1
let incorrectAnswer = true;


while(incorrectAnswer){
const question = Number(prompt(`Enter number between 1-5`))

    if(question> randomNumber){
        console.log(`Guess was too high`)
    }
    else if(question < randomNumber){
        console.log(`Guess was too low`)
    }
    else{
        incorrectAnswer = false;
        console.log(`Correct Guess`)
    }
}*/

//Ex: 5.2

/*let counter = 0;
let step = 5
do{
    console.log(counter);
    counter += step
} while(counter <= 100)*/

//Ex: 5.3 Create an array to hold objects

const myWork = [];
for(x=1; x<10; x++){
    let stat = x%2 ? true : false
    let lessonPlan = {
        name: `Lesson ${x}`,
        status: stat
    }
    myWork.push(lessonPlan)
    console.log(myWork)
}

