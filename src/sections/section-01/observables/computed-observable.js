import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";

/*
  A computed property is not an observable that is inherent to the client state.
  Instead, it is an observable that derives its value from other observables. 
*/
export const ComputedObservableExample = asComponent(() => {
  const cart = observable.object({
    items: [],
    modified: new Date()
  });
});
