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

// Name array  actions:

const push = "push";
const pop = "pop";

const empty = "empty";

const arrayReducer = (state = { number: [] }, action) => {
  switch (action.type) {
    case push: {
      const numbers = [...state.number];
      numbers.push(Math.floor(Math.random()));
      return { number: numbers };
    }
    case pop: {
      const numbers = [...state.number];
      numbers.pop();

      return { number: numbers };
    }
    case empty: {
      return { number: [] };
    }
    default: {
      return state;
    }
  }
};

export const store = Redux.createStore(countReducer, arrayReducer);
