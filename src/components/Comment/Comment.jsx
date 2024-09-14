import React, { useEffect, useState } from 'react'
import classes from './Comment.module.css'
import RatingList from '../RatingList/RatingList'
import LoadingHandler from '../LoadingHandler/LoadingHandler'
import useData from '../../../hooks/useData/useData'
import AvatarLoading from '../../assets/avatar_loading.jpg'
import AvatarDeleted from '../../assets/avatar_deleted.jpg'

const Comment = ({userId, text, rating}) => {
  const { result, isLoaded, isError } = useData(`http://localhost:3000/users/${userId}/`)
  const [name, setName] = useState("Loading...")
  const [avatar, setAvatar] = useState(AvatarLoading)
  useEffect(
    () => {
      if (isLoaded) {
        setName(!isError ? result.name : "Deleted user")
        setAvatar(
          !isError ? `/${result.avatar}` : AvatarDeleted
        )
        if (isError) 
        {
          console.log("User is not found... Marking him as deleted")
        }
      }
    }, [isLoaded, isError]
  )
  if (isLoaded) {
    return (
      <div className={classes.commentDiv}>
        <div className={classes.avatarDiv}>
          <img
            className={classes.avatar}
            src={avatar}
            alt="User Avatar"
          ></img>
        </div>
        <div className={classes.commentText}>
          <h1 className={classes.commentAuthor}>{name}</h1>
          <div style={{display: 'block'}}>
            <RatingList ratingTotal={rating}></RatingList>
          </div>
          <p className={classes.commentText}>{text}</p>
        </div>
      </div>
    )
  } else {
    <div className={classes.commentDiv}>
      <LoadingHandler hasError={isError} isLoaded={isLoaded}></LoadingHandler>
    </div>
  }
}

export default Comment
