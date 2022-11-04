// Name : calculateRectangleArea  
// first parametre : length (num) 
//  second parametre : width (num)
// math area length x width 
// If any of the parameters are negative, the function should return undefined.

function calculateRectangleArea(length,width){
  if (length < 0 || width < 0){
    return undefined 
  }
  const area  = length * width
  return area
}

const result = calculateRectangleArea(10,5)
console.log(result)
//  

function calculateTriangleArea(base,height){
  if (base < 0 || height < 0 ){
    return undefined
  }
  const area = base * height / 2
  return area
}

const resultTwo = calculateTriangleArea(10,5)
console.log(resultTwo)
// 

function calculateCircleArea(radius){
  if (radius < 0){
    return undefined
  }
  const area = Math.PI * radius * radius
  return area
}
const resultThree = calculateCircleArea(10)
console.log(resultThree)