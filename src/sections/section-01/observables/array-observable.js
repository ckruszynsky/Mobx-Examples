import { observable, toJS } from "mobx";
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

export const ArrayObservableExample = asComponent(() => {
  const items = observable.array(); // Start with empty array

  console.log(items.length); // Prints: 0

  items.push({
    name: "hats",
    quantity: 40
  });

  // Add one in the front
  items.unshift({ name: "Ribbons", quantity: 2 });

  // Add at the back
  items.push({ name: "balloons", quantity: 1 });

  console.log(items.length); // Prints: 3

  console.log(items);
  const plainArray = toJS(items);
  console.log(plainArray);

  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="headline">Notes</Typography>
          <List>
            <ListItem>
              <ListItemText>
                <b>**IMPORTANT***</b>
                <br />
                obsevable array is not a real JS array, even though the API is
                the same as a JS Array.
                <br />
                when passing this array to other libraries or APIs, convert it
                into a JS Array by calling toJS()
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Observable automatically converts an object, array, or a map
                into an observable. <br /> For primitives and functions use :
                observable.box
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                MobX uses deep observability when creating an observable.<br />
                Which means MobX will automatically observe every property, at
                every level, in the object tree. <br />
                Observables will track the addition and removal of items to
                arrays. <br />
                You can override this behavior by using special decorators.
              </ListItemText>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </div>
  );
});
