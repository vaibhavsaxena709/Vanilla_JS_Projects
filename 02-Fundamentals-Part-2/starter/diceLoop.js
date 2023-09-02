// const rollDice = () => Math.floor(Math.random() * 6) + 1
// console.log(rollDice() + rollDice())

let dice = Math.floor(Math.random() * 6) + 1
let count = 0
while (dice !== 6) {
    console.log('Keep rolling the dice: ' + dice)
    count++
    dice = Math.floor(Math.random() * 6) + 1
}
if (count === 0)
    console.log('You hit the bull\'s eye')
else
    console.log(`you rolled the highest after rolling ${count} times : ${dice}`)