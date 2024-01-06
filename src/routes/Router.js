import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Global/HomePage/HomePage";
import LoginPage from "../pages/Global/UserArea/LoginPage";


function Router() {

    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>   
                    <Route path="/login" element={<LoginPage/>}/>      
                </Routes>
            </BrowserRouter>   
        );
}
      
export default Router