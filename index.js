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