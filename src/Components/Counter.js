import React from "react";
import { store } from "./store";

export const Counter = () => {
  console.log(store);
  return (
    <div>
      <h2>Counter Component</h2>
    </div>
  );
};
