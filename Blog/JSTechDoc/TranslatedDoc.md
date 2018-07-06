# [ECMAScript 5 Strict Mode, JSON, and More](https://johnresig.com/blog/ecmascript-5-strict-mode-json-and-more/)
Previously I analyzed ECMAScript 5’s Object and Property system. This is a huge new aspect of the language and deserved its special consideration.


There are a number of other new features and APIs that need attention, as well. The largest of which are Strict Mode and native JSON support.
>上回我们分析了ES5的对象和属性系统，这次我们好好分析一下JS里引入的一个新的大变化。
>也有一些新的特性和接口值得注意，不过最大的变化应该算是Strict mode和本地的JSON支持

Strict Mode
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions (generally providing the user with more information and a tapered-down coding experience).

Since ECMAScript 5 is backwards-compatible with ECMAScript 3, all of the “features” that were in ECMAScript 3 that were “deprecated” are just disabled (or throw errors) in strict mode, instead.

Strict mode helps out in a couple ways:

It catches some common coding bloopers, throwing exceptions.
It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
It disables features that are confusing or poorly thought out.
Most of the information about strict mode can be found in the ES5 specification [PDF] on page #235.

It should be noted that ECMAScript 5’s strict mode is different from the strict mode available in Firefox (which can be turned on by going to about:config and enabled javascript.options.strict). ES5’s strict mode complains about a completely different set of potential errors (whereas Firefox’s existing strict mode tries to enforce some good practices, only).

>**这里提到了Strict的Operation context, 我觉得应该是Execution contex,JS在解释的时候回设置更多的规则，我认为Strict Mode的设置主要是为了保证向前的兼容性，让那些老的Javascript代码依然能够运行。而新的使用Strict的代码则加入了更多的代码检查规则并且删除了一些confusing的Feature.**


How do you enable strict mode?

Simple. Toss this at the top of a program to enable it for the whole script:

"use strict";
Or place it within a function to turn on strict mode only within that context.

function imStrict(){
  "use strict";
  // ... your code ...
}
Note the syntax that’s used to enable strict mode (I love this!). It’s simply a string in a single statement that happens to contain the contents “use strict”. No new syntax is introduced in order to enable strict mode. This is huge. This means that you can turn strict mode on in your scripts – today – and it’ll have, at worst, no side effect in old browsers.

As you may note from the examples here and in the previous post there are virtually no new syntax additions or changes to the language in ECMAScript 5. This means that you can write your ES5 scripts in a manner that will be able to gracefully degrade for older useragents – something that wasn’t possible with ECMAScript 4. The way in which strict mode is enabled is a great illustration of that point in practice.

A neat aspect of being able to define strict mode within a function is that you can now define complete JavaScript libraries in a strict manner without affecting outside code.

// Non-strict code...
 
(function(){
  "use strict";
   
  // Define your library strictly...
})();
 
// Non-strict code...
A number of libraries already use the above technique (wrapping the whole library with an anonymous self-executing function) and they will be able to take advantage of strict mode very easily.

>**上面的内容主要是展示了strict mode的两种使用环境，如何在函数中使用strict，并且赞扬了引入Strict Mode的方式非常好，不会影响旧代码和旧的浏览器**

So what changes when you put a script into strict mode? A number of things.

Variables and Properties

An attempt to assign foo = "bar"; where ‘foo’ hasn’t been defined will fail. Previously it would assign the value to the foo property of the global object (e.g.  window.foo), now it just throws an exception. This is definitely going to catch some annoying bugs.

Any attempts to write to a property whose writable attribute is set to false, delete a property whose configurable attribute is set to false, or add a property to an object whose extensible attribute is set to false will result in an error (these attributes were discussed previously). Traditionally no error will be thrown when any of these actions are attempted, it will just fail silently.

Deleting a variable, a function, or an argument will result in an error.

var foo = "test";
function test(){}
 
delete foo; // Error
delete test; // Error
 
function test2(arg) {
    delete arg; // Error
}
Defining a property more than once in an object literal will cause an exception to be thrown

// Error
{ foo: true, foo: false }
eval

Virtually any attempt to use the name ‘eval’ is prohibited – as is the ability to assign the eval function to a variable or a property of an object.

// All generate errors...
obj.eval = ...
obj.foo = eval;
var eval = ...;
for ( var eval in ... ) {}
function eval(){}
function test(eval){}
function(eval){}
new Function("eval")
Additionally, attempts to introduce new variables through an eval will be blocked.

eval("var a = false;");
print( typeof a ); // undefined
Functions

Attempting to overwrite the arguments object will result in an error:
arguments = [...]; // not allowed

Defining identically-named arguments will result in an error  function( foo, foo ) {}.

Access to arguments.caller and arguments.callee now throw an exception. Thus any anonymous functions that you want to reference will need to be named, like so:

setTimeout(function later(){
  // do stuff...
  setTimeout( later, 1000 );
}, 1000 );
The arguments and caller properties of other functions no longer exist – and the ability to define them is prohibited.

function test(){
  function inner(){
    // Don't exist, either
    test.arguments = ...; // Error
    inner.caller = ...; // Error
  }
}
Finally, a long-standing (and very annoying) bug has been resolved: Cases where null or undefined is coerced into becoming the global object. Strict mode now prevents this from happening and throws an exception instead.

(function(){ ... }).call( null ); // Exception
with(){}

with(){} statements are dead when strict mode is enabled – in fact it even appears as a syntax error. While the feature was certainly mis-understood and possibly mis-used I’m not convinced that it’s enough to be stricken from the record.

The changes made in ECMAScript 5 strict mode are certainly varied (ranging from imposing stylistic preferences, like removing with statements, to fixing legitimately bad language bugs, like the ability to redefine properties in object literals). It’ll be interesting to see how people begin to adopt these points and how it’ll change JavaScript development.

All that being said, I’m fairly certain that jQuery is ES5-Strict compatible right now. Once an implementation of the language is made available (so that that premise may be tested) I’ll happily switch jQuery over to working exclusively in strict mode.

JSON
The second major feature of the language is the addition of native JSON support to the language.

I’ve been championing this move for a long time and I’m glad to see it finally arrive in a specification.

In the meantime PLEASE start migrating your JSON-using applications over to Crockford’s json2.js. It is fully compatible with the ECMAScript 5 specification and gracefully degrades if a native (faster!) implementation exists.

In fact, I just landed a change in jQuery yesterday that utilizes the  JSON.parse method if it exists, now that it has been completely specified.

There are two primary methods for handling JSON: JSON.parse (which converts a JSON string into a JavaScript object) and JSON.stringify (which convert a JavaScript object into a serialized string).

JSON.parse( text )

Converts a serialized JSON string into a JavaScript object.

var obj = JSON.parse('{"name":"John"}');
// Prints 'John'
print( obj.name );
JSON.parse( text, translate )

Use a translation function to convert values or remove them entirely.

function translate(key, value) {
  if ( key === "name" ) {
    return value + " Resig";
  }
}
 
var obj = JSON.parse('{"name":"John","last":"Resig"}', translate);
// Prints 'John Resig'
print( obj.name );
 
// Undefined
print( obj.last );
JSON.stringify( obj )

Convert an object into a serialized JSON string.

var str = JSON.stringify({ name: "John" });
// Prints {"name":"John"}
print( str );
JSON.stringify( obj, ["white", "list"])

Serialize only a specific white list of properties.

var list = ["name"];
var str = JSON.stringify({name: "John", last: "Resig"}, list);
// Prints {"name":"John"}
print( str );
JSON.stringify( obj, translate )

Serializes the object using a translation function.

function translate(key, value) {
  if ( key === "name" ) {
    return value + " Resig";
  }
}
 
var str = JSON.stringify({"name":"John","last":"Resig"}, translate);
// Prints {"name":"John Resig"}
print( str );
JSON.stringify( obj, null, 2 )

Adds the specified number of spaces to the output, printing it evenly.

var str = JSON.stringify({ name: "John" }, null, 2);
// Prints:
// {
//   "name": "John"
// }
print( str );
JSON.stringify( obj, null, "\t" )

Uses the specified string to do the spacing.

var str = JSON.stringify({ name: "John" }, null, "\t");
// Prints:
// {\n\t"name": "John"\n}
print( str );
Additionally, a few new generic methods have been added to some of the base objects but, frankly, they aren’t that interesting. The results from String, Boolean, and Number are just equivalent to calling .valueOf() and the result from Date is equivalent to calling .toISOString()

// Yawn...
String.prototype.toJSON
Boolean.prototype.toJSON
Number.prototype.toJSON
Date.prototype.toJSON
.bind()
A welcomed addition to the language is a built-in .bind() method for enforcing the context of a function (virtually identical to Prototype’s .bind implementation).

Function.prototype.bind(thisArg, arg1, arg2....)

Enforces the ‘this’ of the specified function to a specific object – and passing in any specified arguments.

var obj = {
  method: function(name){
    this.name = name;
  }
};
 
setTimeout( obj.method.bind(obj, "John"), 100 );
Considering how long this function (and its equivalents) have been around it’s a welcome addition to the language.

Date
Dates are now capable of both parsing and outputting ISO-formatted dates. Thank goodness, about time. rimshot

The Date constructor now attempts to parse the date as if it was ISO-formatted, first, then moves on to the other inputs that it accepts.

Additionally, date objects now have a new .toISOString() method that outputs the date in an ISO format.

var date = new Date("2009-05-21T16:06:05.000Z");
 
// Prints 2009-05-21T16:06:05.000Z
print( date.toISOString() );
.trim()
A native, built-in, .trim() is now included for strings. Works identically to all the other trim methods out there – with the potential to possibly work faster.

Steven Levithan has discussed the trim method in great depth.

Array
The JavaScript Array Extras that’ve been around for, what seems like, forever are finally formally specified. This includes the following methods: indexOf, lastIndexOf, every, some, forEach, map, filter, reduce, and reduceRight.

Additionally a new Array.isArray method is included, providing functionality very similar to the following:

Array.isArray = function( array ) {
  return Object.prototype.toString.call( array ) === "[object Array]";
};
Altogether I think ECMAScript 5 makes for an interesting package. It isn’t the massive leap that ECMAScript 4 promised but it is a series of respectable improvements that reduces the number of obvious bugs while making the language safer and faster. I’m looking forward to when some implementations start to go public.

Posted: May 21st, 2009



#  [Javascript properties are enumerable, writable and configurable](http://arqex.com/967/javascript-properties-enumerable-writable-configurable)

Objects are one of the main parts of Javascript. JS syntax for Objects is really concise and easy to use, so we are constantly creating objects and using them as hashmaps effortlessly.


// My beloved object ob
var ob = {a: 1};

// Accessing to a property
ob.a; // => 1

// Modifying the value of a property
ob.a = 0;
ob.a; // => 0;

// Creating a new property
ob.b = 2;
ob.b; // => 2

// Deleting a property
delete ob.b;
ob.b; // => undefined


But, do you know that all the object properties in the example above are enumerable, writable and configurable? I mean:

Enumerable: I can access to all of them using a for..in loop. Also, enumerable property keys of an object are returned using Object.keys method.
Writable: I can modify their values, I can update a property just assigning a new value to it: ob.a = 1000;
Configurable: I can modify the behavior of the property, so I can make them non-enumerable, non-writable or even non-cofigurable if I feel like doing so. Configurable properties are the only ones that can be removed using the delete operator.
I bet that you knew about the two first features of Object‘s properties, but there are less developers that know that they can create and update them to be non-enumerable or immutable using the Object‘s method called defineProperty.


// Adding a property to ob using Object.defineProperty
Object.defineProperty( ob, 'c', {
  value: 3,
  enumerable: false,
  writable: false,
  configurable: false
});

ob.c; // => 3

Object.getOwnPropertyDescriptor( ob, 'c' ); 
// => {value: 3, enumerable: false, writable: false, configurable: false}

I reckon that the syntax is not as friendly as usual one, but having this kind of properties can be really handy for some purposes. The object that define the property is called descriptor, and you can have a look at the descriptor of any property using Object.getOwnPropertyDescriptor method.

It is funny that the default option values for Object.defineProperty are completely the opposite to the ones applied when adding a property by assigment: The default property by assignment is non-enumerable, non-writable and non-configurable.


// The 'f' property will be non-enumerable. non-writable and non-configurable
Object.defineProperty( ob, 'f', {value: 6} );

It is also possible to define the properties on object creation if you instantiate it using the method Object.create( prototype, properties ). It accepts an object with property descriptors as the second parameter, and it can be used as follows


var ob = Object.create(Object.prototype, {
  a: { writable:true, enumerable:true, value: 1 },
  b: { enumerable: true, value: 2 }
}});

ob; // => {a:1, b:2}

Object’s non-enumerable properties
As I said before, enumerable properties are accessible using for...in loops, so, non-enumerable ones aren’t. Basically, non-enumerable properties won’t be available using most of the functions that handle Objects as hashmaps.

They won’t be in for..in iterations.
They won’t appear using Object.keys function.
They are not serialized when using JSON.stringify
So they are kind of secret variables, but you can always access to them directly.


var ob = {a:1, b:2};

ob.c = 3;
Object.defineProperty(ob, 'd', {
  value: 4,
  enumerable: false
});

ob.d; // => 4

for( var key in ob ) console.log( ob[key] ); 
// Console will print out
// 1
// 2
// 3

Object.keys( ob );  // => ["a", "b", "c"]

JSON.stringify( ob ); // => "{a:1,b:2,c:3}"

ob.d; // => 4
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
var ob = {a:1, b:2};
 
ob.c = 3;
Object.defineProperty(ob, 'd', {
  value: 4,
  enumerable: false
});
 
ob.d; // => 4
 
for( var key in ob ) console.log( ob[key] ); 
// Console will print out
// 1
// 2
// 3
 
Object.keys( ob );  // => ["a", "b", "c"]
 
JSON.stringify( ob ); // => "{a:1,b:2,c:3}"
 
ob.d; // => 4
Since this kind of properties are not serialized, I found them really useful when handling data model objects. I can add handy information to them using non enumerable properties.


// Imagine the model that represent a car, it has a reference
// to its owner using owner's id in the owner attribute

var car = {
  id: 123,
  color: red,
  owner: 12
};

// I also have fetched the owner from the DB
// Of course, the car is mine :)
var owner = {
 id: 12,
 name: Javi
}

// I can add the owner data to the car model
// with a non-enumerable property, maybe it can
// be useful in the future
Object.defineProperty( car, 'ownerOb', {value: owner} );

// I need the owner data now
car.ownerOb; // => {id:12, name:Javi}

// But if I serialize the car object, I can't see me
JSON.stringify( car ); // => '{id: 123, color: "red", owner: 12}'
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
// Imagine the model that represent a car, it has a reference
// to its owner using owner's id in the owner attribute
 
var car = {
  id: 123,
  color: red,
  owner: 12
};
 
// I also have fetched the owner from the DB
// Of course, the car is mine :)
var owner = {
 id: 12,
 name: Javi
}
 
// I can add the owner data to the car model
// with a non-enumerable property, maybe it can
// be useful in the future
Object.defineProperty( car, 'ownerOb', {value: owner} );
 
// I need the owner data now
car.ownerOb; // => {id:12, name:Javi}
 
// But if I serialize the car object, I can't see me
JSON.stringify( car ); // => '{id: 123, color: "red", owner: 12}'
Can you think how useful can this be to create a ORM library for example?

In case that you need to know all properties in an object, enumerable and non-enumerable ones, the method Object.getOwnPropertyNames returns an array with all the names.

Object’s non-writable properties
While the world waits for ES6 to finally arrive with the desired const statement, non-writable properties are the most similar thing to a constant that we have in Javascript. Once its value is defined, it is not possible to change it using assignments.


var ob = {a: 1};

Object.defineProperty( ob, 'B', {value: 2, writable:false} );

ob.B; // => 2

ob.B = 10;

ob.B; // => 2
1
2
3
4
5
6
7
8
9
var ob = {a: 1};
 
Object.defineProperty( ob, 'B', {value: 2, writable:false} );
 
ob.B; // => 2
 
ob.B = 10;
 
ob.B; // => 2
As you can see, the assignment didn’t affect the value of ob.B property. You need to be careful, because the assignment always returns the value assigned, even if the property is non-writable like the one in the example. In strict mode, trying to modifying a non-writable property would throw an TypeError exception:


var ob = {a: 1};
Object.defineProperty( ob, 'B', {value: 2, writable:false} );

// Assingments returns the value
ob.B = 6; // => 6
ob.B = 1000; // => 1000

// But the property remains the same
ob.B; => 2;

function updateB(){
  'use strict';
  ob.B = 4; // This would throw an exception
}

updateB(); // Throws the exception. I told you.
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
var ob = {a: 1};
Object.defineProperty( ob, 'B', {value: 2, writable:false} );
 
// Assingments returns the value
ob.B = 6; // => 6
ob.B = 1000; // => 1000
 
// But the property remains the same
ob.B; => 2;
 
function updateB(){
  'use strict';
  ob.B = 4; // This would throw an exception
}
 
updateB(); // Throws the exception. I told you.
It is also needed to keep in mind that if the non-writable property contains an object, the reference to the object is what is not writable, but the object itself can be modified yet:


var ob = {a: 1};
Object.defineProperty( ob, 'OB', {value: {c:3}, writable:false} );

ob.OB.c = 4;
ob.OB.d = 5;

ob.OB; // => {c:4, d:5}

ob.OB = 'hola';

ob.OB; // => {c:4, d:5}
1
2
3
4
5
6
7
8
9
10
11
var ob = {a: 1};
Object.defineProperty( ob, 'OB', {value: {c:3}, writable:false} );
 
ob.OB.c = 4;
ob.OB.d = 5;
 
ob.OB; // => {c:4, d:5}
 
ob.OB = 'hola';
 
ob.OB; // => {c:4, d:5}
If you want to have a property with an completely non-writable object, you can use the function Object.freeze. freeze will make impossible to add, delete or update any object’s property, and you will get a TypeError if you try so in strict mode.


var ob = { a: 1, b: 2 };

ob.c = 3;

// Freeze!
Object.freeze( ob ); // => {a:1,b:2,c:3}

ob.d = 4;
ob.a = -10;
delete ob.b;

Object.defineProperty( 'ob', 'e', {value: 5} );

// Every modification was ignored
ob; // => {a:1,b:2,c:3}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
var ob = { a: 1, b: 2 };
 
ob.c = 3;
 
// Freeze!
Object.freeze( ob ); // => {a:1,b:2,c:3}
 
ob.d = 4;
ob.a = -10;
delete ob.b;
 
Object.defineProperty( 'ob', 'e', {value: 5} );
 
// Every modification was ignored
ob; // => {a:1,b:2,c:3}
Object’s non-configurable properties
You can update the previous behaviors of the properties if they are defined as configurable. You can use defineProperty once and again to change the property to writable or to non-enumerable. But once you have defined the property as non-configurable, there is only one behaviour you can change: If the property is writable, you can convert it to non-writable. Any other try of definition update will fail throwing a TypeError.


var ob = {};
Object.defineProperty( ob, 'a', {configurable:false, writable:true} );

Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError
Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!
Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError
1
2
3
4
5
6
7
var ob = {};
Object.defineProperty( ob, 'a', {configurable:false, writable:true} );
 
Object.defineProperty(ob, 'a', { enumerable: true }); // throws a TypeError
Object.defineProperty(ob, 'a', { value: 12 }); // throws a TypeError
Object.defineProperty(ob, 'a', { writable: false }); // This is allowed!!
Object.defineProperty(ob, 'a', { writable: true }); // throws a TypeError
An important thing to know about the non-configurable properties is that they can’t be removed from the object using the operator delete. So if you create a property non-configurable and non-writable you have a frozen property.


var ob = {};

Object.defineProperty( ob, 'a', {configurable: true, value: 1} );

ob; // => {a:1}
delete ob.a; // => true
ob; // => {}

Object.defineProperty( ob, 'a', {configurable: false, value: 1} );

ob; // => {a:1}
delete ob.a; // => false
ob; // => {a:1}
1
2
3
4
5
6
7
8
9
10
11
12
13
var ob = {};
 
Object.defineProperty( ob, 'a', {configurable: true, value: 1} );
 
ob; // => {a:1}
delete ob.a; // => true
ob; // => {}
 
Object.defineProperty( ob, 'a', {configurable: false, value: 1} );
 
ob; // => {a:1}
delete ob.a; // => false
ob; // => {a:1}
Conclusion
Object.defineProperty was introduced with ES5, and you can start using it right now, it is supported by all modern browsers, including IE 9 ( and even IE 8, but only for DOM objects ). It is always fun to play with javascript basics in a different way that we are used to, and it is easy to learn new stuff just observing how javascript core objects work.

Object.defineProperty also give us the chance of creating customized getters and setters for the properties, but I won’t write about that today. If you want to learn more, have a look at the always amazing Mozilla’s documentation.