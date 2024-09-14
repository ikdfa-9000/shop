import React, { useContext, useEffect } from 'react'
import classes from './ExtraButtons.module.css'
import SimpleLink from '../SimpleLink/SimpleLink'

const ExtraButtons = ({isAccountNeeded = true, isCartNeeded = true, isSignedIn = false}) => {
  return (
    <div className={classes.extraButtons}>
      {isAccountNeeded ? 
        <SimpleLink dest={isSignedIn ? "/account" : "/login"} size={1.4} isBold={false}>
          { isSignedIn ? "account" : "login"}
        </SimpleLink> : <div></div>}
      {isCartNeeded ? <SimpleLink size={1.4} isBold={false}>cart</SimpleLink> : <div></div>}
    </div>
  )
}

export default ExtraButtons
