import { useEffect, useRef } from "react"






const UseRefExample = () =>{

    const inputFocus=useRef()


    useEffect(()=>{
        handleFocus()
  

    },[])

    const handleFocus=()=>{


        inputFocus.current.focus()



    }

    return(
        <>
        
        <p>UseRefExample</p>
        <input type="text" ref={inputFocus}   />
        </>
    )
}
export default UseRefExample







// useRef ---> we can access dom directly 
// it doesn't cause re-renders



// tasks :
// 1. Repeat the class 
// 2. Timer has to start (and clean up timer when redirecting to other page)
// 3. Remove buttons in home screen and product detail screen (page load to show products)
// 4. complete the pending tasks (create local json data for register and login)
