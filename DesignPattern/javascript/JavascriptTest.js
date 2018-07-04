var regTest = ()=>
{
  var reg = RegExp('ab.|[ab].','g');
  var test  = 'abcccdfe';

  var result = reg.exec(test);
  result.map(x=>x);
  console.log(result);
 /* console.log(reg.lastIndex);
  reg.test(test);
  console.log(reg.lastIndex);
  reg.test(test);
  console.log(reg.lastIndex);
*/
  var test2 = '        apple     ';

   result2= test2.replace(/(?:^|\s)apple(?!\S)/g,'e');
  console.log(result2);

}

function* generatorTest()
{

   yield 'first';
   console.log('step1');
   yield 'second';
   console.log('step2');
   yield 'third';
   console.log('step3');


}

function deleteOperation()
{
    var myJSON={
      "ircEvent":"privMsg",
      "method":"newURI",
      "regEx":"http://.*",
    }

   delete myJSON.regEx;
   console.log(myJSON)
}

function getLines()
{
    var text = 'test1\
                test2\
                 test3\
                 test4'

    var lineNumber = text.split(/\r\n\|\n\|\r/).length;

    console.log(lineNumber);
}

String.prototype.positionF = function(suffix)
{

  return (this.indexOf(suffix, this.length-suffix.length)!==-1);
};

function stringCase()
{
    var b='a';

    var result = b.toUpperCase()+'b'+'b'.toUpperCase()+'C'['toLowerCase']();

    console.log(result);

}

String.prototype.repeat = function(count){

while(count){ console.log(count&1); count>>=1;}

};


function regIgnoreCase()
{

   var someText = 'Javascript1.2';
   var pattern = /(\w+)(\d)\.(\d)/i;
   var outCome = pattern.exec(someText);
   console.log(outCome);
   console.log(pattern.ignoreCase);
}

function objectTest()
{
    var object0 = {};

    Object.defineProperty(object0,"prop0",{value:1,enumerable:false, configuration:true});
    Object.defineProperty(object0,"prop1",{value:2,enumerable:true, configuration:false});
    Object.defineProperty(object0,"prop2",{value:3});
    object0.prop3 = 4;

    for (var prop in object0)
    {
      console.log(prop);
    }

    delete object0.prop0;
    delete object0.prop1;
    delete object0.prop2;
    delete object0.prop3;

    console.log(object0);
}

function testNull()
{

  var object = null;
  console.log(typeof object);
  console.log(typeof test);
}


function execSeq(val1)
{

    console.log(val1);

    return (val2)=>{console.log(val2)};

}

function thisTest()
{

  var arguments = [1,2,3];
  var arr = ()=>arguments[0];

  console.log(arr());


  function foo(n)
  {
        var f = (a)=>arguments[0]+n

        return f(41);

  }

  console.log(foo(2));

  function foo2(n)
  {
         var f = (...args)=>args[0]+n

         return f;

  }



  console.log(foo2(2)(1234));

}




var assignFunctionTest = function()
{
   var err=console.log;
   return this;

}; // Remember ; here is important since this is a assignment statement, javascript interpreter could not correctly figure out two different lines without ";" 
// if next line begins with a parenthese

//
//var assignFunctionTest = assignFunctionTest;


(function()
{

//regTest();
/*var g = generatorTest();
console.log(g.next().value);
console.log(g.next().value);
*/

//deleteOperation();

//console.log('It\'\s "game" time');
//getLines();

/*var s='Stringteststst';
console.log(s.positionF('tst'));
*/

//stringCase();
/*
var s = 'testststt';
s.repeat(13);*/

//regIgnoreCase();

//objectTest();
//testNull();

//ecSeq("I am val1")("I am val2");

//isTest();
//var a = assignFunctionTest();
//console.log(a===this);
var a = assignFunctionTest();

console.log(a===this);

})()
