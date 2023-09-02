let js = 'amazing';
// if (js === 'amazing') {
//     alert("JS is fun!");
// }
console.log(13 + 18 + js);
let language;
console.log(language) // undefined
const birth_date = 18
console.log(birth_date)
// birth_date = 13; //Assignment to constant variable.
let PI = 3.14;
console.log(PI)
language = "English"
let country = "India", continent = "Asia", population = 1.4
const description = `${country} is in ${continent}, and its ${population} billion people speak ${language}`;
console.log(description)
if (population > 0.5)
    console.log(`${country}'s population is above average`)

console.log('9' - '5'); //4
console.log('9' + '5'); //'95'
console.log("9" + 5); //'95'
console.log('19' - '13' + '17'); //'617'
console.log('19' - '13' + 17); //23
console.log('123' < 57); //false
console.log(5 + 6 + '4' + 9 - 4 - 2); //1143

console.log(typeof true);

let variable = true; //boolean
console.log(typeof variable);
variable = "string"; //string
console.log(typeof variable);

console.log(typeof null)

// var is function scoped
// let is block scoped
var desg = 'Coder';
desg = 'programmer';

const now = 2023;
const age = now - 1996;
console.log(now, age);
console.log(2 ** 3) // 2 raise to the power 3: 2*2*2=8

console.log(Number('13'))

let n = '1' + 1
n = n - 1
console.log(n)

console.log('18' === 18) // wont do coercion - false - strict
console.log('18' == 18) // will do coercion - true - loose

const favourite = prompt("what's your favt number")
console.log(favourite) // String type