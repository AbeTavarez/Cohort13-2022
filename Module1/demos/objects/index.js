// // Class Definition

// class Person {
//     // basic class definition
// }

// class Person2 {
//     constructor(name, age){
//         this.name = name
//         this.age = age
//         // this function run every time we create an instance of the class 
//     }
// }

// class Person3 {
//     constructor(name, lastName, yearOfBirth, age, listOfName){
//         // this.property = value
//         this.name = name
//         this.lastName = lastName
//         this.yearOfBirth = yearOfBirth
//         this.age = age
//         this.listOfName = listOfName
//     }

//     changeName(newName){
//         this.name = newName
//         // this.listOfName.forEach(name => console.log(name))
//     }

//     getAllNames(){
//         this.listOfName.forEach(name => console.log(name))
//     }
// }

// const abe = new Person3('Abe', null ,1999, 30, ['alex', 'bill', 'anna'])
// const rick = new Person3('Rick', null ,2002, 15, ['a', 'b'])

// // const date = new Date()
// // console.log(date);

// console.log(abe);
// abe.changeName('Alex')
// console.log(abe);

// rick.changeName('Jordan')
// console.log(rick);
// abe.getAllNames()


console.log(this);

const h1 = document.querySelector('h1')
console.log(h1);

h1.addEventListener('click', function(){
    console.log(this);
})