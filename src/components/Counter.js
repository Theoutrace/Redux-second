import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/Counter';
import classes from './Counter.module.css';


const Counter = () => {

  const counter = useSelector((state)=> state.counter.counter)     // this is the current state value
  // console.log(counter);
  const show = useSelector((state)=> state.counter.showCounter)

  const dispatch = useDispatch()


  const incrementHandler = ()=>{
    dispatch(counterActions.increment())               // we dispatch the object of which is called action and can have multiple values
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement())
  }

  const increaseHandler = ()=>{
    dispatch(counterActions.increase(10))      // properties are called payload
    //  this 'action' gets passed like this as {type: SOME_UNIQUE_IDENTIFIERS, payload: 10} so need to access this in same way
  }


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by given value</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// useSelector: automatically select a part of the state managed by the store
// automatically sets up the subscription to the redux store for this component and component receives latest counter automatically on change.
// returns the returned value from the func passed in selector.
