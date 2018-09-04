import React, { Fragment } from "react";
import { InputAdornment, TextField } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { inject, observer } from "mobx-react";

import SearchStatus from "./search-status";
import ResultsList from "./results-list";
/*
  the provider component allows us to access the store instance 
  at level in the component treee. The SearchTextField component 
  makes use of it to become an observer of the store. 

  The component observes the property "term" from the store
   and updates itself when it changes. The change is handled as part
   of the onChange handler of the textField
*/
@inject("store")
@observer
export default class SearchTextField extends React.Component {
  render() {
    // trace(true);

    const { store, onChange } = this.props;
    const { term } = store;

    return (
      <Fragment>
        <TextField
          placeholder={"Search Books..."}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
          fullWidth={true}
          value={term}
          onChange={onChange}
          onKeyUp={this.onKeyUp}
        />
        <SearchStatus />
      </Fragment>
    );
  }

  onKeyUp = event => {
    if (event.keyCode !== 13) {
      return;
    }
    this.props.onEnter();
  };
}
