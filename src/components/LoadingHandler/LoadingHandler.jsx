import React from 'react'
import classes from './LoadingHandler.module.css'

const LoadingHandler = (props) => {
  if (props.hasError) {
    return (
      <div className={classes.textCenterer}>
        <h1>Connection error...</h1>
      </div>)
  }
  else {
    return (
      <div className={classes.textCenterer}>
        <h1>Loading...</h1>
      </div>)
  }
}

export default LoadingHandler
