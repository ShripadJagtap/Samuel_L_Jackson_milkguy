/*Samuel L Jackson as the guy who buys me milk
Just run this in your browser using ctrl+shift+J and copy paste the code below

the first prompt is the amount of money you give to buy milk
The price of per bottle of milk is 1.5 
so her responds with the bottles of milk he buys and the change he has if any*/

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