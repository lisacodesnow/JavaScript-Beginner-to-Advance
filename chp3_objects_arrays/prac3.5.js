let people = {
    friends:[{
        first: "Scott",
        last: "Greg",
        ID: 1,
    },
    {first: "Brandy",
    last: "Rebre",
    ID: 2,
    },
    {
    first: "Tom",
    last: "Drew",
    ID: 3}],
    jobs:
        {
            companynames: [ 
                Mcdonalds= {
                date: "March",
                town: "New Port"
            },
                Wendys ={
                    date: "April",
                    town: "Oak",
                },

                BestBuy={
                    date: "June",
                    town: "Hersh"
                },

            ],
        }
    
}

console.log(people.jobs.companynames[2].town);

const theList=[
    'Laurence', 
    'Svekis', 
    true,
     35,
     null, 
     undefined, 
    {test: 'one',
    score: 55},
    ['one', 'two'],
]


theList[0]="FIRST"
theList.splice(2, 10, "MIDDLE", "hello World", "LAST")

console.log(theList)

 
