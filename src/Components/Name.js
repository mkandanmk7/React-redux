import { store } from "./store";

export default function Name() {
  console.log(store.getState());

  store.dispatch({ type: "push" });
  store.dispatch({ type: "push" });
  console.log(store.getState());
  store.dispatch({ type: "pop" });
  console.log(store.getState());
  store.dispatch({ type: "empty" });
  console.log(store.getState());
  return <p>Name Component</p>;
}
