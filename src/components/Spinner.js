import React, { Component } from 'react'
import loading from "./loadingGif.gif"

const Spinner = ()=>{
  
    return (
      <div className='text-center'>
        <img className='my-5' src={loading} alt=""  />
        
      </div>
    )
  
}

export default Spinner
