import React, { Fragment } from "react";
import { inject, observer } from "mobx-react";
import { LinearProgress, Typography } from "@material-ui/core";

/*
  The search status uses the inject of the store 
  to observe the change on the term and the status

  when the store.status changes only the virtual-DOM for SearchStatus changes
  re-rendering just this component
*/
@inject("store")
@observer
export default class SearchStatus extends React.Component {
  render() {
    const { status, term } = this.props.store;
    return (
      <Fragment>
        {status === "pending" ? <LinearProgress variant={"query"} /> : null}
        {status === "failed" ? (
          <Typography
            variant={"subheading"}
            style={{ color: "red", marginTop: "1rem" }}
          >
            {`Failed to fetch results for "${term}"`}
          </Typography>
        ) : null}
      </Fragment>
    );
  }
}
