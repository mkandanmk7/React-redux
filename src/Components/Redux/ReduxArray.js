import React from "react";
import { connect } from "react-redux";
import { Push, Pop, Empty } from "../store";

function ReduxArray(props) {
  console.log(props);
  return (
    <div>
      <h3>Redux Array Component !</h3>
      <button onClick={() => props.dispatch({ type: Push })}>PUSH</button>
      <button onClick={() => props.dispatch({ type: Pop })}>Pop</button>
      <button onClick={() => props.dispatch({ type: Empty })}>PUSH</button>
      <p>
        {props.number.map((num) => {
          return <span key={num}>{num} ,</span>;
        })}
      </p>
      {/* <ul>
        <li>Numbers: {props.number}</li>
      </ul> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.arrayReducer;
};

export default connect(mapStateToProps)(ReduxArray);
