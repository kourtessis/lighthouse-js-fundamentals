// sending 100 bottles per container
// how many 100s from any number
//  number / 100 or %

let howManyHundreds = function (bottles){
  let remainder = bottles % 100;
  let result =  (bottles - remainder) / 100;
return result
}
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);