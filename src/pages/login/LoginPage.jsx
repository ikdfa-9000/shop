import React, { useState } from 'react'
import classes from "./LoginPage.module.css"
import SimpleBanner from '../../components/SimpleBanner/SimpleBanner'
import SimpleButton from '../../components/SimpleButton/SimpleButton'
import SimpleInput from '../../components/SimpleInput/SimpleInput'
import SimpleLink from '../../components/SimpleLink/SimpleLink'

const LoginPage = () => {
  const [currLogin, setCurrLogin] = useState("")
  const [currPassword, setCurrPassword] = useState("")
  return (
    <div className={classes.loginMainDiv}>
      <SimpleBanner phrase="login"></SimpleBanner>
      <div className={classes.infoContainer}>
        <div>
        <SimpleInput text="login/email" inputVal={currLogin} isRequired={true} setInputValFunc={setCurrLogin}></SimpleInput>
        <SimpleInput text="password" inputVal={currPassword} isRequired={true} setInputValFunc={setCurrPassword}></SimpleInput>
        <div className={classes.centerer}>
          <SimpleButton weight={650} size={1.8}>LOG INTO THE ACCOUNT</SimpleButton>
        </div>
        </div>
      </div>
      <div className={classes.bottomLink}>
        <SimpleLink size={1.4} isBold={false} dest="/register">register</SimpleLink>
      </div>
    </div>
  )
}

export default LoginPage
