import React from 'react'
import ProductIcon from '../ProductIcon/ProductIcon'
import classes from "./ProductsList.module.css"

const ProductsList = ({goodielist}) => {
  return (
    <div className={classes.productsContainer}>
      {goodielist.map((goodie) => 
      (<ProductIcon key={goodie.id} id={goodie.id} imgLink={`/${goodie.images[0]}`} name={goodie.name} price={goodie.price}></ProductIcon>))}
    </div>
  )
}

export default ProductsList
