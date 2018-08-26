import { BrowserRouter, NavLink, Route } from "react-router-dom";
import React, { Fragment } from "react";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
import theme from "@material-ui/core/colors/indigo";
import PropTypes from "prop-types";
import { allExamples, sections } from "./sections";
import DevTools from "mobx-react-devtools";

export class LearningApp extends React.Component {
  render() {
    return (
      <Fragment>
        <DevTools />
        <BrowserRouter>
          <Grid container spacing={16}>
            <SectionAppBar
              title={this.props.title}
              sourceCodeUrl={this.props.sourceCodeUrl}
            />
            <Grid item xs={4}>
              <SectionList sections={sections} />
            </Grid>
            <Grid item xs={8}>
              <Route component={EntrySplash} path={"/"} exact={true} />
              {allExamples.map(ex => <SectionRoute key={ex.path} ex={ex} />)}
            </Grid>
          </Grid>
        </BrowserRouter>
      </Fragment>
    );
  }
}

function SectionAppBar({ title, sourceCodeUrl }) {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <NavLink
          to={"/"}
          activeStyle={{
            textDecoration: "none"
          }}
        >
          <Typography
            variant="title"
            style={{
              color: "white",
              justifyContent: "center"
            }}
          >
            {title}
          </Typography>
        </NavLink>
        <Button
          style={{ color: "white", margin: "0 1rem" }}
          href={sourceCodeUrl}
          size={"small"}
        >
          Github Source
        </Button>
      </Toolbar>
    </AppBar>
  );
}

const SectionList = ({ sections }) => {
  return (
    <List dense>
      {sections.map(({ examples, section, title }) => (
        <div key={section} style={{ marginBottom: "2rem" }}>
          <ListSubheader disableSticky>
            <Typography color={"textSecondary"}>{title}</Typography>
          </ListSubheader>
          {examples.map(ex => (
            <ListItem
              key={ex.path}
              divider
              button
              component={NavLink}
              activeStyle={{
                background: theme["500"],
                color: theme["50"]
              }}
              to={ex.path}
            >
              <Typography color={"inherit"} variant={"body2"}>
                {ex.title}
              </Typography>
            </ListItem>
          ))}
        </div>
      ))}
    </List>
  );
};

function SectionRoute({ ex }) {
  return (
    <Route
      path={ex.path}
      component={() => (
        <Fragment>
          <Card
            style={{
              marginBottom: "2rem",
              backgroundColor: theme["50"]
            }}
          >
            <CardContent>
              <Typography
                color={"textSecondary"}
                variant={"body2"}
                align={"left"}
              >
                {`Section ${ex.sectionIndex}: ${ex.sectionTitle}`}
              </Typography>
              <Typography color={"primary"} variant={"headline"} align={"left"}>
                {" "}
                {`Example: ${ex.title}`}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography variant={"subheading"} color={"textSecondary"}>
                If you don't see any visible output here, check the console in
                your <strong>DevTools</strong>
              </Typography>
            </CardContent>
          </Card>
          <ex.component />
        </Fragment>
      )}
    />
  );
}

function EntrySplash() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography variant={"title"}>MobX QuickStart Guide</Typography>

      <Typography variant={"caption"} style={{ marginTop: "3rem" }}>
        Built using React, React Router, Material-UI and <strong>MobX</strong>{" "}
      </Typography>
    </div>
  );
}

LearningApp.propTypes = {
  title: PropTypes.string,
  sourceCodeUrl: PropTypes.string
};
