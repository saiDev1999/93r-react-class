import { Route, Routes } from "react-router-dom"
import AboutScreen from "../../pages /afterLoginRoutes/about-screen"
import HomeScreen from "../../pages /afterLoginRoutes/home-screen"
import ProductDetails from "../../pages /afterLoginRoutes/product-detail"
import SettingScreen from "../../pages /afterLoginRoutes/setting-screen"
import InvalidScreen from "../../pages /invalid-screen"






const PostLoginRoutes =()=>{
    return(
        <Routes>
        
        <Route path="/" Component={HomeScreen}  />
            <Route path="/about" Component={AboutScreen}  />
            <Route path="/settings" Component={SettingScreen}  />
            <Route path="*" Component={InvalidScreen}  />

            <Route path="/product/:id/:id" Component={ProductDetails}  />
        </Routes>


    )
}
export default PostLoginRoutes