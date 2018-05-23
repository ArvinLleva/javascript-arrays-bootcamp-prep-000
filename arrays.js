var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
return [element,...array] // the ... is the spread operator
}

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(){
  
}

function destructivelyAddElementToEndOfArray(){
  
}