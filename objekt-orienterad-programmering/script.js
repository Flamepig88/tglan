// const person = {
//     name: 'Rabi',
//     age: '17',
//     location: 'Södertälje', 
//     greeting() {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
//     },
// }

// class Person {
//     constructor(age, name, location) {
//         this.age = age
//         this.name = name
//         this.location = location
//     }

//     greeting() {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old`)
//     }
// }

// const person1 = new Person(35, 'Marcus', 'Hoodinge')
// const person2 = new Person(17, 'Beni', 'Södertälje')

// function square(x) {
//     return x * x
// }

class Animal {
    constructor(type, breed, name, sound, age) {
        this.type = type
        this.breed = breed
        this.name = name
        this.age = age
        this.sound = sound
    }

    sounds() {
        console.log(`Hello! My name is ${this.name} and I am a ${this.age} year old ${this.type}(${this.breed}). *${this.sound}!*`)
    }
}

const animal1 = new Animal('dog', 'bulldog', 'Beni', 'Woof', 3)
const animal2 = new Animal('cat', 'american-bobtail', 'Niklas', 'Meow', 2)
const animal3 = new Animal('bird', 'eagle', 'Pontus', 'annoying', 5)