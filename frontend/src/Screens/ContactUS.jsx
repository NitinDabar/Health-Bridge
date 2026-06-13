import React from "react";
import images01 from "../images/undraw_message_sent_1030.svg";
import "../assets/styles/contactus.css";

const ContactUS = () => {
  return (
    <div className="contact1">
      <div className="container-contact1">
        <div id="contactid" className="contact1-pic">
          <img src={images01} alt="Contact illustration" />
        </div>

        <form className="contact1-form">
          <span className="contact1-form-title">Contact Us</span>

          <div className="wrap-input1">
            <input
              className="input1"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
          </div>

          <div className="wrap-input1">
            <input
              className="input1"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>

          <div className="wrap-input1">
            <textarea
              className="input1"
              name="message"
              placeholder="Message"
              required
            ></textarea>
          </div>

          <div className="container-contact1-form-btn">
            <button className="contact1-form-btn" type="submit">
              <span>
                Send Message
                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
