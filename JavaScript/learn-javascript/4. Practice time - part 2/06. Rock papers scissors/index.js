let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

// function getHand() {
//   let randomIndex = Math.floor(Math.random()*hands.length)
//   return randomIndex
// }

// console.log(hands[getHand()]);

function getHand() {
  let randomIndex = Math.floor(Math.random()*3)
  return hands[randomIndex]
}

console.log(getHand());
