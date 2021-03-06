function getSleepHours (day){
    day = day.toLowerCase()
    switch(day){
      case 'monday':
        return 6.5;
      case 'tuesday':
        return 7.5;
      case 'wednesday':
        return 9.5;
      case 'thursday':
        return 7;
      case 'friday':
        return 7.25;
      case 'saturday':
        return 8;
      case 'sunday':
        return 7.7;
      default:
        console.log('Invalid day, please input a day Monday-Sunday.')
    }
  }
  
  function getActualSleepHours(){
    sum = getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours  ('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
    return sum;
  }
  
  function getIdealSleepHours(idealHours){
    return idealHours*7;
  }
  
  const calculateSleepDebt = (idealHours) => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(idealHours);
    const sleepDebtHours = Math.floor(Math.abs(idealSleepHours-actualSleepHours));
    const sleepDebtMin = Math.round(((60*(Math.abs(idealSleepHours-actualSleepHours)-sleepDebtHours)) + Number.EPSILON)*100)/100;
    const sleepDebt = sleepDebtHours + 'hrs & ' + sleepDebtMin + 'min';
    if (actualSleepHours === idealSleepHours){
      console.log('You got the perfect amount of sleep!');
    }else if(actualSleepHours > idealSleepHours){
      console.log('You got more sleep than needed!');
      console.log('You are '+ sleepDebt +' over your target.');
    }else{
      console.log('You should get some rest!');
      console.log('You are '+ sleepDebt +' under your target.');
    }
  }
  
  
  calculateSleepDebt(8);