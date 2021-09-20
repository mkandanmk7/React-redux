import React from "react";
import { store } from "./store";

export const Counter = () => {
  console.log(store);
  console.log(store.getState()); // current state count value; 0
  console.log(store.dispatch({ type: "inc" })); // count inc = 1
  console.log(store.dispatch({ type: "inc" })); // 2
  console.log(store.dispatch({ type: "inc" })); // 3
  console.log(store.getState()); //  curretn state value : 3

  return (
    <div>
      <h2>Counter Component</h2>
    </div>
  );
};
