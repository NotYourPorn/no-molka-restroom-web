/** @format */
import React from "react";
import * as HiIcons from "react-icons/hi";

import "../css/Contact.css";
import Logo from "../img/logo.png";

function Contact() {
  return (
    <div className="contact">
      <div className="input-box">
        <h1 className="page-name">Contact Us</h1>
        <div className="name-box">
          <p>이름</p>
          <input type="text"></input>
        </div>
        <div className="email-box">
          <p>Email</p>
          <input type="text"></input>
        </div>
        <div className="message-box">
          <p>Message</p>
          <input type="text"></input>
        </div>
        <div className="line"></div>
        <button>Send</button>
      </div>

      <div className="info-box">
        <div className="info-inner-box">
          <img src={Logo} alt="Logo" className="Logo" />
          <div className="info-cheer"></div>
          <div className="email-info">
            <span>
              <HiIcons.HiOutlineMail />
            </span>
            <span>notyourporn@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
