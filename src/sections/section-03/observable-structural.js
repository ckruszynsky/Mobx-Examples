import React from "react";
import { autorun, observable, action } from "mobx";
import { asComponent } from "../../common/as-component";

/*
   By default, very time a new object is assigned to the observable, 
   it will be considered as a change, and reactions will fire. But if you
   use a @observable.struct; MobX will do a deep comparison based on property
   values
*/
export const ObservableStructuralExample = asComponent(() => {
  class Sphere {
    @observable.struct location = { x: 0, y: 0 };

    constructor() {
      autorun(() => {
        console.log(
          `Current location : (${this.location.x}, ${this.location.y})`
        );
      });
    }

    @action
    moveTo(x, y) {
      this.location = { x, y };
    }
  }

  let x = new Sphere();
  x.moveTo(0, 0);
  x.moveTo(0, 0); //doesn't print because it doesn't see it as a change
  x.moveTo(1, 1);
  x.moveTo(20, 30);

  /* Prints */
  // Current location: (0, 0)
  // Current location: (1, 1)
  // Current location: (20, 30)
});
