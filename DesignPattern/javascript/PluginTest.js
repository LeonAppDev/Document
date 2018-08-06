'use strict'

let PluginTest = function PluginTest () {

this.pluginTable = [];

this.register = function (plugins) {

    let pluginTable = this.pluginTable;
    plugins.forEach(function (plugin) {

        if(plugin)
        {
           pluginTable.push(plugin);
}
})

    this.addFuncFromPlugin();
}.bind(this);

this.execute = function (pluginName) {

    this.pluginTable.forEach(function (plugin) {

        if(plugin.hasOwnProperty('name'))
        {
            if(plugin.name === pluginName)
            {
                 plugin.register.call(this);
}
}
})
}.bind(this);

this.addFuncFromPlugin = () => {

     let self = this;
    
     this.pluginTable.forEach(function (plugin) {

        let keys = Object.keys(plugin);

        for (let i=0; i<keys.length; ++i)
        {   let key = keys[i];
           
            if (plugin[key] instanceof Function && key !== 'register')
            {   
                  self[key] = plugin[key];
                

}
}
});
    
}
};

module.exports = PluginTest;
