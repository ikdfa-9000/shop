import React from 'react'
import classes from "./ProductDescription.module.css"
import SimpleButton from '../SimpleButton/SimpleButton'

const ProductDescription = ({name, price, description}) => {
  return (
    <div className={classes.productDescrDiv}>
      <div className={classes.mainInfo}>
        <div className={classes.nameAndPrice}>
          <h1 className={classes.productName}>{name}</h1>
          <h1 className={classes.productPrice}>{price + "$"}</h1>
        </div>
          <p className={classes.productDescription}>{description}</p>
      </div>
      <div className={classes.addToCart}>
        <SimpleButton size={4} weight={500}>ADD TO CART</SimpleButton>
      </div>
    </div>
  )
}

export default ProductDescription
