import { useState } from "react"
import UseState2 from "./useState /useState2"






const UseState1 =()=>{
    const [count,setCount]=useState(0)

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    return(
        <>
        
        <UseState2/>
        </>
    )
}

export default UseState1