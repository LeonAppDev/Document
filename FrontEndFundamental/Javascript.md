# Javascript DOM object and functions
## window

I think it respensents browser window.
   - it has addEventListener and setTimeout method

## document

document map the whole html page including head and body tag.
   - it has getElementById and createElement method
## element

I think element is any html tag except head and body. its attribute name use Camel method.
   - it has innerHTML and textContent, parentElement attribute.
   -  it has appendChild and removeChild method


# Javascript basic datatyle
## array
1. An array could be joined using join(string), string as the parameter inside is used to fill between each array element when joined.


2. Reintrodcue javascript
[re-inroduction to javascript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

Javascript is just a name for advertisement, when it is invented and promoted, Java is quite popular. But it has nothing related with Java. It is based with prototype. It has several branches, Microsoft call it JSript, and for standard, it has another name with ECMAScript, Now the newest standard version is EC8, but
I think the most important change should be from EC6.

Javascript is not compiled, it should be explained, and it depends on host to provide run time

You could see original Javascript use PascalCase to define object(any variable should be initialized using new operator) but use camelCase to define functions, method, property and other variables.

1. Data type in Javascript
 It has Number, String, Boolean, Object(Function, Array, RegExp, Date, Math, Arguments, JSON), Symbol, NULL, Undefined, Error.

  * typeof
  Notice this is not the right way to get specific type of an Object, if we want to get inner class type [[class]]
  * Object.prototype.toString(obj)
  This is the only standard method to get an inner object type
  ```javascript
  function is(type,obj)
  {
    var clas = Object.prototype.toString(obj).slice(8,-1);

    return obj!=='undefine'&&obj!==null&&clas===type;

  }

  var test1 = is('String','I am from China');
  var test2 = is('Math',1.232323);
  var teset3 = is('String',new String('test'));
  ```

 2. Null and Undefined

 3. Object
    Similiar with some datatype in other languages
    * Dictionary
    * Hash, HashMap
    * Related array
    To access a property in an Object ,could use object.property1.proprty2 or object['property1']['property2']

    Javascript  
  4. functions
     code block does not have variable domain. only function has scope variable. so in Javascript it usually use inline function to avoid variable pollution.
     * apply and call
      Defined in Object.prototype, all the other object could use it in Javascript including function, array, self-defined object, string. Why this is so in
      * toString
      Define in Object.prototype, could use this
      * bind
      similiar with call and apply, usually used to bind a
      * Arrow function
      ()=>{statement}
      parameter =>{statement}
      (parameter,parameter2)=>{statement}
      (parameter=defaultValue,parameter2)=>{statement}
      ()=>statement // = ()=>{return statement}
      ()->({test:'test'})
      on the left,there are five different types and on the right there are three different types.
     Use Prototype to define static function
  5. array
     * Regular operation for array
       ```javascript
       let arraySample=[];//initialize an empty arraySample
       let arrayFruits = ['apple','banana']; //initialize a array with some fruits
       console.log(arrayFruits.length); //get length of an array

       ```
  6. How to implement OOP in javascript
     Javascript is based on prototype, but it has several different ways to implement principle of OOP
     * Object
     * Class
     * method
     * property
     * abstract
     * inherence
     * encapsulation

  7. Javascript scope
     * The most important skill we need to take into consideration is scope of a function. Whether it is global and whether it is local.
     * this keyword
