const result = document.querySelector('.result')
let num1, num2, operation
const inputedNumbers = []
let isFirstKeyPressed = true
const outputtedResult = ''
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)

function getInput (e) {
  const keyPressed = e.target
  // outputtedResult = result.textContent
  // console.log(outputtedResult)
  // console.log(keyPressed)
  if (keyPressed.classList.contains('number')) {
    if (isFirstKeyPressed) {
      const number = e.target.textContent
      if (number.length > 9) {
        console.log('you logged double digits')
      }
      // num1 = e.target.textContent * 10
      num1 = parseFloat(num1) + parseFloat(number)
      console.log(number, num1)
      result.innerHTML += number
    } else {
      result.innerHTML = ''
      const number = e.target.textContent
      console.log(number)
      // console.log(number) // 2
      // result.innerHTML += num2
      // result.innerHTML += number
      // num2 = e.target.textContent * 10 // original
      num2 = e.target.textContent
      console.log(num2)
      // console.log(number, num2) // 2, 20
      num2 = parseFloat(num2) + parseFloat(number)
      console.log(num2)
      result.innerHTML = number
      console.log(num2) // 22

      // const number = e.target.textContent
      // num2 = e.target.textContent
      // // num2 += number
      // console.log(number) // 2
      // console.log(num2) // 2
      // // result.innerHTML += num2 // original
      // result.innerHTML += num2
      // num2 += num2 // original
      // // result.innerHTML = num2 // original
      // // result.innerHTML += number
      // console.log(num2) // 22 Works!
      // console.log(num1, num2)
      // result.innerHTML = num2
      // result.innerHTML = outputtedResult + num2
      // outputtedResult = num1 + num1 // original
      // result.innerHTML = outputtedResult // original
      // result.innerHTML = num1 // original
      // console.log(outputtedResult)
      // num1 = num1 + e.target.textContent
      // console.log(num1)
      // result.innerHTML = num1 + num1 + e.target.textContent
      // result.innerHTML = num2
      // result.innerHTML = outputtedResult // original
    }
  } else if (keyPressed.classList.contains('operation')) {
    isFirstKeyPressed = false
    if (keyPressed.textContent !== '=') {
      operation = keyPressed.textContent
    } else if (keyPressed.textContent === '=') {
      calculator(num1, operation, num2)
    }
  }
}

function calculator (num1, operator, num2) {
  let computedValue

  if (operator === '*') {
    return
  } else if (operator === '/') {
    return
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
  } else if (operator === '-') {
    return
  }
  renderAnswer(computedValue)
}

function renderAnswer (answer) {
  result.innerHTML = answer
}
