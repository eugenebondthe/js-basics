// Loops

console.log('Hello world!')
console.log('Hello world!')
console.log('Hello world!')
console.log('Hello world!')
console.log('Hello world!')

// for(for i) loop
// for(startPoint; stopPoint; whatToDoOnEachCycle){} 
for (i = 0; i < 5; i++) {
  console.log('Hello world!')
}

// for of loop
let cars = ['Toyota', 'Volvo', 'BMW']
for (car of cars) {
  console.log(car)
}

for (car of cars) {
  console.log(car)
  if (car == 'Toyota') {
    break
  }
}

// ES6 syntax for each loop
cars.forEach( car => {
    console.log(car)
})