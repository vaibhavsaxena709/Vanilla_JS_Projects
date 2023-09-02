'use strict';
// a = 1;
let a = 1;
console.log(a)
logger("start");

function logger(message) {
    console.log("function triggered: " + message)
}

function birthday(date, name) {
    return `${name}'s birthday falls on ${date}`;
}
console.log(birthday("09-18-1996", "Vaibhav")) // mm-dd-yyyy

const newBirthday = function (date, name) {
    return `${name}'s birthday falls on ${date}`;
}
console.log(newBirthday("09-14-1996", "Dhruv"))

// Arrow function
const arrowBirthDay = (date, name) => `${name}'s birthday falls on ${date}`;
console.log(arrowBirthDay("03-06-1996", "Parth"))

const yearsUntilRetirement = (date, name) => {
    const age = date.substring(0, 4)
    const retirement = 65 - (2023 - age);
    return `${name} is going to retire in ${retirement} years`
}
console.log(yearsUntilRetirement("1996-09-18", "Vaibhav")) // yyyy-mm-dd

function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)
    return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`
}
console.log(fruitProcessor(2, 1))

const friends = ['Steve Rogers', 'Tony Stark', 'Dr. Banners']
console.log(friends)
friends.push('Natasha Romanoff') // adds at end
console.log(friends)
friends.unshift('Thor') // adds at start
console.log(friends)
friends.pop() // removes from last
console.log(friends)
friends.shift() // removes from first
console.log(friends)
console.log(friends.includes('Steve Rogers')) // checks with strict equality (===)