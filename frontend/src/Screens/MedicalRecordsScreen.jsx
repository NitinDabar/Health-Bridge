import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button, Table, Badge, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  useGetMyRecordsQuery,
  useCreateRecordMutation,
  useDeleteRecordMutation,
} from "../slices/recordsApiSlice";
import { toast } from "react-toastify";

const MedicalRecordsScreen = () => {
  const [title, setTitle] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [recordType, setRecordType] = useState("Lab Test");
  const [date, setDate] = useState(new Date().toISOString().substring(0, 10));
  const [description, setDescription] = useState("");
  const [filterType, setFilterType] = useState("All");

  const { data: records, isLoading, error, refetch } = useGetMyRecordsQuery();
  const [createRecord, { isLoading: isCreating }] = useCreateRecordMutation();
  const [deleteRecord] = useDeleteRecordMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!title || !doctorName || !description) {
      toast.error("Please fill in all required fields");
      return;
    }
    try {
      await createRecord({
        title,
        doctorName,
        recordType,
        date,
        description,
      }).unwrap();
      toast.success("Medical record added successfully");
      setTitle("");
      setDoctorName("");
      setDescription("");
      refetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error || "Failed to create record");
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete this medical record?")) {
      try {
        await deleteRecord(id).unwrap();
        toast.success("Record deleted successfully");
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error || "Failed to delete record");
      }
    }
  };

  // Filter records based on selected type
  const filteredRecords = records?.filter((r) => {
    if (filterType === "All") return true;
    return r.recordType === filterType;
  });

  const getBadgeBg = (type) => {
    switch (type) {
      case "Prescription":
        return "primary";
      case "Lab Test":
        return "success";
      case "Radiology":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <Container className="py-5">
      <Link className="btn btn-dark mb-4 px-4 py-2 rounded-pill shadow-sm" to="/">
        <i className="fas fa-arrow-left me-2"></i> Go Home
      </Link>

      <div className="text-center mb-5">
        <h1 className="fw-bold display-4 text-slate-900 mb-2" style={{ fontFamily: "'Outfit', sans-serif", color: "var(--slate-800)" }}>
          My Medical & Test Records
        </h1>
        <p className="text-muted fs-5">
          Access your digital health vault, lab test results, and doctor prescriptions securely
        </p>
      </div>

      <Row className="g-4">
        {/* Records List Section */}
        <Col lg={8}>
          <Card className="border-0 shadow-sm rounded-4 bg-white p-4">
            <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
              <h3 className="fw-bold text-slate-800 mb-0" style={{ color: "var(--slate-800)" }}>
                <i className="fas fa-folder-open text-teal me-2" style={{ color: "var(--primary-teal)" }}></i>
                Records Repository
              </h3>
              
              {/* Filters */}
              <div className="d-flex flex-wrap gap-1.5">
                {["All", "Prescription", "Lab Test", "Radiology", "Other"].map((type) => (
                  <Button
                    key={type}
                    variant={filterType === type ? "teal" : "outline-teal"}
                    className="btn-sm rounded-pill px-3 py-1 text-capitalize"
                    style={
                      filterType === type 
                        ? { backgroundColor: "var(--primary-teal)", borderColor: "var(--primary-teal)", color: "#fff" }
                        : { color: "var(--primary-teal)", borderColor: "var(--primary-teal)" }
                    }
                    onClick={() => setFilterType(type)}
                  >
                    {type === "All" ? "Show All" : type}
                  </Button>
                ))}
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-teal" role="status"></div>
                <p className="text-muted mt-2">Loading medical records...</p>
              </div>
            ) : error ? (
              <Alert variant="danger">
                {error?.data?.message || error.error || "Failed to load medical records"}
              </Alert>
            ) : !filteredRecords || filteredRecords.length === 0 ? (
              <div className="text-center py-5 border rounded-4 bg-light bg-opacity-40">
                <i className="fas fa-file-medical-alt fs-1 text-muted opacity-50 mb-3"></i>
                <h5 className="fw-bold text-slate-700">No Records Found</h5>
                <p className="text-muted small mx-auto" style={{ maxWidth: "300px" }}>
                  You don't have any records in the "{filterType}" category yet. Add a record on the right to start tracking.
                </p>
              </div>
            ) : (
              <Table responsive hover className="align-middle mb-0 text-start">
                <thead className="table-light">
                  <tr>
                    <th>Record Info</th>
                    <th>Type</th>
                    <th>Doctor</th>
                    <th>Date</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.map((record) => (
                    <tr key={record._id}>
                      <td>
                        <div className="fw-bold text-slate-800">{record.title}</div>
                        <div className="text-muted small text-truncate" style={{ maxWidth: "220px" }}>
                          {record.description}
                        </div>
                      </td>
                      <td>
                        <Badge bg={getBadgeBg(record.recordType)} className="px-2.5 py-1.5 rounded-pill text-capitalize">
                          {record.recordType}
                        </Badge>
                      </td>
                      <td className="text-slate-800">{record.doctorName}</td>
                      <td className="text-muted small">
                        {new Date(record.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td>
                        <div className="d-flex justify-content-center gap-1.5">
                          <Button
                            variant="link"
                            className="text-danger p-1"
                            onClick={() => deleteHandler(record._id)}
                            title="Delete Record"
                          >
                            <i className="fas fa-trash-alt fs-5"></i>
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card>
        </Col>

        {/* Add Record Form Section */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm rounded-4 bg-white p-4">
            <h3 className="fw-bold text-slate-800 mb-3" style={{ color: "var(--slate-800)" }}>
              <i className="fas fa-plus-circle text-indigo me-2" style={{ color: "var(--primary-indigo)" }}></i>
              Add New Record
            </h3>
            <p className="text-muted small mb-4">
              Add details of prescriptions, test reports, or consultation documents.
            </p>

            <Form onSubmit={submitHandler} className="d-flex flex-column gap-3">
              <Form.Group controlId="title">
                <Form.Label className="small fw-semibold text-slate-700">Record Title / Name *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Blood Sugar Report"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="rounded-3 border-slate-200"
                  required
                />
              </Form.Group>

              <Form.Group controlId="doctorName">
                <Form.Label className="small fw-semibold text-slate-700">Consultant Doctor *</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="e.g., Dr. Jonathan Ross"
                  value={doctorName}
                  onChange={(e) => setDoctorName(e.target.value)}
                  className="rounded-3 border-slate-200"
                  required
                />
              </Form.Group>

              <Row className="g-3">
                <Col md={6}>
                  <Form.Group controlId="recordType">
                    <Form.Label className="small fw-semibold text-slate-700">Category *</Form.Label>
                    <Form.Select
                      value={recordType}
                      onChange={(e) => setRecordType(e.target.value)}
                      className="rounded-3 border-slate-200"
                      required
                    >
                      <option value="Lab Test">Lab Test</option>
                      <option value="Prescription">Prescription</option>
                      <option value="Radiology">Radiology</option>
                      <option value="Other">Other</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="date">
                    <Form.Label className="small fw-semibold text-slate-700">Record Date *</Form.Label>
                    <Form.Control
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="rounded-3 border-slate-200"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="description">
                <Form.Label className="small fw-semibold text-slate-700">Findings & Notes *</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Summary of recommendations or diagnosis results..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="rounded-3 border-slate-200"
                  required
                />
              </Form.Group>

              <Button
                type="submit"
                variant="teal"
                disabled={isCreating}
                className="w-100 mt-2 py-2.5 rounded-pill fw-bold text-white shadow-sm border-0"
                style={{ backgroundColor: "var(--primary-teal)", transition: "var(--transition-smooth)" }}
              >
                {isCreating ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Adding...
                  </>
                ) : (
                  <>
                    <i className="fas fa-file-upload me-2"></i> Save to Vault
                  </>
                )}
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MedicalRecordsScreen;
