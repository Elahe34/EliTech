import React from "react";
import "./Profile.css";
import ProductSlider from "../../Home/productslider/ProductSlider";
const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-content">
        <aside className="sidebar">
          <div className="profile-info">
            <h6 className="user-name">الهه سلطانی</h6>
            <div className="profile-stats">
              <div>آخرین بازدید</div>
              <div>۱۴۰۳/۰۶/۱۰</div>
            </div>
            <div className="profile-stats">
              <div>امتیاز باشگاه</div>
              <div>۱۲</div>
            </div>
            <div className="profile-stats">
              <div>تعداد بازدید</div>
              <div>۲۵</div>
            </div>
          </div>
          <div className="profile-links">
            <a className="profile-items" href="#">علاقه مندی ها</a>
            <a className="profile-items" href="#">سفارش های من</a>
            <a className="profile-items" href="#">آدرس ها</a>
            <a className="profile-items" href="#">پیغام ها</a>
            <a className="profile-items" href="#">اطلاعات حساب کاربری</a>
          </div>
        </aside>
        <main className="main-content">
          <h4 className="favorites">علاقه مندی ها</h4>
          <ProductSlider/>
        </main>
      </div>
    </div>
  );
};

export default Profile;