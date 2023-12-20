import { useMemo, useState } from "react"






const TextConverter =({text}) =>{

const[flag,setFlag]=useState(false)

const convertToUpperCase=useMemo(()=>{
    console.log("convertToUpperCase")
    return text.toUpperCase()
},[text])


    const handleClick=()=>{
        setFlag(!flag)
    }

    return(
        <>
        
  
        <h4>{convertToUpperCase}</h4>
        <h4>{flag?"Flag true":"Flag false"}</h4>
        <button onClick={handleClick} >Click to change flag</button>
        </>
    )
}

export default TextConverter


// useMemo(value)


// 2 args accepts 
// 1. callback function
// 2. Array



// return a value 