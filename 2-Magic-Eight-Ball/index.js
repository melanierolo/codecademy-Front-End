// Username
let userName = "Melanie";
userName ? console.log(`Hello,${userName}`) : console.log("Hello!");

//The question the user wants to ask the Magic Eight Ball
const userQuestion = "Will I travel to Europe in the next year?";
console.log(`The question of ${userName} is: ${userQuestion}`);

//Generate a random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

//control flow and here are 8 phrases
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}
// Print the Magic Eight Ball’s answer
console.log(`The Magic Eight Ball says: ${eightBall}`);
