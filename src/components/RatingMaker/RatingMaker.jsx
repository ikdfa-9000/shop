import React, { useState } from 'react'
import RatingPoint from '../RatingPoint/RatingPoint'

const RatingMaker = () => {
  const [ratingTotal, setRatingTotal] = useState(0)
  const ratings = [1, 2, 3, 4, 5]
  return (
    <div>
      {ratings.map((rating) => (<RatingPoint 
      isBlack={rating <= ratingTotal ? true : false}
      myRating={rating}
      key={rating}
      ratingChanger={setRatingTotal}
      isClickable = {true}
      ></RatingPoint>))}
    </div>
  )
}

export default RatingMaker
