#React
## React Tech Stack
### Redux
 * reducers
   Actions define the fact something happened, but don't specify how the application's state changes in response. So reducer will take this job.
  * How to debug
   It is hard to debug when dispatch action does not invoke a reducer, since reducer is a function and you could not see the inner structure and step run it. Only way to debug it for now is build the project and see the combined app files. When action doesn't invoke a reducer, usually we need to check the status.

### Immutable
So the principle of immutability is once it has been created, it will not be changed indirectly, this is the idea of value type in C#, on the other hand, mutable is reference type, so once it is changed, all of its reference will be changed.

The biggest implication of this is that for immutable data, equality is more reliable since we know that a value's state won't be changed out from under us.
 * Object.freeze(Object)
  It will freeze the object input as a parameter and return its copy
* array
  use array.map, array.filter, array.concat instead of array.push, array.pop, array.sort
 * fromJS
  It could deeply converts plain object and array to Immutable Maps and Lists.

### redux-actions
Keeping track of action string constants in your actions creators and reducers can be overwhelming for beginners. redux-actions is the utility belt for FSA-compliant actions in Redux.

### ES6 semantic
 * Please be aware of name import and default import, sometimes this fault will lead to a quite deep defect. I once name import a constant string without {},then my action could never
