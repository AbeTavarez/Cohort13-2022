const message = 'Hello World React App!!'


//* Vanilla JS
// const h1 = document.createElement('h1')
// h1.textContent = message
// document.getElementById('root').appendChild(h1)

const app = <h1>{ message.toUpperCase() }</h1>


//* React
ReactDOM.render(app, document.getElementById('root'))