import React from 'react'
import { ThemeContext } from '../App'

const Two = () => {
    const theme = React.useContext(ThemeContext);
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
            this is the implementations of sec
        </div>
    </div>
  )
}

export default Two