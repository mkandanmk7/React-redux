import React from "react";
import { store } from "./store";

export const Counter = () => {
  console.log(store);
  console.log(store.getState()); // current state count value; 0
  return (
    <div>
      <h2>Counter Component</h2>
    </div>
  );
};
