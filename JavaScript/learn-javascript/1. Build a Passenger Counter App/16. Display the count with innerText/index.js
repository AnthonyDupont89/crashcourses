// grab the count-el element, store it in a countEl variable
let count = 0
let countEl = document.getElementById(id="count-el")
// console.log(countEl);

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    // console.log(count);
    countEl.innerText = count
}
