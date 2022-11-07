import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()


  const incrementHandler = ()=>{
    dispatch({ type: 'increment'})
  }

  const decrementHandler = ()=>{
    dispatch({ type: 'decrement'})
  }

  const incrementByFiveHandler = ()=>{
    dispatch({type: 'incrementBy5'})
  }
  const decrementByFiveHandler = ()=>{
    dispatch({type: 'decrementBy5'})
  }


  // const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementByFiveHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={decrementByFiveHandler}>Decrement by 5</button>
      </div>
      <button onClick={'toggleCounterHandler'}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// useSelector: automatically select a part of the state managed by the store
// automatically sets up the subscription to the redux store for this component and component receives latest counter automatically on change.
// returns the returned value from the func passed in selector.
