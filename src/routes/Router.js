import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Global/HomePage/HomePage";
import LoginPage from "../pages/Global/UserArea/LoginPage";
import RegisterPage from "../pages/Global/UserArea/RegisterPage";
import AdminPage from "../pages/Admin/AdminPage";

function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>  
                    <Route path="/login" element={<LoginPage/>}/>        
                    <Route path="/register" element={<RegisterPage/>}/>
                    <Route path="/admin" element={<AdminPage/>}/>
                </Routes>
            </BrowserRouter>   
        );
}
      
export default Router