import React from "react";
import { connect } from "react-redux";

function ReduxCounter() {
  return (
    <div>
      <h3>React Counter Component !</h3>
    </div>
  );
}
export default connect()(ReduxCounter);
