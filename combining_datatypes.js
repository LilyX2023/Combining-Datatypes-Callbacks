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

