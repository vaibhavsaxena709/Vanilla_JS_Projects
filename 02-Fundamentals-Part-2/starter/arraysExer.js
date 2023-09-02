'use strict';

const bills = [125, 555, 44]
const tips = []
const totals = []

function calcTip(bill) {
    return (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.2 * bill)
}

bills.forEach(element => tips.push(calcTip(element)))

console.log(bills)
console.log(tips)

for (let j = 0; j < bills.length; j++)
    totals.push((bills[j] + tips[j]))

console.log(totals)