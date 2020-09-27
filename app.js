const calcDisplay = document.querySelector('.calculator-display')
const calculator = {
  displayOutput: '' // orig
  // displayOutput: '0'
}
let firstOperand = ''
let secondOperand = ''
let operation = ''
let computedValue
const buttons = document.querySelector('.buttons-container')
buttons.addEventListener('click', getInputType)

function getInputType (e) {
  const keyPressed = e.target
  if (keyPressed.classList.contains('number') && !operation) {
    firstOperand += keyPressed.value
    currentInput(keyPressed.value)
  } else if (keyPressed.classList.contains('number') && operation) {
    calculator.displayOutput = ''
    secondOperand += keyPressed.value
    currentInput(keyPressed.value)
    calculator.displayOutput = ''
    currentInput(secondOperand)
  }

  if (keyPressed.classList.contains('operation') && keyPressed.value !== '=') {
    processOperationBtnPress(e)
  }
  if (keyPressed.value === '=') {
    processEqualBtnPress(e)
  }
  if (keyPressed.classList.contains('memory-key')) {
    processMemoryBtnPress(e)
  }
  renderScreen()
}

function processOperationBtnPress (e) {
  const keyPressed = e.target

  if (operation) {
    if (operation === '+') {
      calculator.displayOutput = ''
      currentInput(firstOperand)
      firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      currentInput(firstOperand)
    }
    if (operation === '-') {
      calculator.displayOutput = ''
      currentInput(firstOperand)
      firstOperand = parseFloat(firstOperand) - parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      currentInput(firstOperand)
    }
    if (operation === '*') {
      calculator.displayOutput = ''
      currentInput(firstOperand)
      firstOperand = parseFloat(firstOperand) * parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      currentInput(firstOperand)
    }
    if (operation === '/') {
      calculator.displayOutput = ''
      currentInput(firstOperand)
      firstOperand = parseFloat(firstOperand) / parseFloat(secondOperand)
      calculator.displayOutput = ''
      secondOperand = ''
      currentInput(firstOperand)
    }
  } else {
    calcDisplay.displayOutput = ''
    operation = keyPressed.value
  }
}

function processEqualBtnPress () {
  calculator.displayOutput = ''
  calculate(firstOperand, operation, secondOperand)
}

function processMemoryBtnPress (e) {
  const memoryKey = e.target.value
  if (memoryKey === 'c') {
    clearCalculator()
  } else if (memoryKey === 'mc') {
    clearLS()
  } else if (memoryKey === 'm+') {
    // let number = calculator.displayOutput // keep
    // localStorage.clear()
    // number = firstOperand // keep
    // firstOperand = calculator.displayOutput
    // saveValue(number) // keep
    saveValue(computedValue)
    console.log(computedValue)
  } else if (memoryKey === 'mr') {
    getSavedValue()
  }
  // switch (memoryKey) {
  //   case 'c':
  //     console.log(`${memoryKey} pressed`)
  //     break
  //   case 'mc':
  //     console.log(`${memoryKey} pressed`)
  //     break
  //   case 'm+':
  //     console.log(`${memoryKey} pressed`)
  //     break
  // }
}

function clearCalculator () {
  calculator.displayOutput = '0'
  firstOperand = ''
  secondOperand = ''
  operation = ''
}

function saveValue (currentNumber) {
  let value = valueStorageHelper()
  value.push(currentNumber)
  value = currentNumber
  console.log(value)
  localStorage.setItem('value', JSON.stringify(value))
}

function getSavedValue () {
  const value = valueStorageHelper()
  // firstOperand = value
  computedValue = value
  // value.forEach(number => console.log(number))
  // value = computedValue
  // return currentInput(firstOperand) // keep
  return currentInput(computedValue)
}

function clearLS () {
  localStorage.clear()
  calculator.displayOutput = '0'
}

function currentInput (numbers) {
  calculator.displayOutput = calculator.displayOutput === '0' ? numbers : calculator.displayOutput += numbers
  // calculator.displayOutput += numbers // orig
  renderScreen()
}

function calculate (num1, operator, num2) {
  // let computedValue // original, keep
  if (operator === '*') {
    // computedValue = num1 * num2
    computedValue = parseFloat(num1) * parseFloat(num2)
    return currentInput(computedValue)
  } else if (operator === '/') {
    computedValue = parseFloat(num1) / parseFloat(num2)
    // computedValue = num1 / num2
    const isDecimal = (computedValue - Math.floor(computedValue)) !== 0

    return (isDecimal) ? currentInput(computedValue.toFixed(3)) : currentInput(computedValue)
  } else if (operator === '+') {
    computedValue = parseFloat(num1) + parseFloat(num2)
    // computedValue = num1 + num2
    return currentInput(computedValue)
  } else if (operator === '-') {
    computedValue = parseFloat(num1) - parseFloat(num2)
    // computedValue = num1 - num2
    return currentInput(computedValue)
  }
  // currentInput(num2)
}

function renderScreen () {
  calcDisplay.textContent = calculator.displayOutput
}

function valueStorageHelper () {
  const value = !JSON.parse(localStorage.getItem('value')) ? [] : JSON.parse(localStorage.getItem('value'))

  return value
}

/*
function calculator (num1, operator, num2) {
  return {
    '*': num1 * num2,
    '/': num1 / num2,
    '+': num1 + num2,
    '-': num1 - num2
  }[operator]
}
*/
