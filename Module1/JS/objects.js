const person = {
    firstName: 'Donavan',
    lastName: 'Smith',
    age: 28,
    email: 'steve@gmail.com',
    hobbies: ["music", "sports", "painting"],
    address: {
        country: 'Colombia',
        city: 'Bogota'
    },
    bark: function(sound){ 
        console.log(sound);
    },
}
person.bark('Woof!!!!')
// console.log(person);

// let input = 'address'
// console.log(person.firstName);
// console.log(person[input])
// delete person.age // delete property
// console.log(person);
// // console.log(person[age]);


// person.address.zipcode = '10033'
// console.log(person);

// console.log(person.hobbies[1])
// person.hobbies.push('swimming')
// console.log(person);