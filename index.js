
  
  let result ;
  function scuberGreetingForFeet( rate){
  // Write your code here!
  if(rate<=400){
   return'This one is on me!';}
    else if(rate>400 && rate<2000){
      return'That will be twenty bucks.';}
     else if(rate>2000 && rate <=2500){
      return'I will gladly take your thirty bucks.'
    }
    else if(rate>2500)
    { return'No can do.'}
  }


function ternaryCheckCity(city){
  // Write your code here!
  if (city==='NYC'){
    return 'Ok, sounds good.';
  }
  else if(city!=='NYC') {return 'No go.';}
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.'
      
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
  
    default: return 'Bye.'
      break;
  }
}