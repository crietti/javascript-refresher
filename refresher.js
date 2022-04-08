// console.log("Hello world...");

let message = "How are you today?"
// console.log(message);

// //I am here

let greeting = "Hello"
let name = "Sue"
// console.log(greeting + " " + name + "!")

let age = 13

// console.log("You are " + age)
// console.log("In 10 years you will be " + (age + 10))

//THIS IS PART 2

// if (name == "Bob"){
//     console.log("I knew it was you, " + name + "!")
// } else {
//     console.log("Hey " + name + ", you're not Bob!")
// }

// let iAmWearingABelt = true;
// let iAmWearingGlasses = false;

// if (iAmWearingABelt && iAmWearingGlasses) {
//     console.log("Probably not Mr. Gorton")
// } else if (iAmWearingABelt && !iAmWearingGlasses){
//     console.log("Probably is Mr. Gorton")
// } else {
//     console.log("Probably just some dude.")
// }

// THIS IS PART 3

let size = ""
let type = ""

tellMeMyAge(age)
makePizza("small ", "pepporoni")

// for (let i = 0; i < 11; i++) { 
//     console.log(i)
//   }

function tellMeMyAge(age) {
    console.log("You are " + age + " years old.")
}

function makePizza(size, type) {
    console.log("One " + size + type + " pizza coming right up!")
}

function pricePizza(size) {
    if (size === "large") {
        return 17;
    } else {
        return 13;
    }
}

let howMuch = pricePizza("large");

console.log(howMuch);
let y = 8
someFunk();

function someFunk (){
    let x = 5
    console.log(x, y)
}