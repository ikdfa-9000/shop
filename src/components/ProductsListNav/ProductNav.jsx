import React from 'react'
import { useState, useContext } from 'react'
import classes from "./ProductNav.module.css"
import ProductNavSearch from './SearchBar/ProductNavSearch'
import SimpleButton from '../SimpleButton/SimpleButton'
import SimpleLink from '../SimpleLink/SimpleLink'
import ExtraButtons from '../ExtraButtons/ExtraButtons'
import { SignInContext } from '../../App'

const ProductNav = ({pageName = "i forgor"}) => {
  const [searchText, setSearchText] = useState("")
  const [isSignedIn] = useContext(SignInContext)
  return (
    <div className={classes.navParent}>
      <div className={classes.navProductList}>
        <div style={{marginLeft: "30px", width: "80%"}}>
          <ProductNavSearch searchText={searchText} setSearchText={setSearchText}></ProductNavSearch>
        </div>
        <div style={{marginRight: "30px"}}>
          <SimpleButton>search</SimpleButton>
        </div>
      </div>
      <div className={classes.banner}>
        <div style={{marginLeft: "30px"}}>
          <SimpleLink size={1.4} dest='..'>{"<<"}</SimpleLink>
        </div>
        <h1 className={classes.bannerText}>{pageName}</h1>
        <ExtraButtons isAccountNeeded={true} isSignedIn={isSignedIn} isCartNeeded={true}></ExtraButtons>
      </div>
    </div>
  )
}

export default ProductNav
