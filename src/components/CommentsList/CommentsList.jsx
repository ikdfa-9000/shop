import React from 'react'
import classes from './CommentsList.module.css'
import Comment from '../Comment/Comment'
import useData from '../../../hooks/useData/useData'

const CommentsList = ({postId}) => {
  const { result, isLoaded, hasError } = useData(`http://localhost:3000/products/${postId}/comments`)
  if (isLoaded && !hasError) {
    console.log("Loaded comments!")
    return (
      <div className={classes.commentList}>
        {result.map((comment) => {return (<Comment key={comment.id} text={comment.comment} rating={comment.rating} userId={comment.userId}></Comment>)})}
      </div>
    )
  } else {
    console.log("Loading comments...")
  }
}

export default CommentsList
