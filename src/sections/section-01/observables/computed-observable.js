import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";

/*
  A computed property is not an observable that is inherent to the client state.
  Instead, it is an observable that derives its value from other observables. 
*/
export const ComputedObservableExample = asComponent(() => {
  const cart = observable.object({
    items: [],
    modified: new Date(),
    //the description property is not an inherent property of the cart
    //it depends on item.length
    //we make description a getter with no setter; therefore,
    //when something is observing description it will be notified anytime
    // it changes
    get description() {
      switch (this.items.length) {
        case 0:
          return "There are no items in the cart";
        case 1:
          return "There is one item in the cart";
        default:
          return `There are ${this.items.length} items in the cart`;
      }
    }
  });

  cart.items.push({ name: "Shoes", quantity: 1 });
  console.log(cart.description);
  cart.items.push({ name: "White Shoes", quantity: 2 });
  console.log(cart.description);
  cart.items.push({ name: "Dres Shoes", quantity: 2 });
  console.log(cart.description);
});

/*
  Computed properties are also know derivations. Computed properties derive their value from
  other observables; if any of the observables change the computed propery changes as well. 
*/
