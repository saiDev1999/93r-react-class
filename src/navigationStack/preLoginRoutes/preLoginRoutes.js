import ForgotPasswordScreen from "../../pages /forgotPassword-screen"
import InvalidScreen from "../../pages /invalid-screen"
import LoginScreen from "../../pages /login-screen"
import RegistrationScreen from "../../pages /register-screen"
import { Route, Routes } from "react-router-dom"






const PreLoginRoutes =()=>{
    return(
        <Routes>
        
          <Route path="/" Component={LoginScreen}  />
            <Route path="/register" Component={RegistrationScreen}  />
            <Route path="/forgot-password" Component={ForgotPasswordScreen}  />
            <Route path="*" Component={InvalidScreen}  />
        </Routes>


    )
}
export default PreLoginRoutes