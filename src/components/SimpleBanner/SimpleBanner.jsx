import React from 'react'
import SimpleLink from '../SimpleLink/SimpleLink'
import classes from './SimpleBanner.module.css'
import ExtraButtons from '../ExtraButtons/ExtraButtons'

const SimpleBanner = ({phrase}) => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.navContent}>
        <div style={{marginLeft: "30px"}}>
          <SimpleLink size={1.4} dest='..'>{"<<"}</SimpleLink>
        </div>
          <h1 className={classes.phrase}>{phrase}</h1>
        <ExtraButtons isAccountNeeded={false} isCartNeeded={false}></ExtraButtons>
      </div>
    </div>
  )
}

export default SimpleBanner
