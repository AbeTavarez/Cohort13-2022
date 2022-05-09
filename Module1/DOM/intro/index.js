// grabs the div with the container class
const container = document.querySelector('#container')

// creates an empty h1 element
const h1 = document.createElement('h1')

// adds text to the h1
h1.textContent = 'Dynamic'

// appends the h1 to the container div
container.appendChild(h1)

console.log(h1);