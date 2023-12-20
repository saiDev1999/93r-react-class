import React from 'react'

const Button = (prop) => {
    console.log("ButtonComponent",prop.children)
  return (
    <button onClick={prop.click} >{prop.children}</button>
  )
}

export default React.memo(Button)