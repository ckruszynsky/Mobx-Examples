import React from "react";
import { observable, action } from "mobx";
import { asComponent } from "../../common/as-component";

export const ObservableRefExample = asComponent(() => {
  class FormData {
    @observable.ref validations = null;

    @observable username = "";
    @observable password = "";

    @action
    validate() {
      const { username, password } = this;
      this.validations = this.applyValidations({ username, password });
    }

    applyValidations(obj) {
      return null;
    }
  }

  return <div />;
});
