import React, { useContext, useReducer } from 'react'
import { Inrement } from './store';
import { DoubleIncrement } from '../App';


const Counter = () => {
    const [state, dispatch] = useReducer(Inrement, 0);
    const {DoubleState, doubleDispatch} = useContext(DoubleIncrement);
    // console.log(vals);
  return (
    <div>
        <h1>{ state }</h1>
        <button onClick = {() => dispatch('inc')} > Increment </button>
        <button onClick = {() => dispatch('dec')} >Decrement</button>
        <div>Count</div>
        <h1>this is double using use Context</h1>
        <h1>{ DoubleState }</h1>
        <button onClick={() => doubleDispatch('inc')}>Double Increment</button>

    </div>
  )
}

export default Counter