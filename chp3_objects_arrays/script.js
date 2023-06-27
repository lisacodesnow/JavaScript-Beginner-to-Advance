const groceries = ["milk", "bread", "apples"]
groceries.splice(1,1, "bananas", "eggs")
groceries.splice(1,0, "carrots", "lettuce")
groceries.pop()
groceries.sort()
console.log(groceries)
const liquid = ["juice", "pop"]
const comboFood = groceries.concat(liquid, liquid)

console.log(comboFood)
const popIndex = comboFood.lastIndexOf("pop")
console.log(popIndex)