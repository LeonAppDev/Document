
var DesignPattern = require('./DesignPattern') || {};

DesignPattern.Factory = ()=>{


var bitCoinTrans = function ()
{

 var getTotalForJohn = getTotal;

 getTotalForJohn(1);

}

/* @param number userId
   @return
Print a string Total assets of John is 1000 coins*/
var getTotal = (userId) =>{

 if(1==userId)
 {
   console.log('Total assets of John is 1000 coins');
 }
 var test = new Exception();
 console.log(typeof test);

}

return bitCoinTrans;

}


var bitCoinTrans = DesignPattern.Factory();

bitCoinTrans();
