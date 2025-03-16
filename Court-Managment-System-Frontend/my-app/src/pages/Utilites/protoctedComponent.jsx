import { useEffect } from "react";
import { Navigate } from "react-router-dom";
function ProtectedComponent({element}){
    let var1 = localStorage.getItem("loggedIn");
    if(true){
        return element;
    }
    window.alert("User not logged in.1..");
    return (<Navigate to="/login"></Navigate>);
}
export default ProtectedComponent;