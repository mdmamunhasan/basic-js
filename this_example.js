// implicit binding

/*var player = {
    name: 'Sakib',
    age: 35,
    printPlayerName: function (){
        console.log(this.name);
    }
}

player.printPlayerName();*/

/*var printPlayerNameFunction = function (obj){
    obj.printPlayerName = function (){
        console.log(this.name);
    }
}

var sakib = {
    name: 'Sakib',
    age: 35
}

var tamim = {
    name: 'Tamim',
    age: 35
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);
sakib.printPlayerName();
tamim.printPlayerName();*/

/*var Player = function (name, age, father_name) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        father: {
            name: father_name,
            printName: function () {
                console.log(this.name);
            },
        }
    }
}

var sakib = Player('Sakib', 35, 'Mr. XYZ')
sakib.printName();
sakib.father.printName();*/

// explicit binding

/*var printPlayerName = function (v1, v2, v3) {
    console.log(`${this.name} is ${v1}, ${v2}, ${v3}`);
}

var sakib = {
    name: 'Sakib',
    age: 35
}

var v1 = 'Handsome', v2 = 'All Rounder', v3 = 'Best Player';
printPlayerName.call(sakib, v1, v2, v3);

var v = [v1, v2, v3]
printPlayerName.apply(sakib, v);

var playerName = printPlayerName.bind(sakib, v1, v2, v3);
playerName();*/

// new binding

/*function Player(name, age) {
    // this = Object.create(null)
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
    // return this;
}

var sakib = new Player('Sakib', 35);*/

// window binding

/*'use strict'
var printPlayerName = function () {
    console.log(this.name);
}

var sakib = {
    name: 'Sakib',
    age: 35
}

printPlayerName();*/

// arrow function

var javascript = {
    name: "JavasScript",
    libraries: ["React", "Vue", "Angular"],
    /*printLibraries: function (){
        this.libraries.forEach(function (a){
            console.log(`${this.name} loves ${a}`)
        });
    },
    printLibraries: function (){
        self = this;
        this.libraries.forEach(function (a){
            console.log(`${self.name} loves ${a}`)
        });
    },*/
    printLibraries: function (){
        this.libraries.forEach((a) => {
            console.log(`${this.name} loves ${a}`)
        });
    }
}

javascript.printLibraries();

// arrow function for events will not work

var searchInput = document.getElementById('js-search-input');
const inputText = document.querySelector('#js-input-text');
searchInput.addEventListener('keyup', function (){
    inputText.innerHTML = this.value;
});