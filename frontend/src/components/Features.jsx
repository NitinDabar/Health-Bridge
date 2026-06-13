import React from "react";
import Button from "@material-ui/core/Button";
import images01 from "../images/icon/blood_donation.png";
import images02 from "../images/icon/medical-kit.png";
import images03 from "../images/icon/AdobeStock_207418957_Preview-removebg-preview.png";
import images04 from "../images/icon/open.png";
import images05 from "../images/icon/chat.png";
import images06 from "../images/icon/appointment.png";
import "../assets/styles/Features.css";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div>
      <section id="home-icon" className="pb-3 text-center">
        <div className="text-center mb-5 container">
          <h2 className="fw-bold text-slate-900" style={{ color: "var(--slate-800)" }}>Why Choose HealthBridge?</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            We provide convenient, accessible, and high-quality digital healthcare features right at your fingertips.
          </p>
        </div>
        <div className="containerx text-center">
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-1" className="box">
                <img src={images02} alt="Emergency Care" />
                <h3>Emergency Care</h3>
                <p className="lead">
                  Our emergency care facility operates 24/7 with a dedicated trauma response team. For immediate ambulance dispatch or critical emergencies, call our hotline: +1-800-555-0199.
                </p>
                <Link className="btnlink" to="/emergency-care">
                  <Button variant="contained">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-2" className="box">
                <img src={images04} alt="Opening Hours" />
                <h3>Opening Hours</h3>
                <p className="lead">
                  General consultations: Mon-Fri (8:00 AM - 10:00 PM), Sat (9:00 AM - 6:00 PM). Emergency admissions, trauma center, and our online pharmacy remain open 24/7, 365 days a year.
                </p>
                <Link className="btnlink" to="/opening-hours">
                  <Button variant="contained">Learn More</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-3" className="box">
                <img src={images01} alt="Blood Donation" />
                <h3>Blood Donation</h3>
                <p className="lead">
                  Find blood donors near you or request blood emergencies. Donate today and save a life.
                </p>
                <Link className="btnlink" to="/Blood">
                  <Button variant="contained">Donate Now</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-4" className="box">
                <img src={images05} alt="Chat With Doctors" />
                <h3>Chat With Doctors</h3>
                <p className="lead">
                  Consult with expert doctors online through our integrated, secure live-chat environment.
                </p>
                <Link className="btnlink" to="/chat">
                  <Button variant="contained">Chat Now</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-5" className="box">
                <img src={images06} alt="Get Appointment" />
                <h3>Get Appointment</h3>
                <p className="lead">
                  Book online doctor appointments, choose visit slots, and consult specialized practitioners easily.
                </p>
                <Link className="btnlink" to="/Doctor">
                  <Button variant="contained">Book Slot</Button>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-center">
              <div id="box-6" className="box">
                <img src={images03} alt="24 Hours Service" />
                <h3>24 Hours Service</h3>
                <p className="lead">
                  Providing modern digital healthcare and local medical services 24/7. Connect with us anytime.
                </p>
                <Link className="btnlink" to="/contactus">
                  <Button variant="contained">Contact Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
