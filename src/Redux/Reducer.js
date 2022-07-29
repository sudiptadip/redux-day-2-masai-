import { Decrement, Falior_data, Incerment, Succsss_data } from "./Actiontype";
import { Store } from "./Store";

const initialvalue = {
    counter: 5,
    data: [],
    isload: false
}

const Reducer = (oldState = initialvalue, action) => {
  switch (action.type) {
    case Incerment:
      return { ...oldState, counter: oldState.counter + action.payload };
    case Decrement:
      return { ...oldState, counter: oldState.counter - action.payload };
    case Succsss_data:
      return {...oldState, data: [action.payload], isload: false}
    case Falior_data:
      return {...oldState, isload: false}
    case "loading":
      return {...oldState, isload: true}
    default:
      return oldState;
  }
};

export { Reducer };
