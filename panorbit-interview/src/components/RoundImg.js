import React from 'react'

const RoundImg = ({src,height,width}) => {
    let imgStyles={
        
        height:`${height}px`,
        width:`${width}px`,
        borderRadius:'50%'
    }
  
    return (
    <img style={imgStyles} src={src} alt="image" ></img>
  )
}

export default RoundImg