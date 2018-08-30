import { action, when, observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const WhenReactionExample = asComponent(() => {
  class Inventory {
    @observable items = [];
    cancelTracker = null;

    trackAvailability(name) {
      //1. Establish the tracker when
      this.cancelTracker = when(
        () => {
          const item = this.items.find(x => x.name === name);
          return item ? item.quantity > 0 : false;
        },
        () => {
          console.log(`${name} is now available`);
        }
      );
    }

    async trackAvailabilityPromise(name) {
      await when(() => {
        const item = this.items.find(x => x.name === name);
        return item ? this.quantity > 0 : false;
      });

      //2. Execute the side-effect
      console.log(`${name} is now available`);
    }

    @action
    addItem(name, quantity) {
      const item = this.items.find(x => x.name === name);
      if (item) {
        item.quantity += quantity;
      } else {
        this.items.push({ name, quantity });
      }
    }
  }

  const inventory = new Inventory();
  inventory.addItem("Shoes", 0);
  inventory.trackAvailability("Shoes");

  //2. Add two pairs
  inventory.addItem("Shoes", 2);
  inventory.addItem("Shoes", 1);

  //Prints:
  //Shoes is now available
});
