import React, { useState } from 'react'
import classes from "./RegisterPage.module.css"
import SimpleBanner from '../../components/SimpleBanner/SimpleBanner'
import SimpleButton from '../../components/SimpleButton/SimpleButton'
import SimpleInput from '../../components/SimpleInput/SimpleInput'
import SimpleLink from '../../components/SimpleLink/SimpleLink'

const RegisterPage = () => {
  const [currLogin, setCurrLogin] = useState("")
  const [currEmail, setCurrEmail] = useState("")
  const [currPhoneNum, setCurrPhoneNum] = useState("")
  const [currPassword, setCurrPassword] = useState("")
  return (
    <div className={classes.registerMainDiv}>
      <SimpleBanner phrase="register"></SimpleBanner>
      <div className={classes.infoContainer}>
        <div>
          <SimpleInput text="login" inputVal={currLogin} isRequired={true} setInputValFunc={setCurrLogin}></SimpleInput>
          <SimpleInput text="email" inputVal={currEmail} isRequired={true} setInputValFunc={setCurrEmail}></SimpleInput>
          <SimpleInput text="phone num" inputVal={currPhoneNum} isRequired={true} setInputValFunc={setCurrPhoneNum}></SimpleInput>
          <SimpleInput text="password" inputVal={currPassword} isRequired={true} setInputValFunc={setCurrPassword}></SimpleInput>
        <div className={classes.centerer}>
          <SimpleButton weight={650} size={1.8}>REGISTER</SimpleButton>
        </div>
        </div>
      </div>
      <div className={classes.bottomLink}>
        <SimpleLink size={1.4} isBold={false} dest="/login">login</SimpleLink>
      </div>
    </div>
  )
}

export default RegisterPage
