'use strict';

const regTest = ()=> {
    const reg = RegExp('ab.|[ab].', 'g');
    const test = 'abcccdfe';

    const result = reg.exec(test);
    result.map((x)=>x);
    console.log(result);
    /* console.log(reg.lastIndex);
  reg.test(test);
  console.log(reg.lastIndex);
  reg.test(test);
  console.log(reg.lastIndex);
*/
    const test2 = '        apple     ';

    result2= test2.replace(/(?:^|\s)apple(?!\S)/g, 'e');
    console.log(result2);

};

function* generatorTest () {

    yield 'first';
    console.log('step1');
    yield 'second';
    console.log('step2');
    yield 'third';
    console.log('step3');


}

function deleteOperation () {
    const myJSON={
        'ircEvent': 'privMsg',
        'method': 'newURI',
        'regEx': 'http://.*',
    };

    delete myJSON.regEx;
    console.log(myJSON);
}

function getLines () {
    const text = 'test1\
                test2\
                 test3\
                 test4';

    const lineNumber = text.split(/\r\n\|\n\|\r/).length;

    console.log(lineNumber);
}

String.prototype.positionF = function (suffix) {

    return (this.indexOf(suffix, this.length-suffix.length)!==-1);
};

function stringCase () {
    const b='a';

    const result = b.toUpperCase()+'b'+'b'.toUpperCase()+'C'['toLowerCase']();

    console.log(result);

}

String.prototype.repeat = function (count) {

    while (count) {
        console.log(count&1); count>>=1;
    }

};


function regIgnoreCase () {

    const someText = 'Javascript1.2';
    const pattern = /(\w+)(\d)\.(\d)/i;
    const outCome = pattern.exec(someText);
    console.log(outCome);
    console.log(pattern.ignoreCase);
}

function objectTest () {
    const object0 = {};

    Object.defineProperty(object0, 'prop0', { value: 1, enumerable: false, configuration: true });
    Object.defineProperty(object0, 'prop1', { value: 2, enumerable: true, configuration: false });
    Object.defineProperty(object0, 'prop2', { value: 3 });
    object0.prop3 = 4;

    for (const prop in object0) {
        console.log(prop);
    }

    delete object0.prop0;
    delete object0.prop1;
    delete object0.prop2;
    delete object0.prop3;

    console.log(object0);
}

function testNull () {

    const object = null;
    console.log(typeof object);
    console.log(typeof test);
}


function execSeq (val1) {

    console.log(val1);

    return (val2)=>{
        console.log(val2);
    };

}

function thisTest () {

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

    function foo2 (n) {
        const f = (...args)=>args[0]+n;

        return f;

    }


    console.log(foo2(2)(1234));

}


const assignFunctionTest = function () {
    const err=console.log;
    return this;

}; // Remember ; here is important since this is a assignment statement, javascript interpreter could not correctly figure out two different lines without ";"
// if next line begins with a parenthese

//
// var assignFunctionTest = assignFunctionTest;

// A test process for node js event loop
/* const fs = require('fs');

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
function loopEventTest () {

    setTimeout(()=>{
        console.log('setTimeOut1');
    }, 0);

    setImmediate(()=>{
        console.log('setImmediate1');
    }
    );

    const fs = require('fs');

    fs.readFile(__dirname+'/The Waikato Artisan Foodie Tour.docx', ()=>{

        setTimeout(()=>{
            console.log('setTimeout2');
        }, 0);

        setImmediate(()=>{
            console.log('setImmediate2');
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

const prototypeTest = function () {


    const Foo = function (name) {
        this.name=name;

        this.printName = ()=>{

            console.log(this.name);
        };


    };

        /* Foo.prototype.printName = ()=> {

           console.log(name);
        };
*/
    const foo1 = new Foo('Leon');
    const foo2 = new Foo('Bill');

    foo1.say = function () {
        console.log('My name is '+this.name);
    };


    const printName1 = foo1.printName;
    printName1();
    foo1.say();
    foo2.printName();
    console.log(foo1 === foo2);
    console.log(foo1.__proto__ === foo2.__proto__);

};


function promiseEmulate () {

    const p = new PromiseTest(function (resolve) {

        console.log('execute promise');
        setTimeout(function () {
            resolve(31231);
        }, 1000);
        // resolve(31231);

    });


    function PromiseTest (fn) {

        const callbacks = [];


        this.then = function (callback) {


            if (typeof callback==='function') {
                callbacks.push(callback);

            }
            console.log('then');

            return this;
            // Here you should return this or a new promise which has a new async call

        };

        function resolve (value) {


            setTimeout(function () {

                // callbacks.forEach(function(callback){callback(value)});
                let isBreak = false;
                let func;
                let rt;
                for (let i=0; i<callbacks.length; i++) {
                    func = callbacks[i];
                    // func(value);
                    rt = func(value);

                    if (typeof rt ==='object'&&PromiseTest.prototype.isPrototypeOf(rt)) {
                        console.log('Add another Promise');
                        for (let j=i+1; j<callbacks.length; ++j) {
                            const leftcall = callbacks[j];
                            rt.then(leftcall);
                        }

                        isBreak = true;

                    }

                    if (isBreak) {
                        break;
                    }

                }
            }, 0);


            console.log('resolve');
        }


        fn(resolve);

    }


    p.then(function (id1) {
        console.log('then1'+id1);
    }).then(function (idp) {
        return new PromiseTest(function (resolve) {
            setTimeout(function () {
                resolve(idp+3);
            }, 3000);
        });
    }).then(function (id2) {
        console.log('then2'+id2);
    }).then(function (id3) {
        console.log('then3'+id3);
    }).then();

}

function promiseEmulateVersion2 () {

    const p = new PromiseTest(function (resolve) {

        // setTimeout(function(){resolve('test')},2000);
        resolve(111111);
    });


    function PromiseTest (fn) {

        let status = 'pending';
        const callbacks = [];
        let value = null;


        this.then = function (fulfilled) {

            return new PromiseTest(function (resolve) {
                handle({
                    fulfilled: fulfilled||null,
                    resolve: resolve,
                });
            });
        };


        function handle (cb) {

            if (status ==='pending') {
                callbacks.push(cb);
                return;
            }

            if (!cb.fulfilled) {
                cb.resolve(value);
                return;
            }


            const ret = cb.fulfilled(value);
            if (ret) {
                cb.resolve(ret);
            } else {
                cb.resolve(value);
            }

        }


        function resolve (newValue) {

            if (newValue && (typeof newValue==='function'||typeof newValue === 'object')) {
                const then = newValue.then;

                if (typeof then ==='function') {

                    then.call(newValue, resolve);
                    return;
                }

            }

            // Use to test how many times resolve execures in the chain
            // console.log('execute resolve');


            status = 'fullfilled';
            value = newValue;

            setTimeout(function () {
                callbacks.forEach(function (callback) {
                    handle(callback);
                });
            }, 0);


        }

        fn(resolve);

    }


    // p.then(function(id1){console.log('then1'+id1);}).then(function(idp){return new PromiseTest(function(resolve){setTimeout(function(){resolve(idp);},3000);});}).then(function(id2){return 'test2'}).then(function(id3){console.log('then3'+id3)});

    p.then().then(function (id) {
        return new PromiseTest((resolve)=>{
            resolve(22222);
        });
    }).then((id2)=>{
        console.log(id2);
    });

}

function promiseTest () {
    new Promise((resolve)=>resolve(8))
        .then(function (id) {
            return id;
        })
        .catch(null)
        .then(Promise.resolve(9))
        .then((res)=> console.log(res));
// 8
}


function propertyTest () {

    const func1 = function () {
        // this.name = "test1";
        console.log('test1');
    };

    const funcInstance = new func1();


    const func2 = function () {
        // this.name = "test2";
        console.log('test2');
    };

    func1.prototype.constructor = func2.constructor;
    func1.prototype = func2.prototype;

    func2.prototype.name = 'test2';
    // func1 = func2;

    const funcInstance2 = new func1();


    console.log(func1.prototype.name);
    console.log(funcInstance.name);
    console.log(funcInstance2.name);

    console.log(func1.prototype.constructor);

    console.log('Function.__proto__=== Function.prototype is ', Function.__proto__ === Function.prototype);

}


const Plugin = function PluginTest () {

    this.pluginTable = [];

    this.register = function (plugins) {

        const pluginTable = this.pluginTable;
        plugins.forEach(function (plugin) {

            if (plugin) {
                pluginTable.push(plugin);
            }
        });

        this.addFuncFromPlugin();
    }.bind(this);

    this.execute = function (pluginName) {

        this.pluginTable.forEach(function (plugin) {

            if (plugin.hasOwnProperty('name')) {
                if (plugin.name === pluginName) {
                    plugin.register.call(this);
                }
            }
        });
    }.bind(this);

    this.addFuncFromPlugin = () => {

        const self = this;

        this.pluginTable.forEach(function (plugin) {

            const keys = Object.keys(plugin);

            for (let i=0; i<keys.length; ++i) {
                const key = keys[i];

                if (plugin[key] instanceof Function && key !== 'register') {
                    self[key] = plugin[key];


                }
            }
        });

    };
};


function pluginTest () {

    // let Plugin = require('./PluginTest');

    const pluginObject = new Plugin();
    const plugin1 = { name: 'plugin1', version: '0.01', register: () => {

        console.log('This is the plugin1');
    },
    };

    const plugin2 = { name: 'plugin2', version: '0.01', register: () => {

        console.log('This is the plugin2');
    }, view: () => {
        console.log('view');
    },
    };
    const plugins = [plugin1, plugin2];

    pluginObject.register(plugins);

    // pluginObject.execute('plugin1');

    pluginObject.view();
    const keys = Object.keys(pluginObject);
    console.log(keys);

}

function addProperty (obj1, obj2) {

    const keys = Object.keys(obj2);

    for (let i=0; i<keys.length; i++) {
        const key = keys[i];
        obj1[key] = obj2[key];
    }

}

(function () {

// regTest();
/* var g = generatorTest();
console.log(g.next().value);
console.log(g.next().value);
*/

// deleteOperation();

// console.log('It\'\s "game" time');
// getLines();

/* var s='Stringteststst';
console.log(s.positionF('tst'));
*/

// stringCase();
/*
var s = 'testststt';
s.repeat(13);*/

// regIgnoreCase();

// objectTest();

// testNull();

// ecSeq("I am val1")("I am val2");

// isTest();
// var a = assignFunctionTest();
// console.log(a===this);
/* var a = assignFunctionTest();

console.log(a===this);
*/

// loopEventTest();

// prototypeTest();

// promiseEmulate();
// promiseEmulateVersion2();

// promiseTest();
// propertyTest();

    pluginTest();

/*
let o1 = { p1:'Test1', p2:'Test2'};
let o2 = { p3: 'Test3'};

let keys = Object.keys(o1);
console.log(keys);
addProperty(o1,o2);

keys = Object.keys(o1);
console.log(keys);*/
})();
