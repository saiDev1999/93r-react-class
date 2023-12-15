import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginScreen from "../pages /login-screen"
import RegistrationScreen from "../pages /register-screen"
import ForgotPasswordScreen from "../pages /forgotPassword-screen"
import InvalidScreen from "../pages /invalid-screen"
import HomeScreen from "../pages /afterLoginRoutes/home-screen"
import AboutScreen from "../pages /afterLoginRoutes/about-screen"
import SettingScreen from "../pages /afterLoginRoutes/setting-screen"
import ProductDetails from "../pages /afterLoginRoutes/product-detail"



const NavigationStack = () =>{


    return(
        <BrowserRouter>
        <Routes>
            {/* <Route path="/" Component={LoginScreen}  />
            <Route path="/register" Component={RegistrationScreen}  />
            <Route path="/forgot-password" Component={ForgotPasswordScreen}  />
            <Route path="*" Component={InvalidScreen}  /> */}

<Route path="/" Component={LoginScreen}  />
 <Route path="/home" Component={HomeScreen}  />
            <Route path="/about" Component={AboutScreen}  />
            <Route path="/settings" Component={SettingScreen}  />
            <Route path="*" Component={InvalidScreen}  />

            <Route path="/product/:id/:id" Component={ProductDetails}  />


    


        </Routes> 
        </BrowserRouter>

    )
}

export default NavigationStack


// 3 steps 

// 1. browser router 
// 2. routes list 
// 3. route path and component 