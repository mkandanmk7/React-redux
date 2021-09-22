import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dec, Inc, Reset } from "./store";

// React-redux operations:

function UseReduce() {
  // no need props here
  const count = useSelector(({ countReducer }) => countReducer.count);
  //   const numbers = useSelector(({ arrayReducer }) => arrayReducer.number);

  const dispatch = useDispatch();
  console.log(count);
  //   console.log(numbers);

  //operations:

  const inc = () => dispatch({ type: Inc });
  const dec = () => dispatch({ type: Dec });
  const reset = () => dispatch({ type: Reset });

  return (
    <div>
      <h3>
        React <b>Use Selector Hooks</b> Counter Component !
      </h3>
      <p>count: {count}</p>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

// no need here in useSelector Use dispatch hooks:

// mapping state [ stored in  (store)] to ReduxCounter comp's props...
// const mapStateToProps = ({ countReducer }) => {
//   // console.log(state);
//   return countReducer;
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch({ type: Inc }),
//     dec: () => dispatch({ type: Dec }),
//     reset: () => dispatch({ type: Reset }),
//   };
// };

// const mapDispatchToProps = () => {};

export default UseReduce;

//connect(two params functions) (mapStateToprops) (mapDispatchToProps)
