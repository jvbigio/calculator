let firstOperand = ''
let secondOperand = ''
let operation = ''
let computedValue
const calcDisplay = document.querySelector('.calculator-display')
const numberBtn = document.querySelectorAll('.number')
numberBtn.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const keyPressed = e.target.value
    if (!operation) {
      firstOperand += keyPressed
      currentInput(keyPressed)
    } else if (operation) {
      calcDisplay.textContent = ''
      secondOperand += keyPressed
      currentInput(keyPressed)
      calcDisplay.textContent = ''
      currentInput(secondOperand)
    }
  })
)
const operationBtns = document.querySelectorAll('.operation')
operationBtns.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    const keyPressed = e.target.value
    if (operation) {
      firstOperand = parseFloat(firstOperand)
      secondOperand = parseFloat(secondOperand)
      if (operation === '+') {
        calcDisplay.textContent = ''
        currentInput(firstOperand)
        firstOperand = firstOperand + secondOperand
        calcDisplay.textContent = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '-') {
        calcDisplay.textContent = ''
        currentInput(firstOperand)
        firstOperand = firstOperand - secondOperand
        calcDisplay.textContent = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '*') {
        calcDisplay.textContent = ''
        currentInput(firstOperand)
        firstOperand = firstOperand * secondOperand
        calcDisplay.textContent = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
      if (operation === '/') {
        calcDisplay.textContent = ''
        currentInput(firstOperand)
        firstOperand = firstOperand / secondOperand
        calcDisplay.textContent = ''
        secondOperand = ''
        currentInput(firstOperand)
      }
    } else {
      calcDisplay.displayOutput = ''
      operation = keyPressed
    }
    operation = keyPressed
  })
)
const equalBtn = document.querySelector('.equals')
equalBtn.addEventListener('click', () => {
  calcDisplay.textContent = ''
  calculate(firstOperand, operation, secondOperand)
})
const memoryKeys = document.querySelectorAll('.memory-key')
memoryKeys.forEach((btn) =>
  btn.addEventListener('click', (e) => {
    switch (e.target.value) {
      case 'c':
        clearCalculator()
        break
      case 'mc':
        memoryClear()
        break
      case 'm+':
        memoryAdd(calcDisplay.textContent)
        break
      case 'mr':
        memoryRecall()
        break
    }
  })
)

function clearCalculator () {
  calcDisplay.textContent = '0'
  firstOperand = ''
  secondOperand = ''
  operation = ''
}

function memoryAdd (currentNumber) {
  const value = valueStorageHelper()
  value.push(currentNumber)
  localStorage.setItem('value', JSON.stringify(value))
}

function memoryRecall () {
  const value = valueStorageHelper()
  computedValue = value
  return currentInput(computedValue)
}

function memoryClear () {
  localStorage.clear()
  calcDisplay.textContent = '0'
}

function currentInput (numbers) {
  if (numbers === '.' && calcDisplay.textContent.includes('.')) return
  calcDisplay.textContent = calcDisplay.textContent === '0' ? numbers : (calcDisplay.textContent += numbers)
}

function calculate (num1, operator, num2) {
  let computedValue
  num1 = parseFloat(num1)
  num2 = parseFloat(num2)
  if (operator === '*') {
    computedValue = num1 * num2
  } else if (operator === '/') {
    computedValue = num1 / num2
    const isDecimal = computedValue - Math.floor(computedValue) !== 0
    return isDecimal ? currentInput(computedValue.toFixed(3)) : currentInput(computedValue)
  } else if (operator === '+') {
    computedValue = num1 + num2
  } else if (operator === '-') {
    computedValue = num1 - num2
  }
  return currentInput(computedValue)
}

function valueStorageHelper () {
  const value = !JSON.parse(localStorage.getItem('value'))
    ? [] : JSON.parse(localStorage.getItem('value'))
  return value
}
