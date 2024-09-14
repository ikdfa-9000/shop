import React from 'react'
import classes from "./ProductIcon.module.css"
import { Link } from 'react-router-dom'

const ProductIcon = ({imgLink, name = "placeholder name", price = "free?", id}) => {
  return (
    <Link className={classes.link} to={`/view/${id}`}>
      <div className={classes.iconContainer}>
        <div className={classes.imageDiv}>
          <img src={imgLink} className={classes.image} alt="product image" />
        </div>
        <div className={classes.infoDiv}>
          <p className={classes.name}>{name}</p>
          <p className={classes.price}>{price + "$"}</p>
        </div>
      </div>
    </Link>
  )
}

export default ProductIcon
