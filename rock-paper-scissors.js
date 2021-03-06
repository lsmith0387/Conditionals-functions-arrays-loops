const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ? userInput : console.log('invalid input');
  }
  
  function getComputerChoice (){
    const compNum = Math.floor(Math.random()*3)
    switch (compNum){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function determineWinner (userChoice,computerChoice){
    if (userChoice === computerChoice){
      return 'It\'s a tie!';
    }else if (userChoice==='rock'){
      if (computerChoice==='paper'){
        return 'Computer wins!';
      }else{
        return 'User wins!';
      }
    }else if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Computer wins!';
      }else{
        return 'User wins!';
      }
    }else if (userChoice==='scissors'){
      if(computerChoice==='rock'){
        return 'Computer wins!';
      }else{
        return 'User wins!';
      }
    }
  }
  
  function playGame(){
    const userChoice = getUserChoice('Rock');
    const computerChoice = getComputerChoice();
    console.log('User: ' + userChoice);
    console.log('Computer: ' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  }
  
  playGame();