// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  let baseString = `The ${arr.length} ${desc} are `
  const lastIndex = arr.length - 1
  for(let i = 0; i < arr.length; i++) {
    if(i === lastIndex) {
      baseString += `${arr[i]}, `
    } else {
      baseString += arr[i]
    }
  }
  return "Correction: " + baseString
}

const sentence = (generateSentence("Highest mountains", ["Mount Everest", "K2"]))
console.log(sentence);




///////////////////////////////////////////////////////////////////////////////////////////////////////////
let countryDesc = "largest countries"
let countryArr = ["China", "India", "USA"]

function generateSentence1(desc, arr) {
  let itemsArr = ""
  for(let i = 0; i < arr.length; i++) {
    if(i < arr.length-2) {
      itemsArr += `${arr[i]}, `
    } else if (i < arr.length-1){
      itemsArr += `${arr[i]} and `
    } else {
      itemsArr += arr[i]
    }
  }
  return `Attempt 1: The ${arr.length} ${desc} are ${itemsArr}`
}

console.log(generateSentence1(countryDesc, countryArr));




///////////////////////////////////////////////////////////////////////////////////////////////////////////
let largestCountries = [
  {desc: "largest countries"},
  {arr: ["China", "India", "USA"]}
]

let bestFruits = [
  {desc:"best fruits"},
  {arr: ["apple", "banana"]}
]

function generateSentence0(obj) {
  let desc = obj[0].desc
  let arr = obj[1].arr
  let arrLength = obj[1].arr.length
  return `Attempt 0: The ${arrLength} ${desc} are ${arr}`
}

console.log(generateSentence0(bestFruits));
