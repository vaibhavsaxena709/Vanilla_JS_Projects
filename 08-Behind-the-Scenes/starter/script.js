'use strict';

console.log(avenger1); // undefined
// console.log(avenger4); // Uncaught ReferenceError: Cannot access 'avenger4' before initialization
// console.log(avenger2); // Uncaught ReferenceError: Cannot access 'avenger2' before initialization
//console.log(avenger3); // Uncaught ReferenceError: Cannot access 'avenger3' before initialization

var avenger1 = 'Steve Rogers';
const avenger4 = 'Tony Stark';
let avenger2 = 'Bruce Banner';
const avenger3 = 'Clint Barton';

console.log(addDecl(13, 18)); // 31
// console.log(addExpr(13 + 18)); // Uncaught ReferenceError: Cannot access 'addExpr' before initialization
// console.log(addArrow(13 + 18)); // Uncaught ReferenceError: Cannot access 'addArrow' before initialization
// console.log('with var' + addExpr(13 + 18)); // Uncaught TypeError: addExpr is not a function
//console.log('with var' + addArrow(13 + 18)); // Uncaught TypeError: addArrow is not a function

function addDecl(a, b) {
  return a + b;
}
// const addExpr = function (a, b) {
//   return a + b;
// };
var addExpr = function (a, b) {
  return a + b;
};
// const addArrow = (a, b) => a + b;
var addArrow = (a, b) => a + b;

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

var firstName = 'Parth'; // var saves the variable in global scope
console.log(this);
const vaibhav = {
  firstName: 'Vaibhav',
  year: 1996,
  calcAge: function () {
    let year = 2000;
    console.log(this);
    return [2023 - year, 2023 - this.year];
  },
  greet: () => console.log(`Hey ${this.firstName}, how are you?`), // 'this' is window object for arrow functions
};
const dhruv = {
  year: 1995,
};
dhruv.calcAge = vaibhav.calcAge;
console.log(vaibhav.calcAge());
vaibhav.greet();
console.log(dhruv.calcAge());

const f = vaibhav.calcAge;
// f(); // Uncaught TypeError: Cannot read properties of undefined (reading 'year') at calcAge

const testFunc = function (num) {
  console.log(num);
  console.log(this);
};
testFunc(4);
const testFuncArrow = num => {
  console.log(num);
  console.log(this);
};
testFuncArrow(8);

const addExprArgs = function (a, b) {
  console.log(arguments + ' type of arguments: ' + typeof arguments);
  let res = 0;
  for (let i = 0; i < arguments.length; i++) res += arguments[i];
  console.log(res);
  return a + b;
};
addExprArgs(1, 2, 3, 4);

const me = {
  myName: 'Vaibhav',
  myAge: 26,
};
const friend = me;
friend.myAge = 27;
console.log('friend: ', friend);
console.log('me: ', me);

const me2 = {
  myName: 'Vaibhav',
  myAge: 26,
  family: ['Steve', 'Tony'],
};
const newFriend = Object.assign({}, me2);
newFriend.myAge = 25;
newFriend.family.push('Natasha');
newFriend.family.push('Bruce');
console.log('new friend: ', newFriend);
console.log('me 2: ', me2);
