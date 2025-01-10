import React, { useState , useContext} from "react"; 
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5"; 
import Cookies from "js-cookie"; // Import the js-cookie library to handle cookies
import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import { DataContext } from '../context'


const Login = () => {
  const navigate = useNavigate(); // Hook for navigating to other routes
  const [type, setType] = useState("password"); // State to manage the input type (password or text)
  const [icon, setIcon] = useState(<IoEyeOffOutline/>); // State to manage the visibility icon
  const value = useContext(DataContext)
  const {showregister,setShowregister}=value
  
  // Function to handle the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowregister(!showregister)
    const cookie = Cookies.get("token"); // Retrieve the "token" from cookies
    const getuser = JSON.parse(localStorage.getItem("user"));
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check if the user is authenticated using either cookie or localStorage data
    if (cookie || (getuser && getuser.email === email && getuser.password === password)) {
      alert("خوش آمدید");
      navigate('/profile'); 
    } else {
      alert("نام کاربری یا رمز عبور اشتباه است");
    }
  };

  // Function to toggle password visibility
  const handleClick = () => {
    if (type === "password") {
      setType("text");
      setIcon(<IoEyeOutline/>);
    } else {
      setType("password");
      setIcon(<IoEyeOffOutline/>);
    }
  };

  return (
    <div className="registeration">
      <div className="register-container">
        <div className="register-part">
          <div className="title-register">
            <h2 className="">وارد شوید</h2>
          </div>
          <form className="form-box" onSubmit={handleSubmit}>
            <div className="input-part">
              <label htmlFor="email" className="login-label">
                ایمیل
              </label>
              <input
                className="login-input"
                id="email"
                name="email"
                type="email"
              />
            </div>
            <div className="input-part password-box">
              <label htmlFor="password" className="login-label">
                رمز عبور
              </label>
              <input
                className="login-input"
                id="password"
                name="password"
                type={type}
              />
              <span onClick={handleClick} className="input-icon">
                {icon}
              </span>
            </div>
            <div className="register-btn">
              <button type="submit" className="btn">
                تایید
              </button>
            </div>
            <Link className="exist-user" to='/register'>ایجاد حساب کاربری</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login; 