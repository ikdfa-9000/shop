import React, { useContext } from 'react'
import CategoriesList from '../../components/WelcomeCategories/CategoriesList'
import classes from './WelcomePage.module.css'
import CartButton from '../../components/CartButton/CartButton'
import SimpleLink from '../../components/SimpleLink/SimpleLink'
import { SignInContext } from '../../App'

const WelcomePage = () => {
  const [isSignedIn] = useContext(SignInContext)
  return (
    <div className={classes.welcomeDiv}>
      <div className={classes.nameDiv}>
        <h1 className={classes.shopName}>just clothes</h1>
      </div>
      <CategoriesList></CategoriesList>
      {
        isSignedIn ? 
        <div className={classes.cartCenterer}>
          <CartButton></CartButton>
        </div>
        :
        <div className={classes.cartCenterer}></div>
      }
      <div className={classes.lowerMenu}>
        <div className={classes.lowerMenuMainDiv}>
          <div className={classes.centeredDiv}>
            {
              isSignedIn ? 
              <SimpleLink isBold={false} dest="/account">account</SimpleLink>
              :
              <div className={classes.loginRegisterDiv}>
                <SimpleLink isBold={false} dest='/login'>login</SimpleLink>
                <SimpleLink isBold={false} dest='/register'>register</SimpleLink>
              </div>
            }
          </div>
          <div className={classes.centeredDiv}>
            <SimpleLink isBold={false}>info</SimpleLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WelcomePage
