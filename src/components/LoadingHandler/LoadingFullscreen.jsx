import React from 'react'
import LoadingHandler from './LoadingHandler'

const LoadingFullscreen = ({hasError}) => {
  return (
    <div style={{width: "100%", height: "100vh"}}>
      <LoadingHandler hasError={hasError}></LoadingHandler>
    </div>
  )
}

export default LoadingFullscreen
