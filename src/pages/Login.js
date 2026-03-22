import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        <h2>Hello There!</h2>
        <p>Welcome to MyStore</p>

        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />

        <div className="options">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
          <span className="forgot">Reset Password</span>
        </div>

        <button className="login-btn">Login</button>

        <p className="register">
          Don't have account? <Link to="/signup">Register</Link>
        </p>

        

      </div>
    </div>
  );
}

export default Login;