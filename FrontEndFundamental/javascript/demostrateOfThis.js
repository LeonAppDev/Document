/*function Person(firstName,lastName)
{
   this.first= firstName;
   this.last = lastName;

   this.Print = function()
   {

     console.log(this.first+' '+this.last);
   };

}


var s = new Person('Liang','Ren');

s.Print()

var p = s.Print;

p();
*/

function test()
{
  this.first = 'first';
  this.last = 'last';
return function person(firstN,lastN)
{
    this.first= firstN;
    this.last = lastN;

    return function ()
    {

      this.first= firstN;
     this.last = lastN;

      this.print = function()
      {
      console.log(this.first+' '+this.last);
    };
    }



}
}

var s = test()('Liang','Ren');

var p = new s();
p.print();
var print= p.print;
print();

//var p = new person('liang','ren');

//var print = p.print;

//print();
