import React, { useState } from "react";
import "./Register.css";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useFormik } from "formik"; // Formik for form handling
import * as Yup from "yup"; // Yup for form validation schema
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cookies from "js-cookie"; // Library to manage cookies

const Register = () => {
  const [successMessage, setSuccessMessage] = useState(""); // State to handle success message
  const navigate = useNavigate();

  // Initializing Formik for form handling and validation
  const formik = useFormik({
    initialValues: {
      name: "", // Initial value for the name,email and password field
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // Validation rules for the form fields
      name: Yup.string().required("This field is required"), 
      email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
      password: Yup.string()
        .required("This field is required")
        .min(8, "Password must be at least 8 characters") 
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])/,
          "Password must include uppercase and lowercase letters"
        ),
    }),
    onSubmit: (values) => {
      // Actions to perform on form submission
      Cookies.set("token", values); // Save form data as a token in cookies
      localStorage.setItem("user", JSON.stringify(values)); // Store form data in local storage
      setSuccessMessage("You have successfully registered!"); // Display success message
      setTimeout(() => {
        navigate("/login"); // Redirect to the profile page after 2 seconds
      }, 2000);
    },
  });

  // State and functions to toggle password visibility
  const [type, setType] = useState("password"); // State to set input type (password/text)
  const [icon, setIcon] = useState(<IoEyeOffOutline />); // State for password visibility icon

  const handleClick = () => {
    // Toggle input type and icon on button click
    if (type === "password") {
      setType("text");
      setIcon(<IoEyeOutline />);
    } else {
      setType("password");
      setIcon(<IoEyeOffOutline />);
    }
  };

  return (
    <div className="registeration">
      <div className="register-container">
        <div className="register-part">
          <div className="title-register">
            <h2>ثبت نام کنید</h2>
          </div>
          <form className="form-box" onSubmit={formik.handleSubmit}>
            <div className="input-part">
              <label className="input-label" htmlFor="name">نام شما</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange} // Update formik state on change
                onBlur={formik.handleBlur} // Mark field as touched on blur
                value={formik.values.name} // Set the value from formik state
              />
              {formik.touched.name && formik.errors.name ? (
                <small className="error">{formik.errors.name}</small>
              ) : null}
            </div>
            <div className="input-part">
              <label className="input-label" htmlFor="email">ایمیل</label>
              <input
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <small className="error">{formik.errors.email}</small>
              ) : null}
            </div>
            <div className="input-part password-box">
              <label className="input-label" htmlFor="password">پسوورد</label>
              <input
                id="password"
                name="password"
                type={type} 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              <span onClick={handleClick} className="input-icon">
                {icon}
              </span>
              {formik.touched.password && formik.errors.password ? (
                <small className="error">{formik.errors.password}</small>
              ) : null}
            </div>
            <div className="register-btn">
              <button type="submit" className="btn">
                ثبت نام
              </button>
            </div>
            <Link className="exist-user" to="/login">
              قبلا ثبت نام کرده اید ؟ وراد شوید
            </Link>
          </form>
        </div>
      </div>
      {successMessage && (
        <>
          <div className="modal-overlay"></div>
          <div className="modal">
            <p>{successMessage}</p>
            <button onClick={() => navigate("/profile")}>Continue</button> 
          </div>
        </>
      )}
    </div>
  );
};

export default Register;