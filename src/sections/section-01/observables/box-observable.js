import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const BoxObservableExample = asComponent(() => {
  const count = observable.box(20);

  //get the count
  console.log(`Count is ${count.get()}`);

  //change count
  count.set(22);

  /*
    box observables must use get() & set()
    methods instead of directly reading or assigning
    to it. 

    These methods give the observablity 

    
  */
});
