import React from "react";
import { connect } from "react-redux";
import { Push, Pop, Empty } from "../store";

function ReduxArray(props) {
  console.log(props);
  return (
    <div>
      <h3>Redux Array Component !</h3>
      <ul>
        <li>Numbers: {props.number}</li>
      </ul>
      <button onClick={() => props.dispatch({ type: Push })}>PUSH</button>
      <button onClick={() => props.dispatch({ type: Pop })}>Pop</button>
      <button onClick={() => props.dispatch({ type: Empty })}>PUSH</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.arrayReducer;
};

export default connect(mapStateToProps)(ReduxArray);
