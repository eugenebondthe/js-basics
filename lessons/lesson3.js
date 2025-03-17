// Objects
let customer = {
  firstName: 'John',
  lastName: 'Smith',
}

console.log(customer)
console.log(customer['firstName'])
console.log(customer.lastName)

//Bracket notation
customer['firstName'] = 'Eugene'

//Dot notation
customer.lastName = 'Bond'

console.log(
  `The first name was changed to ${customer.firstName} and the last name to ${customer.lastName}`,
)

//Arrays
let car = ['Volvo', 'Tesla', 'Toyota']

console.log(car[1])
car[1] = 'BMW'

console.log(car[1])

let newCustomer = {
  firstName: 'John',
  lastName: 'Smith',
  car: ['Volvo', 'Tesla', 'Toyota'],
}

console.log(newCustomer.car[1])
