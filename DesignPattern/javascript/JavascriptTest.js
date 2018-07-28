'use strict'

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

 /* var arguments = [1,2,3];
  var arr = ()=>arguments[0];

  console.log(arr());


  function foo(n)
  {
        var f = (a)=>arguments[0]+n

        return f(41);

  }
*/
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

// A test process for node js event loop
/*const fs = require('fs');

function asyncOperation(callback){
    
  fs.readFile(__dirname+'/The Waikato Artisan Foodie Tour.docx',callback);
}

let timeoutScheculed = Date.now();
//let fileReadTime = 0;

setTimeout(function() {
      
       let delay = Date.now()-timeoutScheculed;
       console.log("It takes "+delay);

},100);


asyncOperation(()=>{
                   
     let callBackStartTime = Date.now();
     let fileReadTime = callBackStartTime-timeoutScheculed;
     console.log("Read file takes "+fileReadTime);
    
     while(Date.now()-callBackStartTime<10)
     {}
});
*/
function loopEventTest(){

  setTimeout(()=>{
    console.log("setTimeOut1");
  },0);

  setImmediate(()=>{
      console.log("setImmediate1");
  }
);

const fs = require("fs");

fs.readFile(__dirname+'/The Waikato Artisan Foodie Tour.docx',()=>{
        
        setTimeout(()=>{
           console.log("setTimeout2");
        },0);

        setImmediate(()=>{
            console.log("setImmediate2");
        });
        

});


 Promise.resolve().then(()=>{
          console.log('resolve1');
     }
 );

 process.nextTick(()=>{
  console.log('tick1');

  process.nextTick(()=>{
    console.log('tick2');
  });
 }
  );

 Promise.resolve().then(()=>{
  console.log('resolve2');
 });

 process.nextTick(()=>{

  console.log('tick3');
 });
  
}

let prototypeTest = function (){
      

        let Foo = function(name)
        {
          this.name=name;

          this.printName = ()=>{

            console.log(this.name);
          };


        };

        /*Foo.prototype.printName = ()=> {
           
           console.log(name);
        };
*/
        let foo1 = new Foo('Leon');
        let foo2 = new Foo('Bill');
         
        foo1.say = function(){
          console.log('My name is '+this.name);
        };

      
      
        let printName1 = foo1.printName;
        printName1(); 
        foo1.say();
        foo2.printName();
        console.log(foo1 === foo2);
        console.log(foo1.__proto__ === foo2.__proto__);

};


function promiseEmulate(){

      let p = new PromiseTest(function(resolve){

                console.log('execute promise');
                setTimeout(function(){resolve(31231);},1000);
               //resolve(31231);

      });


      function PromiseTest(fn)
      {
            
              let callbacks = [];

            
              
              this.then = function (callback){
                     
                            
                     if(typeof callback==='function')
                      {
                        callbacks.push(callback);
                        
                      }
                       console.log('then');
                       
                       return this;
                       //Here you should return this or a new promise which has a new async call
                      
              };

              function resolve(value)
              {    
                   
                   
                   setTimeout(function(){
                    
                     //callbacks.forEach(function(callback){callback(value)});
                     let isBreak = false;
                     let func;
                     let rt;
                     for(let i=0;i<callbacks.length;i++)
                     {
                              func = callbacks[i];
                              //func(value);
                              rt = func(value);
                            
                              if(typeof rt ==='object'&&PromiseTest.prototype.isPrototypeOf(rt))
                              {
                                 console.log('Add another Promise');
                                for(let j=i+1;j<callbacks.length;++j)
                                {
                                  let leftcall = callbacks[j];
                                  rt.then(leftcall);
                                }
                                
                                isBreak = true;

                              }

                              if(isBreak)
                              {
                                break;
                              }

                     }
                   },0);
                  

                   console.log('resolve');
              }
              

              fn(resolve); 

      }


      p.then(function(id1){console.log('then1'+id1);}).then(function(idp){return new PromiseTest(function(resolve){setTimeout(function(){resolve(idp+3);},3000);});}).then(function(id2){console.log('then2'+id2)}).then(function(id3){console.log('then3'+id3)}).then();         

}

function promiseEmulateVersion2()
{
 
    let p = new PromiseTest(function(resolve) {

                        setTimeout(function(){resolve('test')},2000);
                     //resolve(111111);
    });


    function PromiseTest(fn){
                
                let status = 'pending';
                let callbacks = [];
                let value = null;


               this.then = function (fulfilled){

                 return new PromiseTest(function (resolve){
                    handle({
                      fulfilled: fulfilled||null,
                      resolve: resolve
                     });
                  });
               };
                
           
               function handle(cb){
                      
                      if(status ==='pending')
                      {
                        callbacks.push(cb);
                        return;
                      }

                      if(!cb.fulfilled)
                      { 
                        cb.resolve(value);
                        return;
                      }

                     
                      let ret = cb.fulfilled(value);
                      if(ret)
                      cb.resolve(ret);
                      else
                      cb.resolve(value);
                    
               }


               
               function resolve(newValue)
              {
                     
                        if(newValue && (typeof newValue==='function'||typeof newValue === 'object'))
                        {      
                               let then = newValue.then;

                              if(typeof then ==="function")
                              {
                                 
                                 then.call(newValue,resolve); 
                                  return;
                              } 
                             
                        }
                         
                         // Use to test how many times resolve execures in the chain
                        // console.log('execute resolve');

                        
                          status = 'fullfilled';
                          value = newValue;
                        
                         setTimeout(function (){callbacks.forEach(function(callback){handle(callback);})},0);
                         

                      
               }

              fn(resolve);

    }

   

     p.then(function(id1){console.log('then1'+id1);}).then(function(idp){return new PromiseTest(function(resolve){setTimeout(function(){resolve(idp);},3000);});}).then(function(id2){return 'test2'}).then(function(id3){console.log('then3'+id3)}); 

}

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
/*var a = assignFunctionTest();

console.log(a===this);
*/

//loopEventTest();

//prototypeTest();

//promiseEmulate();
promiseEmulateVersion2();
})()
