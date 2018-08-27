import { observable, action } from "mobx";
import { asComponent } from "../../../common/as-component";

export const BasicActionExample = asComponent(() => {
  const cart = observable({
    items: [],
    modified: new Date()
  });

  //create the actions
  const addItem = action((name, quantity) => {
    const item = cart.items.find(x => x.name === name);
    if (item) {
      console.log(`addItem: Found item: ${item}`);
      console.log("addItem: updating quantity");
      item.quantity += 1;
    } else {
      console.log(
        `addItem: Adding item { name:${name}, quantity:${quantity} }`
      );
      cart.items.push({ name, quantity });
    }
    cart.modified = new Date();
  });

  const removeItem = action(name => {
    const item = cart.items.find(x => x.name === name);
    if (item) {
      console.log(`removeItem: Found item :${item.name}`);
      console.log("decreasing quantity by 1");
      item.quantity -= 1;

      if (item.quantity <= 0) {
        cart.items.remove(item);
      }

      cart.modified = new Date();
    }
  });

  //invoke actions
  addItem("balloons", 2);
  addItem("paint", 2);
  removeItem("paint");
});

/*
  MobX treats action changes as one atomic transaction; meaning change notifications
  are only fired after all observables have been changed; not as the change occurs.

*/
