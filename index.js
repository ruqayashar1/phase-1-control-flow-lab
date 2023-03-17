function scuberGreetingForFeet(feet){
  
  let price=20;
   if (feet < 401){
     return'This one is on me!';
  }
    else if (feet>2000 && feet<2501){
    return'I will gladly take your thirty bucks.';
  
  }
  else if(feet>=2501){
    return'No can do.';
  }
  else
  return`${price}`;
}

function ternaryCheckCity(city){
  let NYC;
 return city==="NYC"?"Ok, sounds good."
 :"No go.";

}

function switchOnCharmFromTip(Tip){
  switch(Tip){
    case "generous":return "Thank you so much.";
    case "not as generous":return "Thank you.";
    default: return "Bye.";
  }
 
}