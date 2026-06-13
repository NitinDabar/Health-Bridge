import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const EmergencyCareScreen = () => {
  return (
    <Container className="py-5">
      <Link className="btn btn-dark mb-4 px-4 py-2 rounded-pill" to="/">
        <i className="fas fa-arrow-left me-2"></i> Go Home
      </Link>
      
      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-danger mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>Emergency Medical Care</h1>
        <p className="text-muted fs-5">HealthBridge 24/7 Rapid Response & Life Support Services</p>
      </div>

      {/* Emergency Call Banner */}
      <Card className="border-0 shadow rounded-4 p-4 text-white text-center mb-5" style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)" }}>
        <Card.Body>
          <h2 className="fw-bold mb-3"><i className="fas fa-ambulance me-2"></i> Need Urgent Assistance?</h2>
          <p className="fs-5 mb-4 opacity-90">Our emergency trauma unit and ambulance dispatch services operate round-the-clock.</p>
          <a href="tel:+18005550199" className="btn btn-light btn-lg px-5 py-3 fw-bold text-danger rounded-pill shadow-sm">
            <i className="fas fa-phone-alt me-2"></i> CALL HOTLINE: +1-800-555-0199
          </a>
        </Card.Body>
      </Card>

      {/* Capabilities Section */}
      <h3 className="fw-bold text-slate-800 mb-4" style={{ fontFamily: "'Outfit', sans-serif", color: "var(--slate-800)" }}>Emergency Capabilities</h3>
      <Row className="g-4 mb-5">
        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <Card.Body className="text-center">
              <div className="p-3 rounded-3 mb-3 d-inline-block" style={{ backgroundColor: "rgba(220, 38, 38, 0.1)", color: "#dc2626" }}>
                <i className="fas fa-heartbeat fs-3"></i>
              </div>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Cardiac Care</h5>
              <p className="text-muted small mb-0">Instant diagnostic ECGs, stabilization, and immediate cardiac resuscitation protocols.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <Card.Body className="text-center">
              <div className="p-3 rounded-3 mb-3 d-inline-block" style={{ backgroundColor: "rgba(13, 148, 136, 0.1)", color: "var(--primary-teal)" }}>
                <i className="fas fa-procedures fs-3"></i>
              </div>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Trauma & ICU</h5>
              <p className="text-muted small mb-0">Dedicated critical care beds, ventilator setups, and emergency surgery operation rooms.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <Card.Body className="text-center">
              <div className="p-3 rounded-3 mb-3 d-inline-block" style={{ backgroundColor: "rgba(99, 102, 241, 0.1)", color: "var(--primary-indigo)" }}>
                <i className="fas fa-user-md fs-3"></i>
              </div>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Expert Team</h5>
              <p className="text-muted small mb-0">On-call surgeons, emergency medicine specialists, and trauma nurses active 24/7.</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <Card.Body className="text-center">
              <div className="p-3 rounded-3 mb-3 d-inline-block" style={{ backgroundColor: "rgba(14, 165, 233, 0.1)", color: "var(--sky-500)" }}>
                <i className="fas fa-truck-medical fs-3"></i>
              </div>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Ambulance Fleet</h5>
              <p className="text-muted small mb-0">Life-support equipped ICU vehicles dispatched instantly for fast hospital transfers.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Guidelines Card */}
      <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
        <Card.Body>
          <h4 className="fw-bold text-slate-800 mb-3" style={{ color: "var(--slate-800)" }}><i className="fas fa-info-circle text-teal me-2" style={{ color: "var(--primary-teal)" }}></i> What to Do in a Medical Crisis?</h4>
          <ol className="text-muted leading-relaxed mb-0 d-flex flex-column gap-2.5">
            <li><strong>Stay Calm:</strong> Assess the patient's consciousness and check if they are breathing.</li>
            <li><strong>Call Immediately:</strong> Dial our hotline `+1-800-555-0199` to request ambulance dispatch.</li>
            <li><strong>Provide Details:</strong> State the exact location, condition of the patient, and a contact phone number clearly.</li>
            <li><strong>Do Not Move:</strong> Unless there is danger, do not move an injured patient yourself; wait for specialized EMT help.</li>
          </ol>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EmergencyCareScreen;
