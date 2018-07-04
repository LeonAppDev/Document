/*Begin of javascript object compare function  */
var a ={blah:1,blb:{bla:1,blbh:2}};
var b={blb:{bla:1,blbh:2},blah:1};


Object.compare =(obj1,obj2)=>{

      for(var p in obj1)
      {
        //Check whether obj2 has the same property
        if(!obj2.hasOwnProperty(p))
         return false;

         switch(typeof obj1[p])
         {
             case "object":
              if(!Object.compare(obj1[p],obj2[p]))
              return false;
             break;
             case "function":
                if(typeof obj2[p]==="undefined"||(p!='compare'&&(obj1[p].toString()!=obj2[p].toString())))
                return false;
                break;
             default:
                 if(obj2[p]!==obj1[p])
                  return false;

         }
      }

      for(var p in obj2)
      {
        if(obj1[p]==="undefined")
        return false;
      }

        return true;

}

console.log(Object.compare(a,b));

/*End of javascript object compare function*/
