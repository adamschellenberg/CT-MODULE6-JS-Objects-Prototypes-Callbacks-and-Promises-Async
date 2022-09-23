//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
};

const displayFood = (obj) => {
    Object.keys(obj).forEach(key => {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            displayFood(obj[key])
        } else {
            console.log(`${obj[key]}`)
        }
    })
};

displayFood(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

// Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    this.addAge = (addedAge = 1) => {
        this.age = this.age + addedAge;
    }
}

let fry = new Person('Fry', 25);
let leela = new Person('Leela', 25);

fry.printInfo();
leela.printInfo();

fry.addAge();
fry.addAge(2);

fry.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to 
    determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function slowCount(s) {
    return new Promise( (resolve) => {
        setTimeout( () => (s.length > 10 ? resolve(true) : resolve(false)), 2000);
    })
};

async function asyncPrintResults(s) {
    const result = await slowCount(s);
    if (result){
        console.log('Big word');
    } else {
        console.log('Small Number');
    }
}

asyncPrintResults('I am Bender, please insert');
asyncPrintResults('liquor');