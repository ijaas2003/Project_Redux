import React, { useContext } from 'react'
import { ThemeContext } from '../App';

export const One = () => {
    const theme = useContext( ThemeContext );
    const darkTheme = {
        height: "200px",
        width: "200px",
        padding: "20px",
        margin: "20px",
        color: theme ? "#fff" : "#000",
        backgroundColor: theme ? "#000" : "#fff"
    }
  return (
    <div>
        <div style={ darkTheme }>
            this is the implementation
        </div>
    </div>
  )
}
