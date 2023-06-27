const myNewCar = {
    make: "Honda",
    model: "Accord",
    color: "blue",
    wheels: 5,
    smooth: false,
}

let variable = "color"
myNewCar[variable] = "red";
//let newVariable = "forSale"
myNewCar["forSale"] = true;
console.log(myNewCar.make + myNewCar.model)
console.log(myNewCar.forSale)
