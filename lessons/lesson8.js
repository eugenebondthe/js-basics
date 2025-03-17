// Declarative function - can be invoked before declaration or any other prefered time
helloOne()
function helloOne() {
  console.log('Hello one!')
}
helloOne()

// Anonymus function
let helloTwo = function(){
    console.log('Hello two!')
}
helloTwo()

// ES6 func syntax or arrow func
let helloThree = () => {
    console.log('Hello three!')
}
helloThree()

// Function with arguments
function printName(name, surname) {
    console.log(`${name} ${surname}`)
}
printName('My', 'Dude')

// Func with return
function multiplyByTwo(num){
    return num * 2
}
console.log(multiplyByTwo(111))

// Import function
import { printAge } from '../helpers/printHelper.js'
printAge(5)

// Import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(100)