import React, { useState } from 'react'

const Child = ({ name, setname }) => {
    return (
        <div>
            <h1>This is { name }</h1>
            <input type='text' onChange={(e) => setname(e.target.value)} value={name}/>
        </div>
    );
}

const LearnProps = () => {
    const [name, setname] = useState("");
  return (
    <div>
        { name === "" 
            ? <h1>The name is empty please enter name</h1>   
            : <h1>Yur Name is : { name }</h1>
        }
        
        <input type='text' onChange={(e) => setname(e.target.value)} value={name}/>
        <Child name={ name } setname={setname} />
    </div>
  )
}

export default LearnProps