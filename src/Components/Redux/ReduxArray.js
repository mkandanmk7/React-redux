import React from "react";
import { connect } from "react-redux";

function ReduxArray() {
  return (
    <div>
      <h3>Redux Array Component !</h3>
    </div>
  );
}
export default connect()(ReduxArray);
