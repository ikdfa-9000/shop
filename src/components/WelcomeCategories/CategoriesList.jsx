import React from 'react'
import SimpleLink from '../SimpleLink/SimpleLink'
import classes from './CategoriesList.module.css'

const CategoriesList = () => {
  const buttonsList = [
    {
      id: 1,
      name: "t-shirts",
      isBold: false,
      dest: "products/tshirts"
    },
    {
      id: 2,
      name: "hoodies",
      isBold: false,
      dest: "products/hoodies"
    },
    {
      id: 3,
      name: "hats",
      isBold: false,
      dest: "products/hats"
    },
    {
      id: 4,
      name: "all",
      isBold: true,
      dest: "products/all"
    }
  ]
  return (
    <div className={classes.listDiv}>
      <div className={classes.listPositioner}>
        { buttonsList.map((button) => (<SimpleLink key={button.id} isBold={button.isBold} dest={button.dest}>{button.name}</SimpleLink>)) }
      </div>
    </div>
  )
}

export default CategoriesList
