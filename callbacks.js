// function add (num1, num2) {
//    answer = num1 + num2
//    return answer
// }

// function subtract (num1, num2) {
//     answer = num1 - num2
//     return answer
// }

// // console.log(add(2,2))
// // console.log(subtract(20,10))


// const addArrow = (num1, num2) => {
//     let answer = num1 + num2
//     return answer}

// const subtractArrow = (num1, num2) => {
//     let answer = num1 - num2
//     return answer}

// const addConcise = (num1,num2) => num1 + num2
// const subtractConcise = (num1, num2) => num1 - num2

// // console.log(addArrow(2,2))
// // console.log(subtractArrow(20,10))

// const calculator = (num1, num2, cb) => cb(num1, num2)

// console.log(calculator(2,2,add))

function applyPercent (price, percent){
    let total = price - (price*(percent*.01))
    return total
}

function applyFlatRate(price, flatrate){
    let total = price - flatrate
    return total
}

const percentCoupon = (price,couponAmt) => {return price - (price*(couponAmt*.01))}



let products = [
    {item: 'banana',
    price: 1,
    onsale: TRUE
},
{
    item: 'steak',
    price: 10,
    onsale: FALSE
},
{
    item: 'eggs',
    price: 2,
    onsale: TRUE
},
{
    item: 'milk',
    price: 3,
    onsale: TRUE
},
{
    item: 'oreos',
    price: 4,
    onsale: FALSE
}
]


const discount = (currentPrice, discountAmount, discountType) => {
    return discountType(currentPrice, discountAmount)}


console.log(discount(10,25,applyPercent))
console.log(discount(20,5,applyFlatRate))
console.log(discount(50,5,percentCoupon))


