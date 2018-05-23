var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
return [element,...array] // the ... is the spread operator which spreads out the arrays contents
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return array.shift(element)
}

function destructivelyAddElementToEndOfArray(){
  return [...array, element]
}
