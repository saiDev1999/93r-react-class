import { useState } from "react"
const useCounter =(initialCount=0,scale=1)=>{   
      const [count,setCount]=useState(initialCount)
      const handleIncrement =()=>{
        setCount(count+scale)
      }
      const handleDecrement =()=>{
        setCount(count-scale)
      }
      const handleReset =()=>{
        setCount(0)
      }
      return [count,handleIncrement,handleDecrement,handleReset]

}

export default useCounter
