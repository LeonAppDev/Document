## Observable and Listerner pattern
1. Observer Design pattern

There are several observers and a subject, subject update its status and observer get notified and execute its method.

```javascript
function createSubject(cbFunction)
{
     return function(value)
     {

       cbFunction(value);
     }

}

var subject1 = createSubject((value)=>{console.log(value);});
var subject2 = createSubject((value)=>{console.log('sbject2'+value);});
console.log('Start printer');

(function(message)
{
  subject1("print subject 1");
  subject2("print subject 1");

})('print subject 1')

```

Here returned function is the notify
