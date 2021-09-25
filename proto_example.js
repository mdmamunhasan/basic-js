/*var person = {
    name: name,
    age: age
}
person.eat = function () {
    console.log('Person is eating.')
}
person.play = function () {
    console.log('Person is playing.')
}*/

/*
//Separation
function Person(name, age) {
    var person = {
        name: name,
        age: age
    }
    person.eat = function () {
        console.log('Person is eating.')
    }
    person.play = function () {
        console.log('Person is playing.')
    }
    return person;
}*/

//Save Memory
var personMethods = {
    eat: function () {
        console.log('Person is eating.')
    },
    play: function () {
        console.log('Person is playing.')
    }
}

/*function Person(name, age) {
    var person = {
        name: name,
        age: age
    }
    person.eat = personMethods.eat
    person.play = personMethods.play
    return person;
}*/

//Remove Duplicates
/*function Person(name, age) {
    var person = Object.create(personMethods);
    person.name = name;
    person.age = age;
    return person;
}*/

//Integrity
/*function Person(name, age) {
    var person = Object.create(Person.prototype);
    person.name = name;
    person.age = age;
    return person;
}

Person.prototype = {
    eat: function () {
        console.log('Person is eating.')
    },
    play: function () {
        console.log('Person is playing.')
    }
}*/

/*var sakib = Person('Sakib', 35);
var tamim = Person('Tamim', 36);*/

/*function Person(name, age) {
    this.name = name;
    this.age = age;
    return this;
}

Person.prototype = {
    eat: function () {
        console.log(this.name + ' is eating.')
    },
    play: function () {
        console.log(this.name + ' is playing.')
    }
}*/

/*//ES6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(this.name + ' is eating.')
    }

    play() {
        console.log(this.name + ' is playing.')
    }
}

const sakib = new Person('Sakib', 35);
sakib.play();
const tamim = new Person('Tamim', 36);
tamim.eat();*/

//Example with built-in
const myList = [];
myList.push(10);
Array.prototype.myPush = function (value) {
    if (value % 2 === 0) {
        return this.push(value);
    }
}
myList.myPush(11);
myList.myPush(12);
console.log(myList);