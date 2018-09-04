import React, { Fragment } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import SearchTextField from "./components/search-textfield";
import ResultsList from "./components/results-list";
/*
  the inject creates a HOC that binds the store observable 
  to the React Component; which means inside the render
  of th app component, the "store" property will be available
  to the props object
*/
@inject("store")
@observer
export default class BookSearchApp extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <Fragment>
        <Header />
        <Grid container>
          <Grid item xs={12}>
            <Paper elevation={2} style={{ padding: "1rem" }}>
              <SearchTextField
                onChange={this.updateSearchText}
                onEnter={store.search}
              />
            </Paper>
          </Grid>
          <ResultsList style={{ marginTop: "2rem" }} />
        </Grid>
      </Fragment>
    );
  }

  updateSearchText = event => {
    this.props.store.setTerm(event.target.value);
  };
}

function Header() {
  return (
    <Typography
      variant="title"
      color="inherit"
      style={{ marginBottom: 20, textAlign: "center" }}
    >
      MobX React Book Store
    </Typography>
  );
}

/*
  The provider component established the connection 
  with the observables and uses the react context
  to propagate the store any component wrapped by the inject()
  decorator. 
*/
