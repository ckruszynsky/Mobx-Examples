import React from "react";
import { autorun, observable, action, extendObservable } from "mobx";
import { asComponent } from "../../common/as-component";

/*
  The extendObservability allows you to mix in additional properties at runtime and make them
  observable as well. 

  the api for extendObservable is : 
  
    extendObservable(target, object, decorators )

*/
export const ObservableExtendExample = asComponent(() => {
  const cart = observable({});

  /* extends the observablity of the cart for festive offers */
  function applyFestiveOffer(cart) {
    extendObservable(
      cart,
      {
        coupons: ["OFF50FORU"],
        get hasCoupons() {
          return this.coupons && this.coupons.length > 0;
        },
        addCoupon(coupon) {
          this.coupons.push(coupon);
        }
      },
      {
        coupons: observable.shallow,
        addCoupon: action
      }
    );
  }
});
