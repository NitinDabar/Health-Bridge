import { Link, useNavigate, useParams } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Button,
  Image,
  Container,
  Badge,
} from "react-bootstrap";
import { useGetDoctorDetailsQuery } from "../../slices/doctorsApiSlice";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { addToChoice } from "../../slices/choiceSlice";
import { useDispatch } from "react-redux";
import doctorAvatar from "../../images/doctor_avatar.png";

const MedicineScreenDetails = () => {
  const { id: doctorId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: doctor, isLoading, error } = useGetDoctorDetailsQuery(doctorId);

  const appointmentHandler = () => {
    dispatch(addToChoice({ ...doctor }));
    navigate(`/appointmentdate`);
  };

  const chatHandler = () => {
    navigate(`/login?redirect=/doctor/${doctorId}/chat`);
  };

  return (
    <>
      <Container className="py-5">
        <Link className="btn btn-dark mb-4 px-4 py-2 rounded-pill" to="/Doctor">
          <i className="fas fa-arrow-left me-2"></i> Go Back
        </Link>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"}>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <Row className="g-4">
            {/* Left side: Doctor Profile Details & Actions */}
            <Col lg={7} md={12}>
              <Card className="border-0 shadow-sm rounded-4 p-4 mb-4" style={{ backgroundColor: "#ffffff" }}>
                <Row className="align-items-center align-items-md-start g-4">
                  <Col md={4} xs={12} className="text-center text-md-start">
                    <Image
                      src={doctorAvatar}
                      alt={doctor.name}
                      className="img-fluid rounded-4 shadow-sm border border-2 border-light"
                      style={{ width: "100%", maxWidth: "180px", objectFit: "cover", aspectRatio: "1/1" }}
                    />
                  </Col>
                  <Col md={8} xs={12}>
                    <div className="d-flex align-items-center flex-wrap gap-2 mb-2 justify-content-center justify-content-md-start">
                      <h2 className="mb-0 fw-bold text-slate-900" style={{ color: "var(--slate-800)" }}>{doctor.name}</h2>
                      <Badge bg="success" className="px-2.5 py-1.5 rounded-pill fs-7">
                        {doctor.specialist}
                      </Badge>
                    </div>
                    <p className="mb-3 fw-semibold text-center text-md-start fs-5" style={{ color: "var(--primary-indigo)" }}>{doctor.degree}</p>
                    
                    <hr className="my-3 text-slate-200" />
                    
                    <div className="d-flex flex-column gap-2.5 text-slate-700">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <i className="fas fa-hospital text-teal fs-5" style={{ width: "24px", color: "var(--primary-teal)" }}></i>
                        <span><strong>Chamber:</strong> {doctor.chamber}</span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <i className="far fa-clock text-teal fs-5" style={{ width: "24px", color: "var(--primary-teal)" }}></i>
                        <span><strong>Available Hours:</strong> {doctor.available}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                      <Button
                        className="px-4 py-2 fw-semibold rounded-pill"
                        variant="primary"
                        onClick={appointmentHandler}
                        style={{
                          background: "linear-gradient(135deg, var(--primary-teal), var(--primary-indigo))",
                          border: "none",
                          boxShadow: "0 4px 14px rgba(13, 148, 136, 0.25)"
                        }}
                      >
                        Book Appointment
                      </Button>
                      <Button
                        className="px-4 py-2 fw-semibold rounded-pill btn-outline-teal"
                        variant="outline-primary"
                        onClick={chatHandler}
                        style={{
                          borderColor: "var(--primary-teal)",
                          color: "var(--primary-teal)",
                          backgroundColor: "transparent"
                        }}
                      >
                        Chat with Doctor
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            {/* Right side: Chamber Location Map */}
            <Col lg={5} md={12}>
              <Card className="border-0 shadow-sm rounded-4 overflow-hidden" style={{ minHeight: "450px" }}>
                <Card.Header className="bg-white border-0 pt-4 px-4 pb-0">
                  <h4 className="fw-bold text-slate-900 mb-0 d-flex align-items-center gap-2" style={{ color: "var(--slate-800)" }}>
                    <i className="fas fa-map-marker-alt text-danger"></i> Chamber Location
                  </h4>
                  <p className="text-muted small mt-1 mb-3">Directions and map for {doctor.chamber}</p>
                </Card.Header>
                <Card.Body className="p-0 position-relative" style={{ minHeight: "350px", flexGrow: 1 }}>
                  {doctor.tag === "medinova" ? (
                    <iframe
                      title="Medinova Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9436812455024!2d91.85047709678955!3d24.899902600000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505536be64db9b%3A0x2c59a9310eef1711!2sMedinova%20Medical%20Services%20Ltd.!5e0!3m2!1sen!2sbd!4v1696529349591!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: "0", position: "absolute", top: 0, left: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : doctor.tag === "alharamain" ? (
                    <iframe
                      title="Al Haramain Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.2656612348183!2d91.87714957614342!3d24.888918344116885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3751ab2d9985f76f%3A0x5f56b6ff53d48aa6!2sAl%20Haramain%20Hospital%20Private%20Limited!5e0!3m2!1sen!2sbd!4v1696599668456!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: "0", position: "absolute", top: 0, left: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : doctor.tag === "mount" ? (
                    <iframe
                      title="Mount Adora Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14474.635500511367!2d91.8250547871582!3d24.90961490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505544775d6bf9%3A0xcec939c657524489!2sMount%20Adora%20Hospital%2C%20Akhalia!5e0!3m2!1sen!2sbd!4v1696599743395!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: "0", position: "absolute", top: 0, left: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : doctor.tag === "popular" ? (
                    <iframe
                      title="Popular Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.960001635034!2d91.85485847614359!3d24.89934594369903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375055315d7dbd0d%3A0x495d54cee9ae255f!2sPopular%20Medical%20Center%20Ltd!5e0!3m2!1sen!2sbd!4v1696599792099!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: "0", position: "absolute", top: 0, left: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  ) : (
                    doctor.tag === "njl" && (
                      <iframe
                        title="Hearing Centre NJL Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.9621682546117!2d91.85397057614365!3d24.899272043702044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750553151a3098b%3A0xb240d877fdcc954!2sHearing%20Centre%20NJL!5e0!3m2!1sen!2sbd!4v1696601309438!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: "0", position: "absolute", top: 0, left: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    )
                  )}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default MedicineScreenDetails;
