import { useEffect, useState } from "react"




const UseEffect3 =()=>{

    const[xPosition,setXposition]=useState(0)
    const[yPosition,setYposition]=useState(0)
   
     useEffect(()=>{
         document.addEventListener("mousemove",mouseMoveTrack)
         return ()=>{
            document.removeEventListener("mousemove",mouseMoveTrack)
         }
     },[])

     const mouseMoveTrack =(event)=>{
        setXposition(event.clientX)
        setYposition(event.clientY)

     }
    return(
        <>
        <p>UseEffect - Event listeners (side effect)</p>
        <p>X Postion - {xPosition}</p>
        <p>Y Postion - {yPosition}</p>
        </>
    )
}

export default UseEffect3