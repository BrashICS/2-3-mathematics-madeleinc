/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)

// ***  Your code goes below  ***

// converting celsius to fahrenheit
let celsius = 100
let fahrenheit = 0
celsius = celsius + 2
fahrenheit = (celsius * 9/5) + 32
console.log(fahrenheit)

// converting fahrenheit to celsius
fahrenheit = 77
celsius = (fahrenheit - 32) * 5/9
console.log(celsius)

// creating sentences
console.log(`${fahrenheit} degrees fahrenheit is ${celsius} degrees celsius.`)

// finding slopes
let m = (0 - 5) / (6 - -4)
console.log(m)

// randomizing the volume of a cylinder
let cylinder_radius = Math.random() * 10 **2
let cylinder_height = Math.random() * 10
let cylinder_volume = Math.PI * cylinder_radius * cylinder_height
cylinder_volume = Math.round(cylinder_volume)
console.log(`the volume of my cylinder is ${cylinder_volume}.`)
