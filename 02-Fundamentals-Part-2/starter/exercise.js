'use strict';
const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3)

let scoreDolphins = calcAverage(44, 23, 71) // 138/3
let scoreKoalas = calcAverage(65, 54, 49) // 168/3
console.log(scoreDolphins, scoreKoalas)

const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= (2 * avgKoalas))
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    else if (avgKoalas >= (2 * avgDolphins))
        console.log(`Koalas win (${avgDolphins} vs. ${avgKoalas})`)
    else
        console.log("No team wins...")
}
checkWinner(scoreDolphins, scoreKoalas)
scoreDolphins = calcAverage(85, 54, 41) // 180/3
scoreKoalas = calcAverage(23, 34, 27) // 84/3
console.log(scoreDolphins, scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)
