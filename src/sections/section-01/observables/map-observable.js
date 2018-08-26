import { observable } from "mobx";
import { asComponent } from "../../../common/as-component";

export const MapObservableExample = asComponent(() => {
  //create an observable map
  const twitterUserMap = observable.map();

  console.log(twitterUserMap.size); //Prints: 0

  //Add keys
  twitterUserMap.set("shanselman", "Scott Hanselman");
  twitterUserMap.set("dan_abramov", "Dan Abramov");

  console.log(twitterUserMap.get("shanselman")); //Prints: Scott Hanselman
  console.log(twitterUserMap.get("dan_abramov")); //Prints: Dan Abramov

  twitterUserMap.forEach((value, key) => console.log(`${key}:${value}`));
  //prints
  //shanselman : Scott Hanselman
  //dan_abramov: Dan Abramov

  //non-deep observable maps (shallow observable)
  console.log(`Unobservable map`);

  var userMap = new Map();
  userMap.set("unclebobmartin", { name: "Uncle Bob Martin" });
  userMap.set("thecleancoders", { name: "Clean Coders" });

  //passing in { deep: false } as an option, you effectively prune the observablility
  //just to the first level
  //MobX only observes the initial set of properties
  const nonObservableTwitterUserMap = observable.map(userMap, { deep: false });

  console.log(nonObservableTwitterUserMap.size);

  nonObservableTwitterUserMap.forEach((value, key) => {
    console.log(`${key}: ${JSON.stringify(value)}`);
  });

  var user = nonObservableTwitterUserMap.get("unclebobmartin");
  user.name = "Bob Martin";

  //prints bob martin change
  nonObservableTwitterUserMap.forEach((value, key) => {
    console.log(`${key}: ${JSON.stringify(value)}`);
  });
});
/*
 When you use the observable() API, MobX will apply deep obserability to the observable
 instance. Which means it will track changes happening to the observable object,
 array, or map and do it for every property, at every level.

 There will be cases where you don't want this default behavior; you can change this behavior
 at the time of creating the observable. Instead of using observable(), you can use the sibling
 APIs (observable.object() , observable.array(), observable.map()) to create the observable.

 Each of these APIs takes an extra argument for setting options on the observable instance. 

*/
