import "./App.css";
import { Provider } from "react-redux";
import ReduxCounter from "./Components/Redux/ReduxCounter";
import ReduxArray from "./Components/Redux/ReduxArray";
import { store } from "../src/Components/store";
// import { Counter } from "./Components/Counter";
// import Name from "./Components/Name";
// import store from "./Components/store";

function App() {
  return (
    // wrapper
    <Provider store={store}>
      <div className="App">
        <h2>Redux Learning ...</h2>
        {/* <Counter />
      <Name /> */}
        <ReduxCounter />
        <ReduxArray />
      </div>
    </Provider>
  );
}

export default App;
