import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../pages /login-screen"
import RegistrationScreen from "../pages /register-screen"
import ForgotPasswordScreen from "../pages /forgotPassword-screen"
import InvalidScreen from "../pages /invalid-screen"
import HomeScreen from "../pages /afterLoginRoutes/home-screen"
import AboutScreen from "../pages /afterLoginRoutes/about-screen"
import SettingScreen from "../pages /afterLoginRoutes/setting-screen"
import ProductDetails from "../pages /afterLoginRoutes/product-detail"
import PostLoginRoutes from "./postLoginRoutes/postLoginRoutes"
import PreLoginRoutes from "./preLoginRoutes/preLoginRoutes"
import { useState } from "react"



const NavigationStack = () =>{
    const[login,setLogin]=useState(false)
    const signIn=()=>{
        setLogin(true)
    }

    const signOut=()=>{
        setLogin(false)
    }

    return(
        <BrowserRouter>
   
          {
            login
            ?
            <PostLoginRoutes/>
            :
            <PreLoginRoutes/>

          }

        </BrowserRouter>

    )
}

export default NavigationStack


// 3 steps 

// 1. browser router 
// 2. routes list 
// 3. route path and component 







// protected routes 
// 1. flag ---> login ---> false , flag --> true




// global state management

// 1. context api (pre buil to react)
// 2. redux (3rd party integration)