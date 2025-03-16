import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap styles

function Submit(email, password) {
    if(!email || password){
        window.alert("Email and Password are required");
    }


}

function Login({message}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(()=>{
    if(message){
        window.alert(message);
    }
  }, [message])


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center" 
         style={{ 
           minHeight: "100vh", 
           background: "linear-gradient(to bottom, #007BFF 20%, white 40%, white 60%, #007BFF 80%)"
         }}>

      {/* Floating Card */}
      <div className="card p-4 shadow-lg rounded" style={{ width: "400px", background: "white" }}>
        
        <h2 className="text-center mb-4 text-primary">Have an Account?</h2>

        {/* Email Input */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input 
            type="email" 
            className="form-control" 
            placeholder="Enter your email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter your password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>

        {/* Submit Button */}
        <button 
          className="btn btn-primary w-100 mb-3 fw-semibold shadow-sm"
          onClick={() => Submit(email, password)}
          style={{ transition: "0.3s" }}
          onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
          onMouseOut={(e) => e.target.style.backgroundColor = ""}>
          Login
        </button>

        {/* Navigation Links */}
        <div className="text-center">
          <Link to="/signup" className="text-decoration-none text-primary fw-semibold d-block">Create an Account</Link>
          <Link to="/home" className="text-decoration-none text-secondary fw-semibold">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
