
// const numbers = [45,67,23,56,784,4,5]

// const output = []
// numbers.forEach( element => output.push(element * 2)  )

// console.log(output);

// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];

// fruit.forEach((element, index, fruit) => {
//     fruit[index] = element.toUpperCase()
// })

// const fruitUpperCase = []
// fruit.forEach(element => fruitUpperCase.push(element.toUpperCase()))

// console.log(fruit);
// console.log(fruitUpperCase);


// const output2 = numbers.map(element => element*2)
// console.log(output2);

// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// let alphabet = '';
// let alphabet1 = '';
// const letters = ['a', 'b', 'c', 'd'];

// function appendStr(char) {
//     alphabet += char;
// }

// function allUpperCase(str){
//     alphabet1 +=  str.toUpperCase()
// }

// function forEach(array, functionToRun){
//     for(let i=0; i < array.length; i++){
//         functionToRun(array[i])
//     }
// }

// // forEach(letters, appendStr);
// // forEach(letters, allUpperCase);
// console.log(alphabet); //prints 'abcd'
// console.log(alphabet1); //prints 'ABCD'
// ============================================

// ADD CODE HERE
//* Create a function subtractTwo that accepts a number and returns that number minus 2.
const subtractTwo = number => {
    return number - 2;
}

//* Then create a function map that takes two inputs
const map = (array, callbackFunction) => {
    const newArray = []
    // write a for loop
    for (let i = 0; i < array.length; i++){
        // call the callbackFunction with each of the elements in the array
        // push the return value to a newArray
        newArray.push(callbackFunction(array[i]))
    }
    return newArray;
}

const myArr = [12,22,32]
let result = myArr.map(subtractTwo)
// console.log(result)

// Uncomment these to check your work!
// console.log(typeof subtractTwo); // should log: 'function'
// console.log(typeof map); // should log: 'function'
// console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


function forEach(array, functionToRun){
    for(let i=0; i < array.length; i++){
        console.log((functionToRun(array[i])))
    }
}

const map2 = (array, functionToRun) => {
    let newArray = []
    forEach(array, functionToRun)
    return newArray
}

console.log(map2([3,4,5], n => n - 2)); // should log: [1, 2, 3]