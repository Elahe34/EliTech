import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com"; // Library for sending emails through EmailJS service
import { useFormik } from "formik"; 
import * as Yup from "yup"; // Library for schema validation
import { ToastContainer, toast } from "react-toastify"; // Library for displaying toast notifications
import "react-toastify/dist/ReactToastify.css";

// Contact component to handle the contact form
const Contact = () => {
  // Initialize formik for form handling
  const formik = useFormik({
    initialValues: {
      name: "", // Initial value for the "name","email" and "message" field
      email: "", 
      message: "", 
    },
    // Define validation schema for the form fields
    validationSchema: Yup.object().shape({
      name: Yup.string().required("این فیلد اجباری است"), 
      email: Yup.string()
        .email("ایمیل معتبر نیست") 
        .required("این فیلد اجباری است"), 
      message: Yup.string().required("این فیلد اجباری است"), 
    }),
    // Define the submission handler
    onSubmit: (values, { resetForm }) => {
      // Use EmailJS to send form data
      emailjs
        .send(
          "service_emsj0pn", // EmailJS service ID,template ID and public key
          "template_ect7udd",
          values, // Form values (name, email, message)
          "b2ewpiQSNH___joiD" 
        )
        .then(
          (result) => {
            // If the email is sent successfully, show a success toast
            if (result.status === 200) {
              toast.success("پیام شما با موفقیت ارسال شد.", {
                position: "top-right", 
                closeOnClick: true, 
                theme: "dark", 
              });
              resetForm(); // Reset the form fields
            }
          },
          (error) => {
            console.log(error); 
          }
        );
    },
  });

  return (
    <div className="contact-us">
      <div className="information-box">
        <h2 className="contact-title">ارسال پیام به مدیریت</h2>
        {/* Form element to collect user input */}
        <form onSubmit={formik.handleSubmit}>
          <div className="input-part">
            <input
              className="field"
              id="name"
              type="text"
              placeholder="نام شما"
              name="name"
              onChange={formik.handleChange} // Update formik state on input change
              onBlur={formik.handleBlur} // Track when the field loses focus
              value={formik.values.name} // Bind value to formik state
            />
            <label htmlFor="name" className="label">
              نام شما
            </label>
            {/* Show validation error */}
            {formik.touched.name && formik.errors.name && (
              <small className="error">{formik.errors.name}</small>
            )}
          </div>
          <div className="input-part">
            <input
              className="field"
              type="text"
              placeholder="ایمیل شما"
              name="email"
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <label htmlFor="email" className="label">
              ایمیل شما
            </label>
            {formik.touched.email && formik.errors.email && (
              <small className="error">{formik.errors.email}</small>
            )}
          </div>
          <div className="input-part">
            <textarea
              name="message"
              className="message-part"
              placeholder="پیام شما"
              id="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <small className="error">{formik.errors.message}</small>
            )}
          </div>
          <button className="sending-btn" type="submit">
            ارسال پیام
          </button>
        </form>
      </div>
      {/* Container for toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default Contact;