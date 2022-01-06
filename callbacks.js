function add (num1, num2) {
   answer = num1 + num2
   return answer
}

function subtract (num1, num2) {
    answer = num1 - num2
    return answer
}

// console.log(add(2,2))
// console.log(subtract(20,10))


const addArrow = (num1, num2) => {
    let answer = num1 + num2
    return answer}

const subtractArrow = (num1, num2) => {
    let answer = num1 - num2
    return answer}

const addConcise = (num1,num2) => num1 + num2
const subtractConcise = (num1, num2) => num1 - num2

// console.log(addArrow(2,2))
// console.log(subtractArrow(20,10))

const calculator = (num1, num2, cb) => cb(num1, num2)

console.log(calculator(2,2,add))

