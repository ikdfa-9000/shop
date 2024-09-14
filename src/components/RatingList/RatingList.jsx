import React from 'react'
import RatingPoint from '../RatingPoint/RatingPoint'

const RatingList = ({ratingTotal}) => {
  const ratings = [1, 2, 3, 4, 5]
  return (
    <div>
      {ratings.map((rating) => (<RatingPoint 
      isBlack={rating <= ratingTotal ? true : false}
      myRating={rating}
      key={rating}
      ratingChanger={() => {}}
      isClickable={false}
      ></RatingPoint>))}
    </div>
  )
}

export default RatingList
