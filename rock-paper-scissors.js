const getUserChoice = userInput => {
 userInput = userInput.toLowerCase(); 
 if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
   return userInput;
 }else {
   console.log('An error occured. Type rock, paper, or scissors');
 }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice===computerChoice) {
    return 'The game is a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer has won!';
    } else {
  return 'Congrats! You won!';
  }
} 
if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, computer has won!';
    } else {
  return 'Congrats! You won!';
  }
} 
if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, computer has won!';
    } else {
  return 'Congrats! You won!';
  }
}
};
/*
console.log(determineWinner('rock', 'scissors'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('rock', 'rock'));
*/

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`You threw: ${userChoice}`); 
  console.log(`The computer threw: ${computerChoice}`);
  console.log (determineWinner(userChoice, computerChoice));
};

playGame();
