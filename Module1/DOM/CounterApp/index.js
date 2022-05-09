//1. Create a new variable called 'total' and assign it the div with the id of 'total'
const total = document.getElementById('total')
console.log(total);
console.log(total.textContent);

//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)
// Example:
function add() {
  //update the value of the total variable textContent
//   total.textContent++
    total.textContent = Number(total.textContent) + 1
  // use an alert to alert the user
//   alert(`Total: ${total.textContent}`)
}

function subtract() {
    total.textContent = Number(total.textContent) -1
}

function multiplyBy2(){
    total.textContent = Number(total.textContent) * 2;
}

function divideBy5(){
    total.textContent = Number(total.textContent) / 5;
}

//3. Attach Functions to Buttons
// get the button
const addButton = document.querySelector('#add')
console.log(addButton);
// add the event listener
addButton.addEventListener('click', add)

// grab the button
const subButton = document.getElementById('subtract')
// add 
subButton.addEventListener('click', subtract)

const multiplyBy2Button = document.getElementById("mult-2")
multiplyBy2Button.addEventListener('click', multiplyBy2)

// divide by 5
const divideBy5Button = document.getElementById("div-5");
divideBy5Button.addEventListener('click', divideBy5);
