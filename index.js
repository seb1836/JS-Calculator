let result = '0'
let count = 0
let countOperator = 0
let checkSigne = false
let total = 0
let isSignAssigned = false
document.getElementById('inputOfCalculator').value = "0"

const addNumericEventListener = () => {
  for (let i = 0; i <= 9; i++) {
    document.getElementById(`button${i}`).addEventListener('click', function() {
      if (count === 0) {
        document.getElementById('inputOfCalculator').value = document.getElementById(`button${i}`).innerText
        ++count
      } else {
        document.getElementById('inputOfCalculator').value =
          document.getElementById('inputOfCalculator').value + document.getElementById(`button${i}`).innerText
      }
    })
  }
}

const addCleanEventListener = () => {
  document.getElementById('buttonC').addEventListener('click', function() {
    document.getElementById('inputOfCalculator').value = 0

    count = 0
    countOperator = 0
    checkSigne = false
    total = 0
  })
}

const addBackEventListener = () => {
  document.getElementById('back').addEventListener('click', function() {
    let myStringInput = document.getElementById('inputOfCalculator').value
    if (myStringInput.length > 1) {
      document.getElementById('inputOfCalculator').value = myStringInput.substr(0, myStringInput.length - 1)
    } else {
      myStringInput = '0'
      document.getElementById('inputOfCalculator').value = myStringInput.substr(myStringInput.length - 1, 0)
    }
  })
}

const resultOperator = isSignAssigned => {
  if (checkSigne === '+') {
    total = total + parseInt(document.getElementById('inputOfCalculator').value, 10)
    document.getElementById('inputOfCalculator').value = total.toString()
    result = ''
    checkSigne = false
    if (isSignAssigned === false) {
      checkSigne = false
    }
  } else if (checkSigne === '-') {
    total = total - parseInt(document.getElementById('inputOfCalculator').value, 10)
    document.getElementById('inputOfCalculator').value = total.toString()
    result = ''
    checkSigne = false
    if (isSignAssigned === false) {
      checkSigne = false
    }
  } else if (checkSigne === '*') {
    total = total * parseInt(document.getElementById('inputOfCalculator').value, 10)
    document.getElementById('inputOfCalculator').value = total.toString()
    result = ''
    checkSigne = false
    if (isSignAssigned === false) {
      checkSigne = false
    }
  } else if (checkSigne === '/') {
    total = total / parseInt(document.getElementById('inputOfCalculator').value, 10)
    document.getElementById('inputOfCalculator').value = total.toString()
    result = ''
    checkSigne = false
    if (isSignAssigned === false) {
      checkSigne = false
    }
  }
}

const addEventListennerOnResultOperator = () => {
  document.getElementById('result').addEventListener('click', resultOperator)
}

const addOperator = () => {
  if (checkSigne === false) {
    total = parseInt(document.getElementById('inputOfCalculator').value, 10)
    countOperator++
    document.getElementById('inputOfCalculator').value = ''
    result = ''
    checkSigne = '+'
  } else if (checkSigne !== false) {
    isSignAssigned = true
    resultOperator(isSignAssigned)
    checkSigne = '+'
  } else if (countOperator >= 1) {
    document.getElementById('inputOfCalculator').value = '0'
    total = total + parseInt(document.getElementById('inputOfCalculator').value, 10)
    result = ''
    checkSigne = '+'
  }
}

const subtractOperator = () => {
  if (checkSigne === false) {
    total = parseInt(document.getElementById('inputOfCalculator').value, 10)
    countOperator++
    document.getElementById('inputOfCalculator').value = ''
    result = ''
    checkSigne = '-'
  } else if (checkSigne !== false) {
    isSignAssigned = true
    resultOperator(isSignAssigned)
    checkSigne = '-'
  } else if (countOperator >= 1) {
    document.getElementById('inputOfCalculator').value = '0'
    total = total - parseInt(document.getElementById('inputOfCalculator').value, 10)
    result = ''
    checkSigne = '-'
  }
}

const multiplyOperator = () => {
  if (checkSigne === false) {
    total = parseInt(document.getElementById('inputOfCalculator').value, 10)
    countOperator++
    document.getElementById('inputOfCalculator').value = ''
    result = ''
    checkSigne = '*'
  } else if (checkSigne !== false) {
    isSignAssigned = true
    resultOperator(isSignAssigned)
    checkSigne = '*'
  } else if (countOperator >= 1) {
    document.getElementById('inputOfCalculator').value = '0'
    total = total * parseInt(document.getElementById('inputOfCalculator').value, 10)
    result = ''
    checkSigne = ''
  }
}

const divideOperator = () => {
  if (checkSigne === false) {
    total = parseInt(document.getElementById('inputOfCalculator').value, 10)
    countOperator++
    document.getElementById('inputOfCalculator').value = ''
    result = ''
    checkSigne = '/'
  } else if (checkSigne !== false) {
    isSignAssigned = true
    resultOperator(isSignAssigned)
    checkSigne = '/'
  } else if (countOperator >= 1) {
    document.getElementById('inputOfCalculator').value = '0'
    total = total / parseInt(document.getElementById('inputOfCalculator').value, 10)
    result = ''
    checkSigne = ''
  }
}

const addEventListenerOnSubstractOperator = () => {
  document.getElementById('subtract').addEventListener('click', subtractOperator)
}

const addEventListennerOnAddOperator = () => {
  document.getElementById('add').addEventListener('click', addOperator)
}

const addEventListenersOnMultiplyOperator = () => {
  document.getElementById('multiply').addEventListener('click', multiplyOperator)
}

const addEventListenersOnDivideOperator = () => {
  document.getElementById('divide').addEventListener('click', divideOperator)
}

const addEventListeners = () => {
  addEventListennerOnResultOperator()
  addEventListennerOnAddOperator()
  addCleanEventListener()
  addNumericEventListener()
  addBackEventListener()
  addEventListenerOnSubstractOperator()
  addEventListenersOnMultiplyOperator()
  addEventListenersOnDivideOperator()
}

addEventListeners()
