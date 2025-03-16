import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Login from "./pages/Landing/login";
import SignUp from "./pages/Landing/signUp";
import Home from "./pages/Protected/home";
import UserProfile from "./pages/Protected/UserProfile";
import ProtectedComponent from "./pages/Utilites/ProtoctedComponent";
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setiIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/home");
        setTimeout(()=>{
            setiIsLoading(false)
        }, 2000);
    },[])
    console.log(isLoading);
    if(isLoading){
        console.log(123);
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
        );
    }
    return (
            <div>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/" element={<Login/>}></Route>
                    <Route path="/signup" element={<SignUp/>}></Route>
                    <Route path="/home" element={<ProtectedComponent element={<Home/>}/>}></Route>
                    <Route path="/profile" element={<UserProfile/>}></Route>
                </Routes>
            </div>
    );
}

export default App;
