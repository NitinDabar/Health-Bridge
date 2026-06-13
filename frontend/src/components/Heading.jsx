import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "../assets/styles/Heading.css";
import images01 from "../images/doctors.png";
import images02 from "../images/do-2.png";
import images03 from "../images/do-3.png";
import images04 from "../images/Abortionamico591x531.png";
import images05 from "../images/World-health-dayrafiki591x531.png";
import { Carousel } from "react-bootstrap";

const Heading = () => {
  return (
    <div className="site-header">
      <div className="container-fluid main_header">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="row">
              <div className="col-md-5 col-12 main_header_left">
                <section className="left-sec">
                  <h3> We Are Here For Your Care</h3>
                  <h1 style={{ fontWeight: 800 }}>
                    We Provide <br />
                    <span style={{ background: "linear-gradient(135deg, var(--primary-teal), #0ea5e9)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>The Best</span>{" "}
                    <span style={{ background: "linear-gradient(135deg, var(--primary-indigo), #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Care & Doctors</span>
                  </h1>
                  <p>Your trusted healthcare partner 24/7. Connect with top specialists and access health resources instantly.</p>

                  <Link className="btnlink" to="/Doctor">
                    <Button className="hero-btn" variant="contained">
                      Make An Appointment
                    </Button>
                  </Link>
                </section>
              </div>
              <div className="col-md-7 col-12 main_header_right">
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={images04}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-78 img-fluid"
                      src={images05}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={images01}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={images02}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="w-80 img-fluid"
                      src={images03}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
