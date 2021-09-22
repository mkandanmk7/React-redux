import React from "react";
import { connect } from "react-redux";

function ReduxArray(props) {
  console.log(props);
  return (
    <div>
      <h3>Redux Array Component !</h3>
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.arrayReducer;
};

export default connect(mapStateToProps)(ReduxArray);
