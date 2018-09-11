import React from "react";
import { runInAction, autorun, observable, action } from "mobx";
import { asComponent } from "../../common/as-component";

/* Reference only observables */
/*
 when your not interested in any changes happening inside a data structure and only 
the change in value
*/
export const ObservableRefExample = asComponent(() => {
  class FormData {
    /*
      in this example we always assign the observable
      a new value; so it's better to use reference only 
    */
    @observable.ref validations = {};

    @observable username = "";
    @observable password = "";

    constructor() {
      autorun(() => {
        console.log(`Validations: ${JSON.stringify(this.validations)}`);
      });
    }
    @action
    validate() {
      const { username, password } = this;
      runInAction(() => {
        this.validations = this.applyValidations({ username, password });
      });
    }

    @action
    applyValidations(obj) {
      return null;
    }
  }

  let form_data = new FormData();
  form_data.username = "Foo";
  form_data.validate();
  form_data.validations = { userName: "foo" };
  form_data.validations.userName = "Bar";
});
