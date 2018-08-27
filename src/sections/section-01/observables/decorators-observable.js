import { decorate, observable, computed } from "mobx";
import { asComponent } from "../../../common/as-component";

/* 
  To use the decorator syntax us the Babel plugin, 
      transform-decorators-legacy
  
  if using typescript, decorators can be enabled by setting
  {experimentalDecorators: true } compiler option in 
  tsconfig.json

  The decorator syntax is only available for classes
*/
class Cart {
  @observable.shallow items = [];
  @observable.shallow metadata = {};
  @observable modified = new Date();

  @computed
  get description() {
    switch (this.items.length) {
      case 0:
        return "There are no items in the cart";
      case 1:
        return "There is one item in the cart";
      default:
        return `There are ${this.items.length} items in the 
                cart`;
    }
  }
}

/*
   @observable decorator does deep observation on all the properties 
   of the value. 

   @observable decorator .shallow is == {deep: false}; which works for objects
   arrays, and maps
*/
