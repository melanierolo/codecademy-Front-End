/*1. The first problem to solve is determining how many hours of sleep you 
got each night of the week.*/
const getSleepHours = (day) => {
  day = day.toLowerCase();
  switch (day) {
    case "monday":
      return 8;
      break;
    case "tuesday":
      return 7;
      break;
    case "wednesday":
      return 5;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 6.5;
      break;
    case "saturday":
      return 7.5;
      break;
    case "sunday":
      return 5.5;
      break;
  }
};

//Test
console.log("Test01 -getSleepHours: ", getSleepHours("monDay"));
console.log("Test02 -getSleepHours: ", getSleepHours("Sunday"));

//The sum of each day of the week
const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

// the ideal sleep hours
const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
};

//Test the functions  getActualSleepHours() and getIdealSleepHours()
console.log("Test -getActualSleepHours : ", getActualSleepHours());
console.log(`Test -getIdealSleepHours: ${getIdealSleepHours()}`);

//It’s time to calculate sleep debt.

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got  the perfect amount of sleep");
  }
  if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got  " +
        (actualSleepHours - idealSleepHours) +
        " more sleep than needed."
    );
  }
  if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};

//start the program:

calculateSleepDebt();
