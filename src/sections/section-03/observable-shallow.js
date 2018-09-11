import React from "react";
import { autorun, observable, action } from "mobx";
import { asComponent } from "../../common/as-component";

/*
  Shallow observables only triggers when a reference change occurs
  such as adding a new item, removing an item. Changing a property
  on a object in a array will not trigger a change. 

  For maps, only the addition and removal of keys is considered and
  the reference of the map object itself.
  Values of the keys in the observable map are left as-is and not considered for 
  observation 
*/
export const ObservableShallowExample = asComponent(() => {
  class BookSearchStore {
    @observable term = "javascript";
    @observable status = "";
    @observable.shallow results = [];
    @observable totalCount = 0;

    constructor() {
      autorun(() => {
        console.log(`Results : ${JSON.stringify(this.results)}`);
      });
    }

    @action
    addResults() {
      this.results = [
        {
          title: "Book1",
          author: "Author1"
        },
        {
          title: "Book2",
          author: "Author2"
        }
      ];
    }

    @action
    addBook(book) {
      this.results.push(book);
    }
    @action
    updateBook(author) {
      this.results[0].author = author;
    }
  }

  let store = new BookSearchStore();
  store.addResults();
  store.addBook({ title: "Test", author: "Foo" });
  store.updateBook("jon doe"); //this will not trigger a change
});
