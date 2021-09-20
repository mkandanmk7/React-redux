import * as Redux from "redux";

//actions:

const Inc = "inc";
const Dec = "dec";
const Reset = "reset";

const countReducer = (state = { count: 0 }, action) => {
  //   console.log(state); //initailly state is undefined so its takes count:0 ;

  switch (action.type) {
    case Inc: {
      return { count: state.count + 1 };
    }
    case Dec: {
      return { count: state.count - 1 };
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
