import "./App.css";
import { Counter } from "./Components/Counter";
import Name from "./Components/Name";
// import store from "./Components/store";

function App() {
  return (
    <div className="App">
      <h2>Redux Learning ...</h2>
      <Counter />
      <Name />
    </div>
  );
}

export default App;
