// We set constant value for kelvin which is 293.
const kelvin = 293;

//Convert Kelvin to Celsius formula
const celsius = kelvin - 173;

//Celsius to Fahrenheit formula
let fahrenheit = celsius * (9 / 5) + 32;
// By using the .floor() method from the built-in Math object to round down the Fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

// Calculations:
console.log(`The current temprature is ${fahrenheit} degrees fehrenheit.`);

//Newton scale
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The current temprature is ${newton} degrees newton.`);
