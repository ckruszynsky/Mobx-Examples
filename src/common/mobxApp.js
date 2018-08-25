import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
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
} from '@material-ui/core';
import theme from '@material-ui/core/colors/indigo';
import DevTools from 'mobx-react-devtools';

export class MobXExampleApp extends React.Component {
  render(){
    return (
      <Fragment>
       <DevTools />
       <BrowserRouter>
         <Grid container spacing={16}>
           <ExampleAppBar />
           <Grid item xs={4}>
            <Route 
              compnent={EntrySplash}
              path={'/'}
            />
            {examples.map(ex => (
               <ExampleRoute key={ex.path} ex={ex} />
            ))}
          </Grid>
         </Grid>
        </BrowserRouter>
      </Fragment>
    )
  }
}


function ExampleAppBar() {
  return(
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <NavLink
          to={'/'}
          activeStyle={{
            textDecoration: 'none',
          }}
        >
          <Typography
            variant="title"
            style={{
              color: 'white',
              justifyContent: 'center',
            }}
          >
            MobX QuickStart Guide
          </Typography>
        </NavLink>
        <Button style={{color: 'white', margin: '0 1rem' }}
             href={}
        </Toolbar>
    </AppBar>
  )
}