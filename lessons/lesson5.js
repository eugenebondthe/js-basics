// Logical AND
console.log(true && true) //all values have to be TRUE for expression to be TRUE
console.log(false && true)

// Logical OR
console.log(true || false) //any value should be TRUE for the expression to be TRUE

let ageIsMoreThanEighteen = true
let isUSCitizen = true

function isEligibleForDL(age, usCitizenship) {
    return age && usCitizenship
}
console.log(`This customer is eligible for DL: ${isEligibleForDL(ageIsMoreThanEighteen, isUSCitizen)}`)

console.log(`This customer is eligible for DL: ${ageIsMoreThanEighteen && isUSCitizen}`)

// Logical NOT
console.log(!true)
console.log(6 !== 10)