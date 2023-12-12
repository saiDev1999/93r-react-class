import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../pages /login-screen"
import RegistrationScreen from "../pages /register-screen"
import ForgotPasswordScreen from "../pages /forgotPassword-screen"
import InvalidScreen from "../pages /invalid-screen"



const NavigationStack = () =>{


    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={LoginScreen}  />
            <Route path="/register" Component={RegistrationScreen}  />
            <Route path="/forgot-password" Component={ForgotPasswordScreen}  />
            <Route path="*" Component={InvalidScreen}  />

        </Routes>


        
        </BrowserRouter>

    )
}

export default NavigationStack


// 3 steps 

// 1. browser router 
// 2. routes list 
// 3. route path and component 