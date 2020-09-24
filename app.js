const calcDisplay = document.querySelector('.calculator-display')
const calculator = {
  displayOutput: '' // orig
  // displayOutput: '0'
}
let firstOperand = ''
let secondOperand = ''
let operation = ''
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

    // if (operation) {
    //   if (operation === '+') {
    //     calculator.displayOutput = ''
    //     currentInput(firstOperand)
    //     firstOperand = parseFloat(firstOperand) + parseFloat(secondOperand)
    //     calculator.displayOutput = ''
    //     secondOperand = ''
    //     currentInput(firstOperand)
    //   }
    //   if (operation === '-') {
    //     calculator.displayOutput = ''
    //     currentInput(firstOperand)
    //     firstOperand = parseFloat(firstOperand) - parseFloat(secondOperand)
    //     calculator.displayOutput = ''
    //     secondOperand = ''
    //     currentInput(firstOperand)
    //   }
    //   if (operation === '*') {
    //     calculator.displayOutput = ''
    //     currentInput(firstOperand)
    //     firstOperand = parseFloat(firstOperand) * parseFloat(secondOperand)
    //     calculator.displayOutput = ''
    //     secondOperand = ''
    //     currentInput(firstOperand)
    //   }
    //   if (operation === '/') {
    //     calculator.displayOutput = ''
    //     currentInput(firstOperand)
    //     firstOperand = parseFloat(firstOperand) / parseFloat(secondOperand)
    //     calculator.displayOutput = ''
    //     secondOperand = ''
    //     currentInput(firstOperand)
    //   }
    // } else {
    //   calcDisplay.displayOutput = ''
    //   operation = keyPressed.value
    // }
  }
  if (keyPressed.value === '=') {
    // calculator.displayOutput = ''
    // calculate(firstOperand, operation, secondOperand)
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
    console.log(`${memoryKey} pressed`)
  } else if (memoryKey === 'm+') {
    saveValue()
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

function saveValue () {
  const storedValue = valueStorageHelper()
}

function currentInput (numbers) {
  calculator.displayOutput = calculator.displayOutput === '0' ? numbers : calculator.displayOutput += numbers
  // calculator.displayOutput += numbers // orig
  renderScreen()
}

function calculate (num1, operator, num2) {
  let computedValue
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
