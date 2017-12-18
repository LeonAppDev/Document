
var DesignPattern = require('./DesignPattern') || {};

DesignPattern.Factory = ()=>{

var bitCoinTrans = function ()
{

 var getTotalForJohn = getTotal;

 getTotalForJohn(1);

}

var getTotal = (userId) =>{

 if(1==userId)
 {
   console.log('Total assets of John is 1000 coins');
 }

}

return bitCoinTrans;

}


var bitCoinTrans = DesignPattern.Factory();

bitCoinTrans();
