import React from 'react'
import classes from "./ErrorPage.module.css"
import { Link } from 'react-router-dom'
import WelcomePage from '../welcome/WelcomePage'

const ErrorPage = ({text = "Page is not found. Are you sure you're not a right address?"}) => {
  return (
    <div className={classes.divCenterer}>
      <div className={classes.info}>
        <h1>{text}</h1>
        <Link to="/" className={classes.clickMe}>
            Click here to go to home page
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
