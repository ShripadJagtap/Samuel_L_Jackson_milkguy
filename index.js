/*Samuel L Jackson as the guy who buys me milk*/

function getMilk(money) {   
    console.log("leaveHouse");
    var bottles = Math.floor(money/1.5);
    alert( "I got " + bottles + " fucking bottles of milk" );
    console.log("enterHouse");
    return money % 1.5;
  }
  
  var money = prompt("Give me the money Motherfucker!");
  var change = getMilk(money);
  if (change == 0){
  alert("The fuck you looking at!? There is no change bitch I spent it all on the goddamn milk");
  }
  else{
  alert("and keep your shitty " + change + " dollars of change motherfucker, I don't need it");
  }