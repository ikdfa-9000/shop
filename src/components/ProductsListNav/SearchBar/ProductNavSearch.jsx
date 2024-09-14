import React, { useState } from 'react'
import classes from "./ProductNavSearch.module.css"

const ProductNavSearch = ({searchText, setSearchText}) => {
  return (
    <div className={classes.productNavSearch}>
      <input 
        className={classes.searchInput} 
        type="text" 
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
        placeholder='you type words here'></input>
    </div>
  )
}

export default ProductNavSearch
