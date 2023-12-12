import { createRef } from "react"




const Uncontrolled = () =>{

 const emailRef=createRef()
 const passwordRef =createRef()

 const handleSubmit =(event)=>{

    event.preventDefault()


    const userDetails={
        username:emailRef.current.value,
        password:passwordRef.current.value
    }



    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(userDetails)
})
.then(res => res.json())
.then((response=>{
    if(response.message){
        alert(response.message)
    }else{
        alert("login success")
        localStorage.setItem("userDetails",JSON.stringify(userDetails))
    }

}));
            




 }

    return(
        <>
        <h2>Uncontrolled component example</h2>

        <form onSubmit={handleSubmit} >
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="text" className="form-control" id="email"  ref={emailRef} />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <input type="password" className="form-control" id="pwd"  ref={passwordRef} />
  </div>
 
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

        
        </>
    )
}

export default Uncontrolled


// 1. create a reference with the dom 
// 2. attach the reference with the input element and dom 