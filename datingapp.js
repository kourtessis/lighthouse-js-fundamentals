// Name ageCalculator
// parametre 1 = name
// parametre 2 = yearOfBirth (num)
// parametre 3 = currentYear num)

function ageCalculator(name, yearOfBirth, currentYear){
  const age = currentYear - yearOfBirth
  return name + " is " + age + " years old."
}
const result = ageCalculator("Suzie", 1983, 2015)
console.log(result)