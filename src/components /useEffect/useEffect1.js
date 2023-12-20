import axios from "axios"
import { useEffect, useState } from "react"


const UseEffect1 = () =>{

    const [data,setData]=useState([])
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)


    useEffect(()=>{

        console.log("useEffect")

        handleLoad()
    },[count])

    const handleLoad=()=>{

      
        //api 
        axios.get("https://fakestoreapi.com/products")
        .then(response=>console.log(response.data))

    }

    const handleIncrement = ()=>{
        setCount(count+1)
    }
    const handleIncrement1 = ()=>{
        setCount1(count1+1)
    }



    return(
        <>
        <h3>hello</h3>
        <h4>current count{count}</h4>
        <h4>current count2{count1}</h4>
        <button onClick={handleIncrement} >Increment</button>
        <button onClick={handleIncrement1} >Increment counter 2</button>
        
        </>
    )

}

export default UseEffect1