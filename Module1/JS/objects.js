let person = {
    firstName: 'Alex',
    lastName: 'Johnson',
    age: 32,
    address: {
        state: 'NY',
        zipcode: 10032
    },
    log: function () {
        console.log('Hello')
    }
}

console.log(person.firstName)
console.log(person.address.zipcode)