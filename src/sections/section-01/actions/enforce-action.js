import { autorun, configure, observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const EnforceActionExample = asComponent(() => {
  configure({
    enforceActions: true
  });

  const cart = observable({
    items: [],
    modified: new Date()
  });

  autorun(() => {
    console.log(cart.items, cart.modified);
  });

  // Modifying outside of an action
  //cart.items.push({ name: 'test', quantity: 1 });
  //cart.modified = new Date();

  configure({
    enforceActions: true
    //enforceActions: 'strict'
  });

  //enfoceActions:true; will only throw errors if there are observers
  //watching the observables that you are trying to mutate.
  //if there are no observers for those observables, MobX will safely
  //ignore it; because there is no risk of triggering reactions to early
  //However, if you want to be stricter about this behavior, set enforce
  //actions to 'strict'
});
