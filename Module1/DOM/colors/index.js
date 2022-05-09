console.log(`running script`);
const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];

// CHALLENGE
// 1. Create A Function (generate)
function generate(){
    // Function should get a random color from the COLORS_ARRAY
    // const randomColor = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)]

    // gets random number from 0 to length of array
    const idx = Math.floor(Math.random() * COLORS_ARRAY.length)
    // get the random color by using the random number
    const randomColor = COLORS_ARRAY[idx]
    // Create li
    const li = document.createElement('li')
    // add text content to the il of the color's name from the array\
    li.textContent = randomColor
    console.log(li);
    // append the li to the color-list
    const ul = document.getElementById('color-list')
    ul.appendChild(li)
}

// get the button
const button = document.getElementById('generate-color')
// add event listener to the button
button.addEventListener('click', generate)



// 2. Create Function (reset)
// Should remove all li children from the ul.
// Should set background color to white.

function reset(){
    // gets ul from html
    // const ul = document.getElementById('color-list')
    // const il = ul.firstChild
    // ul.removeChild(il)
    // console.log(ul);

    const lis = document.querySelectorAll('li')
    lis.forEach(li => li.remove())
    console.log(lis);
}

const resetBtn = document.getElementById('reset')
resetBtn.addEventListener('click', reset)

