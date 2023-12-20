import { useState } from "react"
import TextConverter from "./text-converter"







const UseMemo =()=>{
    const[greet,setGreet]=useState("good morning")
    

    return(
        <>
        <h3>Use memo parent</h3>
        <TextConverter  text={greet} />
        
        </>
    )
}

export default UseMemo