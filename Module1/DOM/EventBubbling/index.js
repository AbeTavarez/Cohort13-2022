// const body = document.querySelector('body')
// body.addEventListener('click', function(){
//     console.log(`Hello from body`);
// })

// const mainDiv = document.getElementById('main')
// mainDiv.addEventListener('click', function(){
//     console.log(`Hello from main div`);
// })

// const containerDiv = document.getElementById('container')
// containerDiv.addEventListener('click', function(){
//     console.log(`Hello from container`);
// })

// Event Delegation
const ul = document.getElementById('list')

ul.addEventListener('click', function(event){
    console.log(event);
    // removes child
    const li = event.target.remove()
})