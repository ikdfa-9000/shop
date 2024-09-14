import React from 'react'
import { useState, useEffect } from 'react';
import SimpleLink from '../SimpleLink/SimpleLink';
import classes from './PhraseBanner.module.css'
import ExtraButtons from '../ExtraButtons/ExtraButtons';

const PhraseBanner = ({isSignedIn = false}) => {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    const phrases = [
      "love it!",
      "perfect fit!",
      "you'll rock this!",
      "stylish pick!",
      "amazing choice!",
      "can't go wrong!",
      "nice selection!",
      "this is great!",
      "looking good!",
      "chic and trendy!",
      "absolutely gorgeous!",
      "fantastic!",
      "so you!",
      "wonderful choice!",
      "just perfect!",
      "you'll shine in this!",
      "top notch!",
      "absolutely stunning!",
      "super cute!",
      "elegant and classy!",
      "a real beauty!",
      "simply the best!",
      "pure perfection!",
      "you'll look fabulous!",
      "what a gem!",
      "great style!",
      "lovely pick!",
      "you're gonna love it!",
      "totally awesome!",
      "perfect for you!"
    ];
    let phraseId = Math.round(Math.random() * (phrases.length - 1));
    setPhrase(phrases[phraseId]);
  }, []);
  return (
    <>
      <h1 className={classes.bannerText}>{phrase}</h1>
      <ExtraButtons isAccountNeeded={true} isSignedIn={isSignedIn} isCartNeeded={true}></ExtraButtons>
    </>
  )
}

export default PhraseBanner
