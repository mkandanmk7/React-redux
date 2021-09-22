import React from "react";
import { connect } from "react-redux";

// React-redux operations:

function ReduxCounter(props) {
  console.log(props);
  return (
    <div>
      <h3>React Counter Component !</h3>
      <p>count: {props.count}</p>
      <button onClick={() => props.dispatch({ type: "inc" })}>Inc</button>
      <button onClick={() => props.dispatch({ type: "dec" })}>Dec</button>
      <button onClick={() => props.dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

// mapping state [ stored in  (store)] to ReduxCounter comp's props...
const mapStateToProps = (state) => {
  //   console.log(state);
  return state.countReducer;
};

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(ReduxCounter);

//connect(two params functions) (mapStateToprops) (mapDispatchToProps)
