let familySize = 1
let planedDistanceToDrive = 100

function recommendedCar(familySize, planedDistanceToDrive) {
  if (familySize <= 4 && planedDistanceToDrive < 200) {
    return 'Tesla'
  } else if (familySize <= 4 && planedDistanceToDrive >= 200) {
    return 'Toyota Camry'
  } else {
    return 'Minivan'
  }
}

recommendedCar(familySize, planedDistanceToDrive)