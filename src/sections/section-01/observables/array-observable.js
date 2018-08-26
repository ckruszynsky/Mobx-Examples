import { observable, toJS } from "mobx";
import { asComponent } from "../../../common/as-component";

export const ArrayObservableExample = asComponent(() => {
  const items = observable.array(); // Start with empty array

  console.log(items.length); // Prints: 0

  items.push({
    name: "hats",
    quantity: 40
  });

  // Add one in the front
  items.unshift({ name: "Ribbons", quantity: 2 });

  // Add at the back
  items.push({ name: "balloons", quantity: 1 });

  console.log(items.length); // Prints: 3

  console.log(items);
  const plainArray = toJS(items);
  console.log(plainArray);
});

/*
 **IMPORTANT***
 obsevable array is not a real JS array, even though the API
 is the same as a JS Array. 

 when passing this array to other libraries or APIs, convert it
 into a JS Array by calling toJS()
**************************************

  observable automatically converts an object,
  array, or a map into an observable. 

  for primitives and functions use : observable.box

  MobX uses deep observability when creating an observable.
  which means MobX will automatically observe every property, at 
  every level, in the object tree.

  In arrays and maps it will track removals and additions

  There are some cases where you may want to limit this behavior
  by using some of the special decorators. 


*/
