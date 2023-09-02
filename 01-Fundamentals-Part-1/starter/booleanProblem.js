let scoreDolphins = (96 + 108 + 89) / 3
let scoreKoalas = (88 + 91 + 108) / 3
if (scoreDolphins === scoreKoalas)
    console.log("Both win the trophy 🏆")
else if (scoreDolphins > scoreKoalas)
    console.log("Dolphins win the trophy 🏆")
else
    console.log("Koalas win the trophy 🏆🏆") // windows + . for emojis


const bill = 275;
let tip = 0;
tip = (bill >= 50 && bill < 300) ? (0.15 * bill) : (0.2 * bill)
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${Number(bill) + Number(tip)}`)
