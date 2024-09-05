import React, { useContext, useReducer, useState } from 'react'
import { One } from './One';
import Two from './Two';
// import { DoubleInc } from './store';
import { Link } from 'react-router-dom';
import { DoubleIncrement } from '../App';

const Header = ({ ToToggle }) => {
    const [count, setcount] = useState(0);
    // console.log(theme);
    const handleChange = () => {
        setcount(count => count + 1);
    }
    const { DoubleState, doubleDispatch } = useContext(DoubleIncrement);
    
  return (
    <div>
        <h1>This is button</h1>
        <button onClick={handleChange}>
            Click to Increment
        </button>
        <h1>{count}</h1>
        <h1>this is color chang ing button</h1>
        <button onClick={ToToggle}>Click here to change the color of the button</button>
        <One />
        <Two />
        <h1>{ DoubleState }</h1>
        <button onClick={() => doubleDispatch('inc')} >Increment</button>
        <button onClick={() => doubleDispatch('dec')} >Decrement</button>
        <Link to={'/ref'}>Click</Link>
    </div>
  )
}

export default Header