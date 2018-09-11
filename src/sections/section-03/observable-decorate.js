import { action, computed, observable } from "mobx";
import { asComponent } from "../../common/as-component";

/*
 the observable() Api takes the following arguments : 
 
    observable(properties,decorators,options)

  properties: the properties of the observable object
  decorators: an object defining the decorators for the properties
  options: options for setting default observablity and debug-friendly-name


 When using the observable() API,it is not required to mark the computed properties explicitly.
  MobX will convert any getter property of the passed in object into a computed property.
  Similarly, for the modified property, there is actually no need to decorate since observable() 
  by default makes everything deeply observable. 
  
  We only have to specify the properties that need a different treatment. 
  In other words, only specify decorators for the exceptional properties.

*/
export const ObservableDecorateExample = asComponent(() => {
  const cart = observable(
    {
      items: [],
      modified: new Date(),
      get hasItems() {
        return this.items.length > 0;
      },
      addItem(name, quantity) {
        /* ... */
      },
      removeItem(name) {
        /* ... */
      }
    },
    {
      items: observable.shallow,
      modified: observable,
      hasItems: computed,
      addItem: action.bound,
      removeItem: action.bound
    }
  );

  cart.hasItems;
});
