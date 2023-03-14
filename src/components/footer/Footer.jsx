import React from "react";
import logo from "../../resources/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row py-5 ps-2 ">
        <div className="col-12 col-md-6 col-lg-4  text-white">
          <img src={logo} alt="" className="w-50" />
          <p className="text-primary m-1">Got questions? Call us 24/7!</p>
          <p className="m-0">03 111 666 144 </p>
          <p className="m-0">0317 1777015.</p>
          <p className="text-primary m-1">Contact info </p>
          <p className="m-0">info@winstore.pk</p>
          <div className="mt-2">
            <i class="fa-brands fa-facebook-f socialLogo"></i>
            <i class="fa-brands fa-instagram socialLogo"></i>
            <i class="fa-brands fa-linkedin-in socialLogo"></i>
            <i class="fa-brands fa-twitter socialLogo"></i>
          </div>
        </div>
        <div className="col-12 col-md-3 col-lg-2  text-white">
          <p className="text-primary">Contact info </p>
          <p className="m-0">Installments</p>
          <p className="m-0">Electronics</p>
          <p className="m-0">Grocery</p>
          <p className="m-0">Health & Beauty</p>
          <p className="m-0">Home Appliances</p>
          <p className="m-0">Mobile Accessories</p>
        </div>
        <div className="col-12 col-md-3 col-lg-2 text-white">
          <p className="text-primary">Information </p>
          <p className="m-0">About Us</p>
          <p className="m-0">Contact Us</p>
          <p className="m-0">FAQs</p>
          <p className="m-0">Shipping & Return</p>
          <p className="m-0">Privacy policy</p>
          <p className="m-0">Terms & Conditions</p>
        </div>
        <div className="col-12 col-md-3 col-lg-2 text-white">
          <p className="text-primary">Customer Care </p>
          <p className="m-0">My Account</p>
          <p className="m-0">Track Your Order</p>
          <p className="m-0">Recently Viewed</p>
          <p className="m-0">Wishlist</p>
          <p className="m-0">Compare</p>
          <p className="m-0">Become a Vendor</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
