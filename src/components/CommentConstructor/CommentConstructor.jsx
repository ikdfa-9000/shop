import React, { useContext, useState } from 'react'
import classes from "./CommentConstructor.module.css"
import SimpleButton from '../SimpleButton/SimpleButton'
import RatingMaker from '../RatingMaker/RatingMaker'
import { SignInContext } from '../../App'
import SimpleLink from '../SimpleLink/SimpleLink'

const CommentConstructor = () => {
  const [commentText, setCommentText] = useState("")
  const [currRating, setCurrRating] = useState(0)
  const [isSignedIn] = useContext(SignInContext)
  if (isSignedIn) {
    return (
      <div className={classes.writeAndPublish}>
        <div className={classes.writeComment}>
          <div className={classes.avatarDiv}>
            <img
              className={classes.avatar}
              src="/server/images/avatar.jpg"
              alt="User Avatar"
            ></img>
          </div>
          <div className={classes.commentConstructor}>
            <div className={classes.ratingDiv}>
              <h1>write your own review!</h1>
              <div>
                <p>rate the product</p>
                <RatingMaker></RatingMaker>
              </div>
            </div>
            <textarea 
              className={classes.commentBody}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className={classes.publishButton}>
          <SimpleButton weight={500} size={2.4}>publish</SimpleButton>
        </div>
      </div>
    ) 
  } else {
    return (
      <div className={classes.unsignedWarning}>
        <h1 className={classes.warningText}>You have to be signed in to be able to write comments!</h1>
        <SimpleLink size={1.8} dest="/login" isBold={false}>Sign in</SimpleLink>
        <div className={classes.blackLine}></div>
      </div>
    )
  }
}

export default CommentConstructor
