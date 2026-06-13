import React from "react";
import { Link } from "react-router-dom";
import doctor from "../images/5790-removebg.png";
import "../assets/styles/MakeAppointment.css";
const MakeAppointment = () => {
  return (
    <div className="container my-5">
      <section className="make-appointment">
        <div className="appointment_container">
          <div className="row align-items-center">
            <div className="col-md-7 text-white py-5 front">
              <h5 className="text-uppercase my-2">Medicines & Pharmacy</h5>
              <h1 className="my-4" style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800 }}>
                Purchase Medicines <br /> Online Today
              </h1>
              <p className="opacity-90 mb-4">
                All kinds of prescription drugs, wellness pills, and healthcare products are available at the best prices with instant delivery.
              </p>
              <Link
                to="/Medicine"
                className="contact1-form-btn1"
              >
                Order Now
              </Link>
            </div>
            <div className="col-md-5 d-none d-md-block text-center position-relative">
              <img src={doctor} alt="Doctor illustration" className="medicine-promo-img" style={{ maxHeight: '350px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
