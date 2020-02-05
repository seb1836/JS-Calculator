let numbers = []
document.getElementById('inputOfCalculator').value = ''

const addNumericEventListener = () => {
  for (let i = 0; i <= 9; i++) {
    const currentButton = document.getElementById(`button${i}`)
    currentButton.addEventListener('click', function() {
      if (document.getElementById('inputOfCalculator').value.length < 1) {
        document.getElementById('inputOfCalculator').value = currentButton.innerText
      } else {
        document.getElementById('inputOfCalculator').value += currentButton.innerText
      }
    })
  }
}

const recordEntry = innersign => {
  if (innersign === '--' || innersign === 'C') {
    deleteOrClean(innersign)
  } else if (innersign === '=') {
    calculateResult()
  } else if (innersign === '+' || innersign === '-' || innersign === '*' || innersign === '/') {
    addEntryIntoNumbersArray(innersign)
  }
}

const deleteOrClean = innersign => {
  if (innersign === '--') {
    deleteNumber()
  } else if (innersign === 'C') {
    cleanCalculator()
  }
}

const deleteNumber = () => {
  let myStringInput = document.getElementById('inputOfCalculator').value
  if (myStringInput.length > 1) {
    document.getElementById('inputOfCalculator').value = myStringInput.substr(0, myStringInput.length - 1)
  } else {
    myStringInput = '0'
    document.getElementById('inputOfCalculator').value = myStringInput.substr(myStringInput.length - 1, 0)
  }
}

const cleanCalculator = () => {
  document.getElementById('inputOfCalculator').value = ''
  numbers = []
}

const addEntryIntoNumbersArray = innersign => {
  numbers.push(parseInt(document.getElementById('inputOfCalculator').value, 10))
  document.getElementById('inputOfCalculator').value = ''
  numbers.push(innersign)
}

const calculateResult = () => {
  numbers[numbers.length] = document.getElementById('inputOfCalculator').value
  const numbersArrayIntoString = numbers.toString()
  const stringWitheoutComa = numbersArrayIntoString.replace(/,/g, '')
  document.getElementById('inputOfCalculator').value = eval(stringWitheoutComa)
  numbers=[]
}

const addEventListeners = () => {
  const operators = document.getElementsByClassName('operator')
  for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', event => recordEntry(event.target.innerHTML))
  }
  addNumericEventListener()
}

addEventListeners()





