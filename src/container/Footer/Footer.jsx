import React, { useEffect, useRef, useState } from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";
import emailjs from "emailjs-com";

const Footer = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r29rctm",
        "template_vb8khk5",
        e.target,
        "cQIVv_dNsH7tzAIM4"
      )
      .then((res) => {
        console.log(res, e.target);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="app__footer container-fluid bg-dark py-2 pt-3">
      <div className="row mx-auto col-md-11">
        {/*  */}
        <div className="contactContainer col-md-6 col-12  p-2">
          <h2 className="ms-md-4">Contact Us</h2>

          <form className=" col-12" id="contact" onSubmit={sendEmail}>
            <div className="leftSection col-md-5 col-6  p-2">
              <label htmlFor="">Your Name</label> <br />
              <input
                type="text"
                placeholder="Enter Your Name"
                className="py-1 col-10"
                required
                name="name"
              />
              <br />
              <label htmlFor="" className="mt-4">
                Your Email
              </label>{" "}
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="py-1 col-10"
                required
                name="user_email"
                // onChange={handleChanges}
              />
              <br />
              <label htmlFor="" className="mt-4 message">
                How can we help you?
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="I need a software for my ...."
                className="py-1 col-12"
                required
                name="message"
                // onChange={handleChanges}
              />
            </div>
            <div className="rightSection col-md-5 col-6  p-1">
              <label htmlFor="">Your Phone</label> <br />
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="py-1 col-10"
                required
                // onChange={handleChanges}
                name="phone"
              />
              <br />
              <label htmlFor="" className="mt-4">
                Your Company (Optional)
              </label>{" "}
              <br />
              <input
                type="text"
                placeholder="Enter Your Company Name"
                className="py-1 col-10"
                name="compnay"
              />
              <button type="submit" className="mt-5 submitBtn">
                Submit
              </button>
            </div>
          </form>
          <p className="ms-4 mt-3 emailsender">
            Case Document can be send via given email{" "}
            <a href="mailto:hamzaiqbal176@gmail.com">hamzaiqbal176@gmail.com</a>
          </p>
        </div>
        {/*  */}
        <div className="logoContainer col-md-3 col-12 ">
          <div className="app__footer-links_logo">
            <img src={images.gericht} alt="footer_logo" />
            <p className="p__opensans">
              "The best way to find yourself is to lose yourself in the service
              of others."
            </p>
            <div className="app__footer-links-icons">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>
        </div>
        <div className="workingHousContainer col-md-3 col-12 ">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="app__opensans">Monday-Friday:</p>
          <p className="app__opensans">08:00 am - 04:00 pm</p>
          <p className="app__opensans">Saturday-Sunday:</p>
          <p className="app__opensans">08:00 am - 03:00 pm</p>
        </div>
      </div>
      <hr />
      <p className="p__opensans col-md-3 col-7 mx-auto mt-4">
        2022 Appwonderkode. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;

{
  /* <FooterOverlay />
    

    <div className="app__footer-links">
     <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact</h1>
      <p className="app__opensans">Ankenesveien 222A, Narvik, 8520, Norway</p>
      <p className="app__opensans">+4797341490</p>
      </div> 
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className="spoon_img" style={{ marginTop: 15 }} />
       <div className="app__footer-links-icons">
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
      </div>

      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
      <p className="app__opensans">Monday-Friday:</p>
      <p className="app__opensans">08:00 am - 04:00 pm</p>
      <p className="app__opensans">Saturday-Sunday:</p>
      <p className="app__opensans">08:00 am - 03:00 pm</p>
      


      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Appwonderkode. All Rights Reserved</p>
    </div> */
}
