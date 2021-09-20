import * as Redux from "redux";

//actions:

const Inc = "inc";
const Dec = "dec";
const Reset = "reset";

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case Inc: {
      return { count: state.count + 1 };
    }
    case Dec: {
      return { count: state.count - 2 };
    }
    case Reset: {
      return { count: 0 };
    }
    default: {
      return state;
    }
  }
};

export const store = Redux.createStore(countReducer);
