
var DesignPattern = require('./DesignPattern') || {};

DesignPattern.Factory = ()=>{


var bitCoinTrans = function ()
{

 var getTotalBitCoin = getTotal(1);
 getTotalBitCoin.print();
 getTotalBitCoin.increase();
 getTotalBitCoin.print();


}

var liteCoinTrans = function ()
{

 var getTotalLiteCoin = getTotal(2);

  getTotalLiteCoin.print();
  getTotalLiteCoin.increase();
  getTotalLiteCoin.print();
}
/* @param number userId
   @return
Print a string Total assets of John is 1000 coins*/
var getTotal = {

// intialCoin:1;
 //totalCoin:intialCoin;

print:function print()
{
 switch (coinId)
 {
   case 1:
   console.log('Total assets of bitcoin is '+totalCoin+' coin(s)');
   break;
   case 2 :
   console.log('Total assets of litecoin is '+totalCoin+' coin(s)');
   break;
   default:
   break;
 }
}

 increase:function increase()
 {

    totalCoin++;

 }

 /*var test = new Exception();
 console.log(typeof test);
*/
}

return bitCoinTrans;

}


var bitCoinTrans = DesignPattern.Factory();
bitCoinTrans();
