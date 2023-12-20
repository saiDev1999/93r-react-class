import { useEffect, useState } from "react"



const UseEffect2 =()=>{

    const [title,setTitle]=useState(0)


    useEffect(()=>{
        document.title=`current title count ${title}`
    },[title])

     



    const handleClick =()=>{
        setTitle(title+1)
    }


    return(
        <>
        <h2>UseEffect 2 dom manipulation</h2>
        <p>current title {title}</p>
        <button onClick={handleClick} >Update Title</button>
        
        
        </>
    )
}

export default UseEffect2