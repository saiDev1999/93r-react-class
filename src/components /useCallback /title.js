import React from 'react'

const Title = () => {
    console.log("Title")
  return (
    <div>Good morning</div>
  )
}

export default React.memo(Title)

// React. memo ---> prevents unneccassary re-renders in functional based component  --->HOC

// HOC --> wrap the component with other component which gives enghnced component
