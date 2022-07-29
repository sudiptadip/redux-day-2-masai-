import React from "react";
import { useState } from "react";
import { Store } from "../Redux/Store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Counter() {
  //  const { dispatch } = Store;
  //  const [data, setData] = useState(0);

  const counter = useSelector((st) => st.counter);

  const dispatch = useDispatch();

  // Store.subscribe(() => {
  //   setData(Store.getState().counter);
  // });

  return (
    <div>
      <h1>Counter :- {counter}</h1>
      <button onClick={() => dispatch({ type: "inc", payload: 1 })}>
        Increment
      </button>
      <button  onClick={() => dispatch({ type: "dec", payload: 1 })}>
        Decrement
      </button>
    </div>
  );
}
