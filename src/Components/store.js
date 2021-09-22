import * as Redux from "redux";

//actions:

export const Inc = "inc";
export const Dec = "dec";
export const Reset = "reset";

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

export const Push = "push";
export const Pop = "pop";

export const Empty = "empty";

const arrayReducer = (state = { number: [1] }, action) => {
  switch (action.type) {
    case Push: {
      const numbers = [...state.number];
      numbers.push(Math.floor(Math.random() * 10));
      return { number: numbers };
    }
    case Pop: {
      const numbers = [...state.number];
      numbers.pop();

      return { number: numbers };
    }
    case Empty: {
      return { number: [0] };
    }
    default: {
      return state;
    }
  }
};

const rootReducer = Redux.combineReducers({ countReducer, arrayReducer }); //every components gets store state details ;

export const store = Redux.createStore(rootReducer);
