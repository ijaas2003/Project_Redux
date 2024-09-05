import React, { useContext, useReducer } from 'react'
import { useRef } from 'react'
import { DoubleInc } from './store';
import { Link } from 'react-router-dom';
import { DoubleIncrement } from '../App';
const Ref = () => {
    const textAreaRef = useRef(null);
    const HandleChange = () => {
        textAreaRef.current.value = "This is the content";
        textAreaRef.current.focus();
    } 
    const [state, dispatch] = useReducer(DoubleInc, 0);

    const ForwardTextArea = React.forwardRef((props, ref) => {
        return (
            <div>
                <h1> This is forwared Ref</h1>
                <textarea ref={ref}></textarea>
            </div>
        )
    })



    const { DoubleState, doubleDispatch } = useContext(DoubleIncrement)

  return (
    <div>
        <button onClick={ HandleChange }>Click to SetRef</button>
        <textarea ref={textAreaRef}  name="" id=""></textarea>
        <h1>Forwared TextArea</h1>
        <ForwardTextArea ref={textAreaRef}></ForwardTextArea>
        <h1>{ DoubleState }</h1>

        <Link to={'/'} >back</Link>
    </div>
  )
}

export default Ref