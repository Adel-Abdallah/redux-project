import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({
      type: "increment"
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 10
    });
  };

  const decrementHandler = () => {
    dispatch({
      type: "decrement"
    });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {counter} --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={increaseHandler}>+10</button>
        <button onClick={decrementHandler}>-</button>
      </div>
    </main>
  );
};

export default Counter;
