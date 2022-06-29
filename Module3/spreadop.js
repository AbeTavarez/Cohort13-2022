//* The spread Operator (...)
let arr1 = [1,2,3,4,5]

let arr2 = [...arr1]

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

//* Descructuring Objects

const person = {name: 'abe', age: 30, location: 'FL'}

// const name1 = person.name
// const age1 = person.age

const {location, age, name, state } = person

// console.log(name);
// console.log(age)
// console.log(location);


//* Descructuring Arrays

const devs = ['Jabes', 'Jaime', 'G', 'Ainur']

const [jabes, jaime, g, ainur] = devs
console.log(g);
console.log(ainur);

