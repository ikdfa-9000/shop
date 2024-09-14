import React, { useState } from 'react'
import classes from './ProductPageNav.module.css'
import SimpleLink from '../SimpleLink/SimpleLink'
import InfoBanner from './InfoBanner'
import PhraseBanner from './PhraseBanner'
import { useContext, useEffect } from 'react'
import { SignInContext } from '../../App'

const ProductPageNav = ({pageName = "product page", productCost = "FORGOR"}) => {
  const [isInfoNeeded, setIsInfoNeeded] = useState(false)
  const [isSignedIn] = useContext(SignInContext)
  return (
    <div className={classes.navContainer}>
      <div style={{marginLeft: "30px"}}>
        <SimpleLink size={1.4} dest='..'>{"<<"}</SimpleLink>
      </div>
      { isInfoNeeded ? <InfoBanner pageName={pageName} productCost={productCost}></InfoBanner> : <PhraseBanner isSignedIn={isSignedIn}></PhraseBanner> }
    </div>
  )
}

export default ProductPageNav
