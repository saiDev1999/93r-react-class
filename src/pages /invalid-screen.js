
import React from 'react'
import { useNavigate } from 'react-router-dom'

function InvalidScreen() {

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/about")

  }


  return (
    <div>

        <h2>Invalid screen please check url and come back </h2>
        <button onClick={handleClick} >Click to home</button>
    </div>
  )
}

export default InvalidScreen

// 2 ways 
// 1. link --> only in jsx 
// 2. javascript 