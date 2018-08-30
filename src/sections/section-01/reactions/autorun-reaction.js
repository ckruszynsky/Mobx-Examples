import { action, autorun, observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const AutorunReactionExample = asComponent(() => {
  class Cart {
    @observable modified = new Date();
    @observable.shallow items = [];

    cancelAutorun = null;

    constructor() {
      this.cancelAutorun = autorun(() => {
        console.log(`Items in Cart: ${this.items.length}`);
      });
    }

    @action
    addItem(name, quantity) {
      this.items.push({ name, quantity });
      this.modified = new Date();
    }
  }

  const cart = new Cart();
  cart.addItem("Power Cable", 1);
  cart.addItem("Shoes", 1);

  //cancel the autorun
  cart.cancelAutorun();

  cart.addItem("Power Cable-2", 1);
  cart.addItem("Shoes-2", 1);

  // Prints:
  // Items in Cart: 0
  // Items in Cart: 1
  // Items in Cart: 2
});

/*
Autorun - is a long running side effect 
 The logging in our example occurs immediately and also any time 
 the observable changes. 

 To stop the autorun from running, we use the return value of autorun()
 which is a function that is a disposer function. 

 By calling the function, it will cancel the autorun side effect

*/
