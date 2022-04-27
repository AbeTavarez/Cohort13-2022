let id = '100';


//* perform type conversion / equals to
// if (id == 100) {
//     console.log('Correct!!')
// }

//* NOT equals to
// if (id != 100) {
//     console.log('Correct!!')
// }

//! Use by Default
//* === check for value and type
// if (id === 100) {
//     console.log('Correct!!')
// }

// if (id !== 100) {
//     console.log('Correct!!')
// }

let username = 'abe';

// console.log(typeof(username))

//* check for undefined
if (username !== undefined) {
    // console.log(`Hello ${username}`)
} else {
    // console.log('Please login!')
}

let firstName = 'steve'
let age = Math.floor(Math.random() * 100)

console.log(age)

if (age > 0 && age < 13) {
    // console.log(`${firstName} is a child.`)
} else if ( age >= 13 && age <= 19) {
    // console.log(`${firstName} is a teenager!`)
} else {
    // console.log(`${firstName} is a adult!`)
}

let userId = 1;
//* Ternary operator
console.log( userId === 11 ? 'yes' : 'no'  )

if (userId === 11) {
    console.log('yes')
} else {
    console.log('no')
}

