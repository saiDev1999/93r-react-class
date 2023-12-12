import axios from "axios"
import { useState } from "react"


const UseState2 = () =>{
    const [data,setData]=useState([])
    const [timer,setTimer]=useState(0)

    const handleClick =()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((response)=>setData(response.data))
        .catch(err=>alert(err.message))


    }

    const handleTimer =()=>{

       
        setInterval(()=>{
            // console.log(timer)

            setTimer(timer=>timer+1)


        },1000)


    }




    return(
        <>
        <h2 style={{color:timer>120?"red":"black"}} >{timer}</h2>
        <button onClick={handleTimer} >Start timer</button>

    
        </>
    )
}

export default UseState2







// forms , routing ,state management , remaining hooks 

// 1. add circlle--->  circle 





