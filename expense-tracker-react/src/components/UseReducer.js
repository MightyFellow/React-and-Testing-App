import React, { useReducer } from "react";

//reducer takes in 2 args state => current state and action=> to perform some action on the state
const initialState = 0;
const reducer = (state, action) => {
  console.log(state, action);
  if (action.type === "INCREMENT") return state + 1;
  else if (action.type === "DECREMENT") return state - 1;
  else return state;
};

export const UseReducer = () => {
  //   const [count, setCount] = useState(0);

  // state here is the current state
  const [state, dispatch] = useReducer(reducer, initialState);

  function decrement() {
    dispatch({ type: "DECREMENT" });
  }
  function increment() {
    dispatch({ type: "INCREMENT" });
  }
  return (
    <div>
      <button onClick={decrement}>Dec</button>
      <span>{state}</span>
      <button onClick={increment}>Inc</button>
    </div>
  );
};
