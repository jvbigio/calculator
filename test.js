// const calculator = (num1, num2, operator) => {
//   const operators = ['+', '-', '/', '*']
//   operators.forEach(operation => {
//     console.log(operation)
//     if (operation === '+') {
//       return num1 + num2
//     } else if (operation === '-') {
//       return num1 - num2
//     } else if (operation === '/') {
//       return num1 / num2
//     } else if (operation === '*') {
//       return num1 * num2
//     }
//     return operation[operator] (num1, num2)
//   })
// }

// const result = calculator(5, 5, '+')
// console.log(result)

function calculator (num1, operator, num2) {
  return {
    '*': num1 * num2,
    '/': num1 / num2,
    '+': num1 + num2,
    '-': num1 - num2
  }[operator]
}

console.log(calculator(5, '+', 5))
console.log(calculator(5, '/', 5))

class Calculators {
  //write functions to add(), subtract(), multiply() and divide()//
  add = (a, b) => a + b;
  subtract = (a, b) => a - b;
  multiply = (a, b) => a * b;
  divide = (a, b) => a / b;
}
let calc = new Calculators()
console.log(calc.add(10, 5));