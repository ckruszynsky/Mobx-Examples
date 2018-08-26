import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const CreateObservableExample = asComponent(() => {
  //creating an observable item
  //changes to its properties will be tracked
  const item = observable({
    name: "Computer",
    id: "1234",
    quantity: 2,
    price: 500,
    coupon: {
      code: "CHEAPCOMPUTER",
      discountPercent: 50
    }
  });

  //set values on the observable
  item.quantity += 3;
  item.name = "HP Computer";

  //retrieve the values
  console.log(`Buying ${item.quantity} of ${item.name}`);

  /*
    observable objects only track the properties provided in the 
    inital value given to "observable"

    Any properties added after the observable is created will not be
    tracked. 

    if you need dynamic tracking of properties, see observable maps instead.

    observables only work with javaScript plain objects;
    if you need to make an observable using a integer or primitive
    type use observable.box
  */
});
