// let numNeighbours = Number(prompt('How many neighbour countries does your country have ? '),);
// if (numNeighbours === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

let text;
let favDrink = prompt("What's your favorite cocktail drink?", "Coca-Cola");
switch (favDrink) {
    case "Coca-Cola":
        text = "Excellent choice! Coca-Cola is good for your soul.";
        break;
    case "Pepsi":
        text = "Pepsi is my favorite too!";
        break;
    case "Sprite":
        text = "Really? Are you sure the Sprite is your favorite?";
        break;
    default:
        text = "I have never heard of that one!";
}
console.log(text);
