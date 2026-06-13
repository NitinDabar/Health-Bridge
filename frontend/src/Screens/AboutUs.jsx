import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card } from "react-bootstrap";
import images01 from "../images/Group 140.png";
import "../assets/styles/aboutus.css";

const AboutUs = () => {
  return (
    <section id="about" className=" d-flex align-item-center aboutcls">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                  Welcome to About Page <br />
                  <strong className="brand-name "> HealthBridge</strong>
                </h1>
                <h2 className="my-2">
                  We are a dedicated team of healthcare professionals and
                  technologists, committed to transforming the way healthcare is
                  delivered. Our mission is to make healthcare more accessible,
                  efficient, and personalized through innovative technology
                  solutions.
                  <br /> <br />
                  HealthBridge is more than a project for us. It's our contribution
                  to making healthcare better for everyone. We are committed to
                  developing technology that not only improves the efficiency of
                  healthcare services but also enhances patient experience.
                  <br /> <br />
                  Thank you for being a part of our mission. We look forward to
                  continuing to serve you and revolutionize healthcare together.
                </h2>
                <div className="mt-3">
                  <Link to="/service" className="btn-get-started">
                    Contact Now
                  </Link>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2  about-img">
                <img
                  src={images01}
                  style={{ height: "82vh" }}
                  className="img-fluid animated"
                  alt="about image"
                />
              </div>
            </div>

            {/* Emergency Care & Opening Hours Details */}
            <Row className="g-4 mt-5">
              <Col md={6}>
                <Card className="border-0 shadow-sm rounded-4 p-4 h-100" style={{ backgroundColor: "#ffffff" }}>
                  <Card.Body>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)", color: "var(--primary-teal)" }}>
                        <i className="fas fa-ambulance fs-4"></i>
                      </div>
                      <h3 className="fw-bold mb-0 text-slate-800" style={{ fontSize: "1.3rem", color: "var(--slate-800)" }}>Emergency Care</h3>
                    </div>
                    <p className="text-muted leading-relaxed" style={{ fontSize: "0.9rem" }}>
                      Our emergency response unit operates 24/7, offering immediate life-saving care. Equipped with a dedicated trauma team, critical care beds, and advanced cardiac life support, we ensure instant treatment in times of crisis.
                    </p>
                    <p className="text-danger fw-bold mb-0" style={{ fontSize: "0.95rem" }}>
                      <i className="fas fa-phone-alt me-2"></i> Ambulance Hotline: +1-800-555-0199
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="border-0 shadow-sm rounded-4 p-4 h-100" style={{ backgroundColor: "#ffffff" }}>
                  <Card.Body>
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="p-3 rounded-3" style={{ backgroundColor: "rgba(99, 102, 241, 0.1)", color: "var(--primary-indigo)" }}>
                        <i className="far fa-clock fs-4"></i>
                      </div>
                      <h3 className="fw-bold mb-0 text-slate-800" style={{ fontSize: "1.3rem", color: "var(--slate-800)" }}>Opening Hours</h3>
                    </div>
                    <ul className="list-unstyled text-muted mb-0 d-flex flex-column gap-2" style={{ fontSize: "0.9rem" }}>
                      <li><strong>Outpatient Clinics:</strong> Mon - Fri (8:00 AM - 10:00 PM)</li>
                      <li><strong>Weekend Consultations:</strong> Sat (9:00 AM - 6:00 PM)</li>
                      <li><strong>Emergency & Trauma Center:</strong> Open 24/7 (365 Days)</li>
                      <li><strong>Online Telehealth & Chat Support:</strong> 24/7 Availability</li>
                    </ul>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
