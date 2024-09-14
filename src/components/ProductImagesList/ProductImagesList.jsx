import React from 'react'
import classes from "./ProductImagesList.module.css"

const ProductImagesList = ({imageArr, imageNumberChanger, imageActiveId}) => {
  return (
    <div className={classes.imagesContainer}>
      {imageArr.map((image, index) => {
        return (
          <img
            key={index}
            src={`/${image}`}
            className={index === imageActiveId? classes.imageActiveButton : classes.imageInactiveButton}
            onClick={() => imageNumberChanger(index)}
          />
        )
      }
      )}
    </div>
  )
}

export default ProductImagesList
