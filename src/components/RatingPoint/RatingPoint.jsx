import React from 'react'

const RatingPoint = ({myRating, isBlack, ratingChanger, isClickable = true}) => {
  return (
    <div 
      style={{
        width: '15px',
        height: '15px',
        backgroundColor: isBlack ? 'black' : 'grey',
        borderRadius: '50%',
        margin: '2px',
        cursor: isClickable ? 'pointer' : 'default',
        display: 'inline-block'
      }}
      onClick={() => { ratingChanger(myRating) }}
      ></div>
  )
}

export default RatingPoint
