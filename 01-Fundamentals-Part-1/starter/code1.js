// let massMark, massJohn, heightMark, heightJohn
// massMark = prompt('Enter Mark\'s weight', 78)
// massJohn = prompt('Enter John\'s weight', 92)
// heightMark = prompt('Enter Mark\'s height', 1.69)
// heightJohn = prompt('Enter John\'s height', 1.95)
const massMark = 78, massJohn = 92, heightMark = 1.69, heightJohn = 1.95
const BMIMark = massMark / (heightMark ** 2);
const BMIJohn = massJohn / (heightJohn ** 2);
const markHigherBMI = BMIMark > BMIJohn;
// console.log('BMI of Mark: ', BMIMark)
// console.log('BMI of John: ', BMIJohn)
console.log(BMIMark, BMIJohn)
console.log(markHigherBMI === true ? `Mark has higher BMI than John: ${BMIMark}` : `John has higher BMI than Mark: ${BMIJohn}`);
console.log(markHigherBMI === true ? `Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!` : `John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)