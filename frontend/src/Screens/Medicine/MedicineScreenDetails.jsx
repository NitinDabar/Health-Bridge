import { Link, useParams } from "react-router-dom";
import {
  Col,
  Row,
  Card,
  Button,
  Image,
  Form,
  Container,
  Badge,
  ListGroup,
} from "react-bootstrap";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useState } from "react";
import { addToCart } from "../../slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  useGetMedicineDetailsQuery,
  useCreateReviewMutation,
} from "../../slices/medsApiSlice";

const MedicineScreenDetails = () => {
  const { id: medId } = useParams();

  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const {
    data: med,
    isLoading,
    refetch,
    error,
  } = useGetMedicineDetailsQuery(medId);

  const [createReview, { isLoading: loadingMedicineReview }] =
    useCreateReviewMutation();

  const { userInfo } = useSelector((state) => state.auth);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        medId,
        rating,
        comment,
      }).unwrap();
      refetch();
      toast.success("Review created successfully");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const addToCartHandler = () => {
    if (!userInfo) {
      toast.error("You Need To Login First");
    } else {
      dispatch(addToCart({ ...med, qty }));
      toast.success("Item added to cart");
    }
  };

  return (
    <>
      <Container className="py-5">
        <Link className="btn btn-dark mb-4 px-4 py-2 rounded-pill" to="/Medicine">
          <i className="fas fa-arrow-left me-2"></i> Go Back
        </Link>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"}>
            {error?.data?.message || error.error}
          </Message>
        ) : (
          <>
            <Row className="g-4">
              {/* Product Image Card */}
              <Col md={6} xs={12}>
                <Card className="border-0 shadow-sm rounded-4 overflow-hidden p-4 bg-white d-flex justify-content-center align-items-center" style={{ minHeight: "420px" }}>
                  <Image src={med.image} alt={med.name} fluid className="rounded-3" style={{ maxHeight: "360px", objectFit: "contain" }} />
                </Card>
              </Col>

              {/* Product Info & Actions Column */}
              <Col md={6} xs={12}>
                <div className="d-flex flex-column h-100 justify-content-between">
                  <Card className="border-0 shadow-sm rounded-4 p-4 mb-4 bg-white">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <div>
                        <h2 className="fw-bold text-slate-900 mb-1" style={{ color: "var(--slate-800)" }}>{med.name}</h2>
                        <Rating value={med.rating} text={`${med.numReviews} reviews`} />
                      </div>
                      <Badge bg={med.countInStock > 0 ? "success" : "danger"} className="px-3 py-2 rounded-pill fs-7 text-white">
                        {med.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <span className="fs-3 fw-bold text-teal" style={{ color: "var(--primary-teal)" }}>৳ {med.price}</span>
                    </div>

                    <hr className="my-3 text-slate-200" />

                    <div>
                      <h5 className="fw-bold mb-2" style={{ color: "var(--slate-800)" }}>Description</h5>
                      <p className="text-muted leading-relaxed">{med.description}</p>
                    </div>
                  </Card>

                  {/* Add to Cart Card */}
                  <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                    <Row className="align-items-center g-3">
                      {med.countInStock > 0 && (
                        <Col sm={6} xs={12}>
                          <div className="d-flex align-items-center gap-3">
                            <label className="fw-semibold text-slate-700 mb-0 flex-shrink-0" style={{ color: "var(--slate-800)" }}>Quantity:</label>
                            <Form.Control
                              as="select"
                              value={qty}
                              onChange={(e) => setQty(Number(e.target.value))}
                              className="rounded-3 border-slate-200"
                              style={{ width: "100px" }}
                            >
                              {[...Array(med.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </div>
                        </Col>
                      )}
                      <Col sm={med.countInStock > 0 ? 6 : 12} xs={12}>
                        <Button
                          className="w-100 py-2.5 fw-semibold rounded-pill"
                          type="button"
                          disabled={med.countInStock === 0}
                          onClick={addToCartHandler}
                          style={{
                            background: "linear-gradient(135deg, var(--primary-teal), var(--primary-indigo))",
                            border: "none",
                            boxShadow: "0 4px 14px rgba(13, 148, 136, 0.25)"
                          }}
                        >
                          <i className="fas fa-shopping-cart me-2"></i> Add To Cart
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>

            {/* Reviews Card */}
            <Row className="mt-5 review">
              <Col md={12}>
                <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
                  <h3 className="fw-bold text-slate-900 mb-4 d-flex align-items-center gap-2" style={{ color: "var(--slate-800)" }}>
                    <i className="far fa-comments text-teal" style={{ color: "var(--primary-teal)" }}></i> Customer Reviews
                  </h3>
                  {med.reviews.length === 0 && <Message variant="info">No reviews yet. Be the first to review this product!</Message>}
                  
                  <ListGroup variant="flush">
                    {med.reviews.map((review) => (
                      <ListGroup.Item key={review._id} className="py-3 px-0 border-slate-100" style={{ borderBottom: "1px solid var(--slate-100)" }}>
                        <div className="d-flex justify-content-between align-items-start mb-1">
                          <strong className="text-slate-800" style={{ color: "var(--slate-800)" }}>{review.name}</strong>
                          <span className="text-muted small">{review.createdAt.substring(0, 10)}</span>
                        </div>
                        <Rating value={review.rating} />
                        <p className="mt-2 mb-0 text-slate-600">{review.comment}</p>
                      </ListGroup.Item>
                    ))}
                    
                    <ListGroup.Item className="pt-4 px-0 border-0">
                      <h4 className="fw-bold text-slate-900 mb-3" style={{ color: "var(--slate-800)" }}>Write a Customer Review</h4>

                      {loadingMedicineReview && <Loader />}

                      {userInfo ? (
                        <Form onSubmit={submitHandler}>
                          <Form.Group className="mb-3" controlId="rating">
                            <Form.Label className="fw-semibold text-slate-700" style={{ color: "var(--slate-800)" }}>Rating</Form.Label>
                            <Form.Control
                              as="select"
                              required
                              value={rating}
                              onChange={(e) => setRating(e.target.value)}
                              className="rounded-3 border-slate-200"
                            >
                              <option value="">Select...</option>
                              <option value="1">1 - Poor</option>
                              <option value="2">2 - Fair</option>
                              <option value="3">3 - Good</option>
                              <option value="4">4 - Very Good</option>
                              <option value="5">5 - Excellent</option>
                            </Form.Control>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="comment">
                            <Form.Label className="fw-semibold text-slate-700" style={{ color: "var(--slate-800)" }}>Comment</Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              required
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              className="rounded-3 border-slate-200"
                              placeholder="Share your experience with this medicine..."
                            ></Form.Control>
                          </Form.Group>
                          <Button
                            disabled={loadingMedicineReview}
                            type="submit"
                            variant="primary"
                            className="px-4 py-2 fw-semibold rounded-pill"
                            style={{
                              background: "var(--primary-teal)",
                              borderColor: "var(--primary-teal)"
                            }}
                          >
                            Submit Review
                          </Button>
                        </Form>
                      ) : (
                        <Message>
                          Please <Link to="/login" className="fw-bold text-teal" style={{ color: "var(--primary-teal)" }}>sign in</Link> to write a review.
                        </Message>
                      )}
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default MedicineScreenDetails;
