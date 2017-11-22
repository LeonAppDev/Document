/*
Lightweight implementation of a async principle.
*/

function createSubject(cbFunction)
{
     return function(value)
     {

       cbFunction(value);
     }

}

var subject1 = createSubject((value)=>{console.log(value);});
var subject2 = createSubject((value)=>{console.log('subject2+ '+value);});
console.log('Start printer');

(function(message)
{
  subject1("print subject 1");
  subject2("print subject 2");

})('print subject 1')


/* Implementation of Observer Design pattern*/
function Subject(){

    this.eventHandlers = [];
    this.subscribe = execute=>{
      this.eventHandlers.push(execute);

    }

    this.notify = ()=>{
      for(func in this.eventHandlers)
      {
        //func();
      }
    }

    }


/*Subject.prototype.add(object)
{
  if(object)
  {
    this.eventHandlers.push(object);

  }
}

Subject.prototype.removeAt(index)
{
  if(index>=0)
  {
    this.eventHandlers.splice(index,1);
  }
}

extend(ConcreteSubject,Subject);

ConcreteSubject.prototype.notify(message)
{
  var handlers = this.eventHandlers;
  for(let handler of handlers)
  {
    handler(message);
  }
}

function Observer()
{

}


subject1 = new ConcreteSubject();
subject2 = new ConcreteSubject();
*/


var subTest1 = new Subject();
function print1()
{
  console.log('test1');
}
function print2()
{
   console.log('test2');
}
subTest1.subscribe(print1);
subTest1.subscribe(print2);

subTest1.notify();

console.log('Test End');