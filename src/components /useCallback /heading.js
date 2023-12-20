


import React from 'react'

const Heading = ({value,text}) => {
    console.log("Heading",value,text)
  return (
    <h1>{text} {value}</h1>
  )
}

export default React.memo(Heading)