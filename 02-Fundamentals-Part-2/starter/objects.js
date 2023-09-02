const fullNames = {
    firstName: 'Tony',
    lastName: 'Stark'
}
const avengersObj = {
    pointBreak: 'Thor',
    incredible: 'Hulk',
    smartest: 'Stark',
    captain: 'Rogers',
    properName: fullNames
}
console.log(avengersObj)
console.log('Strongest Avenger: ' + avengersObj.pointBreak)
console.log('Smartest Avenger: ' + avengersObj['smartest'])
const nameKey = 'Name'
console.log(fullNames['first' + nameKey] + ' ' + fullNames['last' + nameKey])
console.log(avengersObj.properName.firstName)

// const favtAvenger = prompt('pick your favourite avenger: pointBreak, incredible, smartest, captain')
// console.log(avengersObj[favtAvenger])
