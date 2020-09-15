const result = document.querySelector('.result')
const calcDisplay = document.querySelector('.calculator-display')
let num1, num2, operation
let isFirstKeyPressed = true
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInput)
const savedNumbers = []

// [1,2,3,4,5].reduce((acc, current)=>acc+current, 0)

function getInput (e) {
  const keyPressed = e.target
  let numberTracker = result.innerHTML
  console.log(numberTracker) // 1122
  console.log(keyPressed)
  if (keyPressed.classList.contains('number')) {
    if (isFirstKeyPressed) {
      // num1 = e.target.textContent * 10 // orig
      num1 = e.target.textContent
      // num1 = e.target.value // 1 for key 1
      console.log(num1)

      // const tempNumber = number
      // console.log(tempNumber) // 11
      // num1 = parseFloat(num1) + parseFloat(number) // orig
      // result.innerHTML += number
      result.innerHTML += num1
      num1 += num1
      console.log(num1) // 11
      savedNumbers.push(num1) // string 11
    } else {
      // console.log(savedNumbers) // blank
      // result.innerHTML = ''
      num2 = e.target.textContent
      // console.log(num2)
      // result.innerHTML += number
      // num2 = e.target.textContent * 10
      // num2 = parseFloat(num2) + parseFloat(number)
      console.log(num2) // 2
      savedNumbers.push(num2)
      // console.log(savedNumbers)
      // result.innerHTML += num2 // keep
      // display correct but only same dbl digits: 11, 22, 33, etc
      result.innerHTML = numberTracker[1]
      console.log(keyPressed.innerHTML) // 2
      result.innerHTML += keyPressed.innerHTML
      num2 += num2
    }
  } else if (keyPressed.classList.contains('operation')) {
    isFirstKeyPressed = false
    // num1 = '' // works but erases 11
    console.log(num1)
    
    savedNumbers.push(num1)
    console.log(savedNumbers)
    // result.innerHTML = savedNumbers[0]

    if (keyPressed.textContent !== '=') {
      operation = keyPressed.textContent
    } else if (keyPressed.textContent === '=') {
      console.log(num1, operation, num2)
      calculator(num1, operation, num2)
    }
    // numberTracker = ''
  }
}

// console.log('1' + '1') // 11

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
