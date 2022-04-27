
//* Declaration ES5
function greet(username){
    console.log(`Hello, ${username}`);
}

//* Declaration / with default value
function greet1(username = 'john'){
    console.log(`Hello, ${username}`);
}

//* Function call
// greet('abraham')

//* function with multiple parameters
function countDown(number = 10, user ){
    greet(user)
    for(let i= number; i >= 0; i--){
        console.log(i);
    }
}

// countDown(5, 'Abraham')
// countDown(3, 'Abraham')
// countDown(10, 'Abraham')

//* Function expression
const square = function(value){
    console.log(value * value)
}

// square(2)

//* Arrow Function
const add = (value1, value2) => {
    if (value1 === 0){
        return `first value was 0`
    }
    console.log(value1 + value2);
    return value1 + value2
}

let result = add(3,3)
// console.log(typeof result);
// console.log(result + 10);

const verifyUserToken = (token, username, password) => {
    if (!password){
        console.log('you need a password');
    }

    if (token){
        console.log(`welcome`);
        return token
    }
    console.log('inside function');
    if (!token){
        console.log(`Access denied`);
    }
}
// console.log(verifyUserToken('token', '', '123456'));


const sayHello = (stringArgument, secondArgument) => `Hi, ${stringArgument}`;

const sayHello2 = (stringArgument) => {

    return 'Hello, ' + stringArgument;
}

// console.log(sayHello('Abe'));