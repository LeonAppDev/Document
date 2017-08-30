#React
## React Tech Stack
### Redux
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
