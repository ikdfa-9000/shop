import React from 'react'
import SimpleLink from '../SimpleLink/SimpleLink'
import classes from './InfoBanner.module.css'

const InfoBanner = ({pageName, productCost}) => {
  return (
    <>
      <div className={classes.productInfo}>
        <h1 className={classes.bannerName}>{pageName}</h1>
        <h1 className={classes.productCost}>{productCost}$</h1>
      </div>
      <div className={classes.cartLink} >
        <SimpleLink size={1.4} isBold={false}>ADD TO CART</SimpleLink>
      </div>
    </>
  )
}

export default InfoBanner
