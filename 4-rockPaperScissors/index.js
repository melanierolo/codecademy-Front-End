/*1. The user should be able to choose ‘rock’, ‘paper’, or ‘scissors’ 
when the game starts.
 */
/* 2. Since a user can pass in a parameter, such as ‘Rock’ or ‘rock’ 
with different capitalizations*/

/* 3. When getting the user’s choice, you should also check to make sure 
that the user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.*/

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!. Please enter rock, paper or scissors");
  }
};

/* 4. Test the function by calling it with valid and invalid input, and 
printing the results to the console.
You can delete this when you know your function works.*/
//Test
console.log("Test01 - user choice :", getUserChoice("dasdasd"));
console.log("Test02 - user choice :", getUserChoice("RoCk"));
/*  5. Now we need to have the computer make a choice.*/
const getComputerChoice = () => {
  const gameChoice = Math.floor(Math.random() * 3);
  switch (gameChoice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};
/* 6. Test the function by calling it multiple times and printing the results to the console.
You can delete this when you know your function works. */
console.log("Test01 computer choice", getComputerChoice());
console.log("Test02 computer choice", getComputerChoice());
console.log("Test03 computer choice", getComputerChoice());

/* 7. Now it’s time to determine a winner. Create a function named determineWinner that takes 
two parameters named userChoice and  computerChoice. */
/* 8. If the game is not a tie, you’ll need to determine a winner.
Begin by writing an if statement that checks if the userChoice is 'rock'.*/
/* 9. Next, write another if statement for if the userChoice is 'paper'.*/
/* 10. Next, write yet another if statement for if the userChoice is 'scissors'. */

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game was a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry :(, The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "Sorry :(, The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Sorry :(, The computer won!";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "bomb") {
    return "You won :)!";
  }
};

/*  11. Don’t forget to test your function!.  Check off this task when 
you’ve finished testing.*/
console.log(
  "test01 determineWinner : ",
  determineWinner(getUserChoice("Rock"), "scissors")
);
console.log(
  "test02 determineWinner:",
  determineWinner(getUserChoice("paper"), "rock")
);

/*12. Everything is set up. Now you need to start the game and log the results.
Create a function named playGame.*/
/* 13. Finally, let’s determine who won.Inside the playGame() function, call the 
determineWinner() function.*/

const playGame = () => {
  const userChoice = getUserChoice("PAper");
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`);
  console.log("The computer threw:" + computerChoice);
  console.log(
    `Results of the Game :${determineWinner(userChoice, computerChoice)} `
  );
};

playGame();

/* 14. Make this game better by adding a secret cheat code. If a user types 'bomb' 
as their choice, then make sure they win, no matter what. */
