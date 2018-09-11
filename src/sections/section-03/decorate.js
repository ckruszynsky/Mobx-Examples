import { action, computed, decorate, observable } from "mobx";
import { asComponent } from "../../common/as-component";

/* 
  When using the @decorators syntax it requires some setup with Babel 
  (using babel-plugin-decorators-legacy)
  or turning on experimentalDecorators in typescript

  Using the decorate(), API you can selectively target and specifiy observability
*/
export const DecorateExample = asComponent(() => {
  class BookSearchStore {
    term = "javascript";
    status = "";
    results = [];

    totalCount = 0;

    get isEmpty() {
      return this.results.length === 0;
    }

    setTerm(value) {
      this.term = value;
    }

    async search() {}
  }

  //using the decorate API, we decorate a plain object
  //and provide an object with the property and methods
  //that will be observed
  decorate(BookSearchStore, {
    term: observable,
    status: observable,
    results: observable.shallow,
    totalCount: observable,

    isEmpty: computed,
    setTerm: action.bound,
    search: action.bound
  });

  const store = new BookSearchStore();

  console.log(store.isEmpty);
});
