import React from 'react'
import classes from "./SimpleButton.module.css"

const SimpleButton = ({children, weight = 400, size = 1.4, onClickFunc}) => {
  return (
    <button className={classes.simpleButton} onClick={onClickFunc}>
      <p style={
        {
          fontWeight: weight,
          fontSize: size + 'vmax',
        }
      }>{children}</p>
    </button>
  )
}

export default SimpleButton
