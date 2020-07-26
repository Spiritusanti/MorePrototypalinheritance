// let's explore with functions
function a() {}

a.hasOwnProperty('call') //returns false. Same with the Apply and Bind

a.hasOwnProperty('name')
//returns true

// why is this? let's explore with another function!

function multiplyBy5(num) {
  return num*5
}

multiplyBy5.__proto__
// returns the base function
// if we store this base function and access properties in the console we get a big list including props from the base object.

// the important concept is that __proto__(child) links up to prototype(parent). Prototype has __proto__ as one of its props. This chain continues up through the base object until it points to null.

//this makes the native function:
Function.prototype


// how to we use inheritance without using _proto_?
// we use Object.create as below:

let human = {
  mortal: true
}

let socrates = Object.create(human)
socrates.age = 45
console.log(socrates.mortal)

// now let's learn about the following statement:"only functions have the prototype property"

// however, things get funky with the base object since it is a function!!!!!! The base object is a constructor function that creates an object wrapper. Object.prototype in the base object and it is a function. The very last stop with properties in the prototype chain.