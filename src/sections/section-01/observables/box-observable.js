import { observable } from "mobx";
import React from "react";
import { asComponent } from "../../../common/as-component";
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography
} from "@material-ui/core";

export const BoxObservableExample = asComponent(() => {
  const count = observable.box(20);

  //get the count
  console.log(`Count is ${count.get()}`);

  //change count
  count.set(22);
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline">Notes</Typography>
          <List>
            <ListItem>
              <ListItemText>
                Box observables are used when creating observables for primitive
                values.
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Box observables must use get() & set() methods instead of
                directly reading or assigning to it.
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
});
