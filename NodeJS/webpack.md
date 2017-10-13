# Webpack
## Webpack core conception
Webpack is a module bundler for modern javascript applications. When processing your application, it recursively builds a dependency graph that includes every module your application needs,
and pack all of those modules into a small number of bundles, often only one.

It is incrediblely configuration, but to get started you only need to understand four core concepts, entry, output, loaders and plugins. Those are four key elements when you build a webpack file.

### Entry
When creating the dependency graph for your application, webpack starts from an entry point, your could consider it as root node for your graph, webpack will read context in your entry point and search recursively.

Blow is the simplest Example
``` javascript

module.exports={

  entry:'./src/home/index.js'
}

```

Remember webpack expect a configuration object which is a javascript Object, not a Json file. By the way, JSON is a subset of javascript object., and remember you could also use an object as entry, that means multi entry.


### Output
After bundling all files together, you still need to specify a output place for all your files

Here is a simple sample

``` javascript

var path = require('path');
var config = {

entry:'./src/home/index.js',
output:{
       path:path.resolve(__dirname,'dist')
       filename:'bundle.main.js'
}

};
var module.exports = config;
```

### Loader
Loader is used to manipulate assets other than javascript, such as text, css, svg, scss, jpg etc... It transforms those files into modules and add them to dependency graph. You need to specify two factors, the first one is which asset you want to transform and the second one is which loader you need to do the transform.


``` javascript
var path = require('path');

var config = {

   entry:'./src/home/index.js'

   output:{

      path:path.resolve(__dirname,'dist')
      filename:'bundle.main.js'
   }

   module:{

       rules:[
           {test:\/\.txt$\/, use:'raw-loader'}

       ]
   }
};

module.exports=config;

```

For a reference for Javascript RegExp, goto [Regular Express W3C](https://www.w3schools.com/jsref/jsref_obj_regexp.asp) or [Regular Express MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)

### plugin
I think plugin extends webpack's function, it add more customized features whening transpiling source files. and the different with loader is that loader implies specific type of files and plugin is a global functionality

``` Javascript
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
cosnt webpack = require('webpack');

const config= {
 entry:'./src/home/index.js',

 output:{
         path:path.resolve(__dirname, 'dist');
         filename:'bundle.main.js'

 },

 module:{
        rules:[

          {test:/\.txt/,use:'raw-loader'}
        ]


 },

 plugins:[
   new webpack.optimize.UglifyJsPlugin(),
   new HtmlWebpackPlugin({template:'./src/index.html'})
 ]


};

module.exports = config

```  


## webpack project Structure

### React project
The basic and simplest structure includes below parts
1. package.json
project information, define how to run this project and depedency of the whole project.
2. .babelrc
Transpile resource, contains transpiler information
3. webpack.config.js
 This file should be written with standard javascript, webpack read this and determine whether to use transpile



### Tips when developing
1. Port issue when initializing webpack-dev-server
   When you assign a port to dev server, webpack-dev-server will behave differently in different versions. In some version it will report range error when port is null, in some version it will report range error when port is undefined, process.env.port is undefined in some development environment so if you assign it in a configuration file, it is better to assign a default value such as 8080 with it.
