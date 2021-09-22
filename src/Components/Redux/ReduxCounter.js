import React from "react";
import { connect } from "react-redux";

// React-redux operations:

function ReduxCounter(props) {
  console.log(props);
  return (
    <div>
      <h3>React Counter Component !</h3>
    </div>
  );
}

// mapping state [ stored in  (store)] to ReduxCounter comp's props...
const mapStateToProps = (state) => {
  //   console.log(state);
  return { counter: state.countReducer.count };
};

// const mapDispatchToProps = () => {};

export default connect(mapStateToProps)(ReduxCounter);

//connect(two params functions) (mapStateToprops) (mapDispatchToProps)
