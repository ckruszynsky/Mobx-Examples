import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";
import React from "react";
import {
  AppBar,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Toolbar,
  Typography,
  Button
} from "@material-ui/core";
export const CreateObservableExample = asComponent(() => {
  //creating an observable item
  //changes to its properties will be tracked
  const item = observable({
    name: "Computer",
    id: "1234",
    quantity: 2,
    price: 500,
    coupon: {
      code: "CHEAPCOMPUTER",
      discountPercent: 50
    }
  });

  //set values on the observable
  item.quantity += 3;
  item.name = "HP Computer";

  //retrieve the values
  console.log(`Buying ${item.quantity} of ${item.name}`);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline">Notes</Typography>
          <List>
            <ListItem>
              <ListItemText>
                observable objects only track the properties provided in the
                inital value given to "observable"
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Any properties added after the observable is created will not be
                tracked.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                observable objects only track the properties provided in the
                inital value given to "observable"
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
});
