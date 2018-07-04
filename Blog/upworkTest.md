# javascript
## Error question from http://upworktestru.com/javascript_test_2016_upwork_answers_questions/
1. Generator
>>>
11.What will be output of the following code?
function testGenerator() {
yield «first»;
document.write(«step1»);
yield «second»;
document.write(«step2»);
yield «third»;
document.write(«step3»);
}
var g = testGenerator();
document.write(g.next());
document.write(g.next());
Answers:
• firststep1second
• step1step2
• step1
• step1step2step3

This snippet has at leat two errors, one is function should have * if using yield, and another is g.next() should be like g.next().value if only printing first other it will printing a object.
Besides, document is a object supported in a browser, not in node.js

2. delete operator
>>>
21.Consider the following code snippet:
var myJSONObject =
{«ircEvent»: «PRIVMSG», «method»: «newURI», «regex»: «^http://.\*»};
What is the best way to remove the property ‘regex’, so the result would be this code snippet?
myJSONObject ==
{«ircEvent»: «PRIVMSG», «method»: «newURI»};
Answers:
• myJSONObject.regex.delete;
• myJSONObject.regex.remove;
• delete myJSONObject.regex;
• remove myJSONObject.regex;

Here it select remove, actually should be delete, remove is not a operator but a function


3. Quote
>>>
22.Which of the following is the best way to show both single and double quotes in the same sentence?
Answers:
• alert(«It’s «+'»game»‘+» time.»);
• alert(‘It\’s \»game\» time.’);
• alert(‘It\’\s «game» time.’);
• alert(‘It\’s «game» time.’);
Here I think both third and fourth are right


4. Indexof
>>>
30.Which of the following statements regarding this String prototype is correct?
String.prototype.doSomething = function(suffix) {
return this.indexOf(suffix, this.length — suffix.length) !== -1;
};
Answers:
• This method determines whether or not a string ends with another string.
• This method determines whether or not a string begins with another string.
• This method returns the position of the last occurrence of a specified value in a string.
• This method returns the position of the first occurrence of a specified value in a string.

Should be C

5 User input
>>>
36.Which of the following can be used to write a JavaScript function that will accept user input?
Answers:
• The prompt method
• The alert method
• A form field
• All of these

Should be both A and C

6 String upper and lower case
>>>
38.Which of the following prints «AbBc»?
Answers:
• var b = ‘a’; var result = b.toUpperCase() + ‘b’ + ‘b’.toUpperCase() +’C'[‘toLowerCase’](); alert(result);
• var b = ‘a’; var result = b.toUpperCase() + ‘b’ + ‘b’.toUpperCase() +’c'[‘toUpperCase’](); alert(result);
• var b = ‘a’; var result = b.toUpperCase() + b + ‘b’.toUpperCase() +’C'[‘toLowerCase’](); alert(result);
• var b = ‘a’; var result = b.toUpperCase() + ‘b’ + ‘b’.toUpperCase() +C; alert(result);

shoud be A
