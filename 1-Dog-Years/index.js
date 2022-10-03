//My age and my name
const myAge = 20;
const myName = "Melanie";

//The first two years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;

let laterYears = myAge - 2;

/*In a dog's life each year following equates to 4 dog years.So, multiply the 
laterYears variable by 4 to calculate the number of dog years accounted for 
by your later years. */
laterYears *= 4;

//Print earlyYears and laterYears
console.log("Early years:" + earlyYears, "later years:" + laterYears);

//Age in dog years
let myAgeInDogYears = earlyYears + laterYears;

//Displays a name and age in dog year
console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
