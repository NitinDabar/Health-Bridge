import React from "react";
import Carousel from "react-elastic-carousel";
import { Item } from "../utils/chat.styled.js";
import "../assets/styles/Service.css";
import images01 from "../images/homeService/001-dental.png";
import images06 from "../images/homeService/tooth (1).png";
import images09 from "../images/icon/lungs.png";
import images10 from "../images/icon/throat.png";
import images11 from "../images/icon/141-stomach.png";
import images12 from "../images/icon/surgery.png";
import images13 from "../images/icon/141-ambulance.png";
import images14 from "../images/icon/cardiology.png";
import images15 from "../images/icon/stethoscope.png";
import images16 from "../images/icon/surgeon (1).png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const Service = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-slate-900" style={{ color: "var(--slate-800)" }}>Services We Provide</h2>
        <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
          We offer a comprehensive range of clinical departments and digital healthcare services to support your well-being.
        </p>
      </div>
      <div className="service_container">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images09}
                className="img-fluid"
                alt="Cardiology"
              />
              <h5>Cardiology </h5>
              <p>
                This department provides medical care to patients who have
                problems with their heart or circulation.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images01}
                className="img-fluid"
                alt="Dentistry"
              />
              <h5>Dentists Point</h5>
              <p>
                Professional dental cleaning, surgery, and braces solutions to care for your teeth.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images12}
                className="img-fluid"
                alt="Surgery"
              />
              <h5>General surgery</h5>
              <p>
                Covers a wide range of types of surgery and procedures on patients.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images10}
                className="img-fluid"
                alt="ENT"
              />
              <h5>Ear nose and throat (ENT)</h5>
              <p>
                The ENT department provides care for patients with a variety of ear, nose and throat problems.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images11}
                className="img-fluid"
                alt="Gastroenterology"
              />
              <h5>Gastroenterology</h5>
              <p>
                This department investigates and treats digestive and gastrointestinal diseases.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images06}
                className="img-fluid"
                alt="Fluoride"
              />
              <h5>Fluoride Treatment</h5>
              <p>
                Dentists provide professional highly concentrated fluoride varnish and rinse treatments.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images13}
                className="img-fluid"
                alt="Critical care"
              />
              <h5>Critical care</h5>
              <p>
                Also called intensive care, this department is for seriously ill patients.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images14}
                className="img-fluid"
                alt="ICU"
              />
              <h5>Intensive Care Unit (ICU)</h5>
              <p>
                Specialized monitoring and intensive therapy services for patients needing critical support.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images15}
                className="img-fluid"
                alt="Anesthesiology"
              />
              <h5>Anesthesiology</h5>
              <p>
                Patient care before, during, and after surgical and medical procedures.
              </p>
            </div>
          </Item>
          <Item>
            <div className="service-card text-center">
              <img
                style={{ height: "60px" }}
                src={images16}
                className="img-fluid"
                alt="Diagnostics"
              />
              <h5>Advanced Diagnostics</h5>
              <p>
                Comprehensive laboratory tests, screening, and diagnostic imaging services.
              </p>
            </div>
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Service;
