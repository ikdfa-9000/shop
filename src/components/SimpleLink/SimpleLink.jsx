import React from 'react'
import classes from "./SimpleLink.module.css"
import { Link } from 'react-router-dom'

const SimpleLink = ({size = 2, isBold = true, dest="", children}) => {
  const pWeight = isBold ? 900 : 500
  return (
    <Link className={classes.simpleButton} to={dest}>
      <p style={
        {
          fontSize: size + "vmax",
          fontWeight: pWeight,
          float: "left"
        }
      }>{children}</p>
    </Link>
  )
}

export default SimpleLink
