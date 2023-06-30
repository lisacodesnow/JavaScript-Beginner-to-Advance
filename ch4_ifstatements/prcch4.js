//Practice 4.1

const dog = true;
console.log(dog)
if(dog){
    console.log(`I like dogs`)
}
/*don't have to add an else statement. If its false then nothing will excute. Add an else
if you want something else to execute*/

if(!dog){
    console.log(`I don't like dogs`)
} else{
    console.log(`I super duper like dogs.`)
}

//Practice 4.2

/*const person = Number(prompt("How old are you? 'Enter numbers only'"))
let message

if(person >= 21){
    message = "You may enter and can purchase beer."
}
else if (person >=19){
    message="You may enter but can not purchase beer."
}
else{
    message= "You may not enter!"
}

console.log(message)*/

//Practice 4.3 Conditional ternary operators

const ID = true;
let age = 32

let ageMessage = age < 30 ? "denied" : "allowed";

console.log(ageMessage)

//Practice 4.4 Switch statements. Create Magic 8 ball random generator

/*const randomNumber = Math.floor(Math.random() * 6) ; // generates random number 0-5
const userQuestion = prompt("Ask a question").toLowerCase();
let userMessage
switch(randomNumber)
   {case 0:
        userMessage = "Lucky Day"
        break;
    case 1:
        userMessage ="Rainy Day"
        break;
    case 2:
        userMessage="Take a break today"
        break;
    case 3:
        userMessage="Drive far today"
        break;
    case 4:
        userMessage= "Have a good day"
    default:
        userMessage="Todays not your lucky day"


   }

console.log(`You asked ${userQuestion} and the answer is ${userMessage}.`)
console.log(randomNumber)*/

//Practice 4.5 Combining cases with switch instead of ||, or clause

/*const prize = Number(prompt("Set the value between 0-10"))
const outputMessage = "My selection:"

switch(prize){
    case 0:
    case 1:
    case 2:

        prizeMessage = "pick two small candies"
        break;
    case 3:
    case 4:
    case 5:

        prizeMessage="pick a video game"
        break;

    case 6:
    case 7:
        prizeMessage="pick anything off the middle shelf"

    case 8:
        prizeMessage="pick any gaming console"
        break;
    
    default:
        prizeMessage = "pick whatever you want"
        break;

}

console.log(`You picked number ${prize} so ${prizeMessage}`);*/