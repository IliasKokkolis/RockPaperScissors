const getUserChoice = userInput =>{
  userInput = userInput.toLowerCase();

  if(userInput==='rock'){
    return userInput;
  }else if (userInput==='paper'){
    return userInput;
  }else if(userInput==='scissors'){
    return userInput;
  }else if(userInput==='bomb'){
    return userInput;
  }else{
    console.log('Error!');
  }
  return userInput;
};

function getComputerChoice(){
  let randomNumber=Math.floor(Math.random()*3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};


function determineWinner(userChoice,computerChoice){
  if (userChoice===computerChoice){
    return 'The game is tie';
  };
  if (userChoice==='rock'){
    if(computerChoice==='paper'){
      return 'You Lost Epomenos!';
    }
    if(computerChoice==='scissors'){
      return 'You won paixtara!';
    }
  };
  if (userChoice==='paper'){
    if(computerChoice==='scissors'){
       return 'You Lost Epomenos!';
    }
    if(computerChoice==='rock'){
      return 'You won paixtara!';
    }
  }
  if (userChoice==='scissors'){
    if (computerChoice==='rock'){
       return 'You Lost Epomenos!';
    };
    if(computerChoice==='paper'){
      return 'You won paixtara!';
    }
  }

  if(userChoice==='bomb'){
       return 'You won paixtara!';
  }
};

const playGame = () => {
  const userChoice=getUserChoice('scissors');
  const computerChoice= getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('I played:' + computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();