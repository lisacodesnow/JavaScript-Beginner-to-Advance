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

/*const myWork = [];

for(let i = 1; i<=10; i++){
    let stat = i%2 ? true : false;
    let temp ={
        name: `Lesson ${i}`,
        status: stat,
    };
    myWork.push(temp)
    console.log(myWork)
}*/

//Ex: 5.4 Create tabular data with nested arrays

/*const myTalbe = [];
let rows = 5;
let columns = 8;
let counter = 0;

for(let i= 0; i<rows; i++){
    let firstRow = [];
    for(let j=0; j<columns; j++){
       counter ++
        firstRow.push(counter)
       
    }
    myTalbe.push(firstRow)
    console.table(myTalbe)
}*/

//Ex: 5.5

/*const gridArray = [];
let cells = 64;
let counter =0;
let rowArray;

for(let i=0; i<cells+1; i++){
    if(counter%8 == 0){
        if(rowArray != undefined){
            gridArray.push(rowArray)
        }
        rowArray = []
    }

    let counts = counter ++
    rowArray.push(counts)
}

console.table(gridArray)*/

//Ex: 5.6

/*let arr = [];
for(x=0; x<10; x++){
    arr.push(x)
}

console.log(arr)

for(i=0; i<arr.length; i++){
    console.log(arr[i])
}


for(let newArr of arr){
    console.log(newArr)
}*/

//Ex: 5.7

let fruit = {
    apple: "red",
    banana: "yellow",
    grape: "pruple"
}

for(let color in fruit){
    console.log(color, fruit[color])
}

let fruits=[
    "apple", "red", "banana", "yellow", "orange", "grape","purple"
]

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}
for(let colors in fruits){
    console.log(fruits[colors])
} 