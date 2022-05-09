

const button = document.querySelector('button')
console.log(button);

button.addEventListener('click', function(event){
    console.log(event);
    // create il element
    const li = document.createElement('li')
    // query the text input
    const input = document.querySelector('input')
    // add the input value to the li textContent
    li.textContent = input.value
    // append the li to the ul
    const ul = document.querySelector('ul')
    ul.appendChild(li)
    // clears out the input value prop
    input.value= ''
});


const ul = document.querySelector('ul')
ul.addEventListener('click', function(e){
    console.log(e);
    console.log('clicked on');
})

//* ============= Form =====================>
// UL
const taskList = document.querySelector('#task-list')
// Input
const taskInput = document.getElementById('task')
// Button
const submitButton = document.getElementById("submit-btn")



// submitButton.addEventListener('click', function(e){
//     // stop the default action
//     e.preventDefault()
//     console.log(e);
// })

const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(e);
})