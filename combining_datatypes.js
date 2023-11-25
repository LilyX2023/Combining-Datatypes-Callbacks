const crayonBox = {
    colors: ["red", "blue", "green", "cyan", "purple"]
}
// Log one of the elements of the array
console.log(crayonBox.colors[1])

const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}
//Log one of the properties of the inner object cap
console.log(bottle.cap.color);


const receipt = [
    {
        name: 'Coffee',
        price: 2.70
    },
    {
        name: 'bagel',
        price: 8.00
    },
    {
        name: 'donut',
        price: 3.00
    }
]
//Log one of the properties of that inner object.
console.log(receipt[1].name);

const apartmentBuilding = [
    ['Olivia','Liam','Sophia','Noah']
]
//Log one of the elements of the inner array
console.log(apartmentBuilding[0][1])

/////////////////////////////////////////////////////

const knit = () => {
    // Return an object with properties
    return {
        item: 'scarf',
        size: '6ft'
    };
}

// Log a value of the returned 
console.log(knit().size)

const crayonSelector = () => {
    return {
        colors: ["red", "blue", "green", "cyan", "purple"]
    }
}
//Log one of the elements of that array.
console.log(crayonSelector().colors[2])

const powerButton = () => {
    return option = () => {
        console.log("Select a song.")
    }
}
powerButton()()

///////////////////////////////////////////////////

//Model a Vending Machine
// a vending machine is an object
// it has an array of snacks (make 3 snacks)
// snacks are objects that have a name and a price
// a vending machine has a function vend that allows user to enter the array position (a number) of the snack and then that snack will be returned
// Be able to call vendingMachine.vend() with a valid integer to return a snack

const vendingMachine = {
    snacks: [
        {
            name: 'Coffee',
            price: 2.70
        },
        {
            name: 'bagel',
            price: 8.00
        },
        {
            name: 'donut',
            price: 3.00
        }
    ],
    vend : (itemNum)=> {
        if (itemNum >=0 && itemNum < vendingMachine.snacks.length) {
            return vendingMachine.snacks[itemNum];//why can't I write this.snacks[itemNum]??
        } else {
            console.log('Sorry, the item# you entered does not exist. Please enter again')
        }
    }
}
console.log(vendingMachine.vend(0));

////////////////////////////////////////////////////////

//Make a function add that takes two arguments (numbers) and sums them together
const add = (num1, num2) => {
    return num1 + num2
}
// Make a function subtract that takes two arguments (numbers) and subtracts them
const sub = (num1, num2) => {
    return num1 - num2
}
// Make a function multiply that takes two arguments and multiplies them
const times = (num1, num2) => {
    return num1 * num2
}
// Make a function divide that takes two arguments and divides them
const divide = (num1 , num2) => {
    if (num2 !== 0) {
        return num1 / num2
    } else {
        return 'Invalid entry'
    }
    
}
// Make a function calculate that takes three arguments. Assume the two arguments are a number ie num1, num2 and a function called operates (a callback).
const calculate = (num1 , num2, operates) =>{
    return operates (num1,num2)
}
// Make it so that when calculate is invoked, the callback "operates" on the numbers and returns the value.
// Call calculate 4 times, each time using one of the operation functions you wrote

// Example usage of the calculate function with different operations
console.log(calculate(4, 5, add));      
console.log(calculate(4, 5, sub)); 
console.log(calculate(4, 5, times)); 
console.log(calculate(4, 5, divide));

//////////////////////////////////////////////////////////

//Function definition placement

const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

//Error reading

// foo();

// const foo ()=>{
//     console.log('hi');
// }

// The code above have two errors:
//1) The syntax error. It should be const foo = () => {}
//2) The function is also declared before the function expression. Function expression is not hoisted. 

////////////////////////////////////////////////////

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

// Every
// Determine if every number is greater than or equal to 0
let everyOver0 = nums.every(v => v >= 0)
console.log(everyOver0)
// determine if every word shorter than 8 characters
let everyless8 = panagram.every(v => v.length < 8)
console.log(everyless8)

// Filter
// filter the array for numbers less than 4
let numberLess4 = nums.filter(v => v < 4)
console.log(numberLess4)
// filter words that have an even length
let wordsEven = panagram.filter(v => v.length % 2 ===0)
console.log(wordsEven)

// Find
// Find the first value divisible by 5
let numDivisibleBy5 = nums.find(v=>v%5 === 0)
console.log(numDivisibleBy5)
// find the first word that is longer than 5 characters
let wordLonger5 = panagram.find(v => v.length > 5)
console.log(wordLonger5)//undefined

// Find Index
// find the index of the first number that is divisible by 3
let numDivisibleBy3 = nums.findIndex(v=>v%3 === 0)
console.log(nums[numDivisibleBy3])
// find the index of the first word that is less than 2 characters long
let wordLess2 = panagram.findIndex(v=>v.length < 2)
console.log(panagram[wordLess2])//undefined

// For Each
// console.log each value of the nums array multiplied by 3
nums.forEach (v=> {
    let multipiedBy3 = v * 3
    console.log(multipiedBy3)
})
// console.log each word with an exclamation point at the end of it
panagram.forEach (v=>{
    v = v + "!"
    console.log(v)
})

// Thought Questions
// What happened to the original array?
// Each element in the original array got lopped thru and modified
// Can you store the values from a forEach method in a new array?
// YES
let newArray = []
panagram.forEach (v=>{
    v = v + "!"
    newArray.push(v)
})
console.log(newArray)


// Map
// make a new array of each number multiplied by 100
let multipliedBy100 = nums.map(v => v * 100)
console.log(multipliedBy100)

// make a new array of all the words in all uppercase
const uppercaseWords = panagram.map(v => v.toUpperCase())
console.log(uppercaseWords)

// Thought Questions

// What happened to the original array?
//The map method doesn't modify the original array. It creates and returns a new array with the results of applying the provided function to each element of the original array.
// Can you store the values from a map method in a new array?
// yes. It got stored in the uppercaseWords

// Some
// Find out if some numbers are divisible by 7
let numDivisibleBy7 = nums.some(v => v % 7 === 0)
console.log(numDivisibleBy7)
// Find out if some words have the letter a in them
let wordHaveA = panagram.some(v => v.includes('a'))
console.log(wordHaveA)

