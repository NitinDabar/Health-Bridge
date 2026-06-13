import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Badge, Table } from "react-bootstrap";

const OpeningHoursScreen = () => {
  return (
    <Container className="py-5">
      <Link className="btn btn-dark mb-4 px-4 py-2 rounded-pill" to="/">
        <i className="fas fa-arrow-left me-2"></i> Go Home
      </Link>

      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-slate-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: "var(--slate-800)" }}>Operating Hours & Schedules</h1>
        <p className="text-muted fs-5">HealthBridge Facility and Telehealth Consultations Availability</p>
      </div>

      {/* Schedule Table Card */}
      <Card className="border-0 shadow-sm rounded-4 overflow-hidden mb-5 bg-white">
        <Card.Header className="bg-white border-0 pt-4 px-4">
          <h3 className="fw-bold text-slate-800 mb-0" style={{ color: "var(--slate-800)" }}><i className="far fa-calendar-alt text-teal me-2" style={{ color: "var(--primary-teal)" }}></i> Weekly Schedule</h3>
          <p className="text-muted small mt-1 mb-0">Detailed operating hours across various clinical departments.</p>
        </Card.Header>
        <Card.Body className="p-0">
          <Table responsive hover className="mb-0 align-middle">
            <thead className="table-light">
              <tr>
                <th className="ps-4 text-start">Department</th>
                <th>Weekdays (Mon-Fri)</th>
                <th>Saturdays</th>
                <th>Sundays</th>
                <th className="pe-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4 fw-bold text-start">General Outpatient Clinics</td>
                <td>8:00 AM - 10:00 PM</td>
                <td>9:00 AM - 6:00 PM</td>
                <td className="text-danger fw-semibold">Closed</td>
                <td className="pe-4"><Badge bg="primary">Standard</Badge></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-start">Emergency & Trauma Center</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td className="pe-4"><Badge bg="success" className="px-2.5">Open 24/7</Badge></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-start">ICU & Inpatient Wards</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td className="pe-4"><Badge bg="success" className="px-2.5">Open 24/7</Badge></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-start">Online Pharmacy & Delivery</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td className="pe-4"><Badge bg="success" className="px-2.5">Open 24/7</Badge></td>
              </tr>
              <tr>
                <td className="ps-4 fw-bold text-start">Telehealth & Chat Consultation</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td>Open 24 Hours</td>
                <td className="pe-4"><Badge bg="success" className="px-2.5">Open 24/7</Badge></td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Booking Guidelines Card */}
      <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
        <Card.Body>
          <h4 className="fw-bold text-slate-800 mb-3" style={{ color: "var(--slate-800)" }}><i className="far fa-clock text-teal me-2" style={{ color: "var(--primary-teal)" }}></i> Booking Information & Guidelines</h4>
          <Row className="g-4">
            <Col md={6}>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Consultations Slots</h5>
              <p className="text-muted leading-relaxed small mb-0">
                Outpatient consultations are scheduled during standard general hours. We recommend booking slots at least 24 hours in advance via our Doctor section to avoid waiting times.
              </p>
            </Col>
            <Col md={6}>
              <h5 className="fw-bold text-slate-800 mb-2" style={{ color: "var(--slate-800)" }}>Holiday Schedule</h5>
              <p className="text-muted leading-relaxed small mb-0">
                While outpatient clinics remain closed on public holidays, emergency care, inpatient wards, ICU units, and ambulance dispatch are fully active and staffed 365 days a year.
              </p>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OpeningHoursScreen;
