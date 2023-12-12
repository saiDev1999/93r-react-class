import { useState } from "react"





const Controlled = () =>{

    const [username,setUsername]=useState("")
    const[usernameError,setUserNameError]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit =(event)=>{
        event.preventDefault()
        const details={
            username:username,
            password:password
        }
        console.log(details)

        
        //api call
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(details)
          })
          .then(res => res.json())
          .then((response=>{
              if(response.message){
                  alert(response.message)
              }else{
                  alert("login success")
                  localStorage.setItem("userDetails",JSON.stringify(details))
              }
          
          }));



    }
    const usernameHandler=(event)=>{
        setUsername(event.target.value)
        if(event.target.value.length>=7){
            alert("please enter <7 username characters")
            setUserNameError("please enter <5 username characters")
        }else{
            setUserNameError("")
        }
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
        if(event.target.value.length>10){
            alert("please enter <5 username characters")
        }else{
        }
    }



    return(
        <>
        <h2>Controlled</h2>

        <form onSubmit={handleSubmit} >
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="text" className="form-control" id="email"  value={username} onChange={usernameHandler} />
    <label htmlFor="email" style={{color:"red"}} >{usernameError}</label>

  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd" value={password} onChange={passwordHandler}  />
  </div>
 
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        </>
    )
}

export default Controlled


// steps :

// 1. create a react state 
// 2. bind the react state with value attribute 
// 3. add the onchange handler to the input (to enter input and to enable field validation)