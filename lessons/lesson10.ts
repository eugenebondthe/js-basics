// TS vs JS

let customerFirstName = 'John'
let customerLastName = 'Konstantine'
let customerAge = 25

type Customer = { firstName: string, lastName: string, active: boolean }

let firstCustomer: Customer = {
    firstName: 'Mary',
    lastName: 'Black',
    active: true
}