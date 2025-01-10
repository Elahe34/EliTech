import React from 'react'
import Video from '../../../movie/1.mp4'

import './Header.css'
const Header = () => {
  //Import video for header
    const video = Video
  return (
    <>
        <div className="header-container">
                <video
                className='original-video'
                 src={video}
                 muted
                 autoPlay
                 ></video>
            <div className="text-part">
              {/* Text content over the video */}
                <h1>همیشه به روز باش</h1>
                <p>جدیدترین ها را با ما بشناسید</p>
            </div>
        </div>
      
    </>
  )
}

export default Header

























// import React, { useState, useEffect } from "react";
// import video from "../../movie/1.mp4";
// import "./Header.css"

// const Header = () => {
//     const [animate, setAnimate] = useState(false);

//     useEffect(() => {
//         setAnimate(true)
//         return () => {

//         };
//     }, []);

//     return (
//         <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//             {/* ویدیو */}
//             <video
//                 src={video}
//                 autoPlay
//                 muted
//                 style={{
//                     width: "100%",
//                     height: "100%",
//                     objectFit: "cover",
//                 }}
//             />
//             {/* متن با انیمیشن */}
//             <div
//                 className={animate ? "fade-in-text" : ""}
//                 style={{
//                     position: "absolute",
//                     top: "30%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     color: "white",
//                     fontSize: "2.5rem",
//                     fontWeight: "bold",
//                     textAlign: "center",
//                     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
//                     opacity: 0, // برای شروع محو

//                 }}
//             >
//                 Welcome to Our Website
//                 <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
//                     Discover Amazing Products
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Header;