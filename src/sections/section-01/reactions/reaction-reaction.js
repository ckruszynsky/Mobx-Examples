import { action, reaction, observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const ReactionExample = asComponent(() => {
  //cart example that demonstrates being notified
  //anytime an item in the cart changes its price
  class Cart {
    @observable modified = new Date();
    @observable items = [];

    cancelPriceTracker = null;

    trackPriceChangeForItem(name) {
      if (this.cancelPriceTracker) {
        this.cancelPriceTracker();
      }

      //1. reaction to track price changes
      this.cancelPriceTracker = reaction(
        () => {
          const item = this.items.find(x => x.name === name);
          return item ? item.price : null;
        },
        price => {
          console.log(`Price change for 
       ${name} : ${price !== null ? price : 0}`);
        }
      );
    }
    @action
    addItem(name, price) {
      this.items.push({ name, price });
      this.modified = new Date();
    }

    @action
    changePrice(name, price) {
      const item = this.items.find(x => x.name === name);
      if (item) {
        item.price = price;
      }
    }
  }

  const cart = new Cart();
  cart.addItem("shoes", 20);

  //2.Track price for shoes
  cart.trackPriceChangeForItem("shoes");

  //3. change price
  cart.changePrice("shoes", 100);
  cart.changePrice("shoes", 50);

  //Prints
  //Price changed for shoes : 100
  //Price changed for shoes: 50

  cart.cancelPriceTracker();
  cart.changePrice("shoes", 25);
});
/*
 reaction()
  is another kind of reaction in MobX.
  
  it is similar to autorun() but waits for a change in
  the observables before executing the effect-function

  takes two arguments:
  reaction(
    tracker-function, 
    effect-function
  ): disposer-function

  tracker-funmction - all observables are tracked; anytime
  the tracked observable changes, it will re-execute
  It is supposed to return a value that is used to compare it
  to the previous run of tracker-function; if these values
  differ the "effect-function" is executed

  the tracker and effect functions give finer control
  over when a side effect should be caused

  any observable used in the effect function is not tracked


*/
