import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { LearningApp } from "./common/LearningApp";
import { store } from "./sections/section-02/book-store";

ReactDOM.render(
  <Provider store={store}>
    <LearningApp
      title="Learning MobX"
      sourceCodeUrl="https://github.com/ckruszynsky/Mobx-Examples"
    />
  </Provider>,
  document.getElementById("root")
);
