const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
function calcTip(bill) {
    return bill >= 50 && bill < 300 ? (0.15 * bill) : (0.2 * bill)
}
bills.forEach(bill => {
    const tip = calcTip(bill)
    tips.push(tip)
    totals.push(bill + tip)
})
console.log(bills, tips, totals)

function calcAverage(totals) {
    let sum = 0
    totals.forEach(total => sum += total)
    return sum / totals.length
}
console.log(calcAverage(totals))
