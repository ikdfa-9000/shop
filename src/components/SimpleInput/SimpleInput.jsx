import React from 'react'
import classes from './SimpleInput.module.css'

const SimpleInput = ({text, inputVal, setInputValFunc, isRequired = true}) => {
  return (
    <div className={classes.inputDiv}>
      <p className={classes.inputText}>{text + ":"}</p>
      <input 
        type='text'
        className={classes.inputInput}
        value={inputVal}
        required={isRequired}
        onChange={(e) => setInputValFunc(e.target.value)}
      ></input>
    </div>
  )
}

export default SimpleInput
