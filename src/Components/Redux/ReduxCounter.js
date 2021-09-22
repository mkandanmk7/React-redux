import React from "react";
import { connect } from "react-redux";
import { Dec, Inc, Reset } from "../store";

// React-redux operations:

function ReduxCounter(props) {
  console.log(props);
  return (
    <div>
      <h3>React Counter Component !</h3>
      <p>count: {props.count}</p>
      <button onClick={props.inc}>Inc</button>
      <button onClick={props.dec}>Dec</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

// mapping state [ stored in  (store)] to ReduxCounter comp's props...
const mapStateToProps = ({ countReducer }) => {
  //   console.log(state);
  return countReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    inc: () => dispatch({ type: Inc }),
    dec: () => dispatch({ type: Dec }),
    reset: () => dispatch({ type: Reset }),
  };
};

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxCounter);

//connect(two params functions) (mapStateToprops) (mapDispatchToProps)
