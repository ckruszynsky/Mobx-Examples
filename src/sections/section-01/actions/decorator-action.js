import { action, observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const DecoratorActionExample = asComponent(() => {
  class Cart {
    @observable modified = new Date();
    @observable.shallow items = [];

    @action
    addItem(name, quantity) {
      this.items.push({ name, quantity });
      this.modified = new Date();
    }

    /*
      pre-binds the instance of the class to the method. This means
      you can pass around the reference to removeItem() and be 
      assured that the "this" value always points to the instance
    */
    @action.bound
    removeItem(name) {
      const item = this.items.find(x => x.name === name);
      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          this.items.remove(item);
        }
      }
    }

    /*
      another way to declare the removeItem action with a pre-bound
      "this" is with the use of class properties and array-functions
      using this approach the arrow function binds to the lexical this
    */
    @action
    removeItem2 = name => {
      const item = this.items.find(x => x.name === name);
      if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
          this.items.remove(item);
        }
      }
    };
  }
});
