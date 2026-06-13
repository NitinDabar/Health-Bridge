import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import {
  FaCapsules,
  FaStethoscope,
  FaAddressBook,
  FaTty,
  FaSun,
  FaMoon
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import logo from "../images/ehealth.svg";


const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { doctorInfo } = useSelector((state) => state.choice);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <header className="sticky-top">
      <Navbar
        variant="light"
        className="glass-navbar"
        expand="lg"
        collapseOnSelect
      >
        <Container fluid style={{ margin: "0rem 4.8rem" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img alt="logo" src={logo} width="28px" />
              HealthBridge
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/Medicine">
                <Nav.Link>
                  <FaCapsules /> Medicine
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Doctor">
                <Nav.Link>
                  <FaStethoscope /> Doctor
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Blood">
                <Nav.Link>
                  <FaStethoscope /> Blood
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contactus">
                <Nav.Link>
                  <FaTty /> Contact Us
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Aboutus">
                <Nav.Link>
                  <FaAddressBook /> About Us
                </Nav.Link>
              </LinkContainer>
              {/* Theme Toggle */}
              <Nav.Link onClick={toggleTheme} className="theme-toggle-btn align-self-center mx-lg-2 py-2 px-2 d-flex align-items-center justify-content-center" style={{ cursor: 'pointer', borderRadius: '50%' }}>
                {theme === "light" ? <FaMoon style={{ fontSize: "1.1rem", color: "var(--slate-800)" }} /> : <FaSun style={{ fontSize: "1.1rem", color: "#e7e5e4" }} />}
              </Nav.Link>

              {!userInfo ? (
                <>
                  <LinkContainer to="/login">
                    <Nav.Link className="d-flex align-items-center">
                      <svg viewBox="0 0 24 24" width="15" height="15" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <span className="navbar-divider d-none d-lg-inline align-self-center mx-1" style={{ color: 'var(--slate-300)' }}>|</span>
                  <LinkContainer to="/register">
                    <Nav.Link className="d-flex align-items-center">
                      <svg viewBox="0 0 24 24" width="15" height="15" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                        <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      Sign Up
                    </Nav.Link>
                  </LinkContainer>
                </>
              ) : userInfo && userInfo.isAdmin ? (
                <>
                  <NavDropdown title={
                    <span className="d-inline-flex align-items-center">
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(13, 148, 136, 0.15)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '8px',
                        border: '1px solid rgba(13, 148, 136, 0.3)',
                        verticalAlign: 'middle'
                      }}>
                        <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'var(--primary-teal)', display: 'block' }}>
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </span>
                      {userInfo.name}
                    </span>
                  } id="username">
                    <LinkContainer to="/admin/profile">
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/my-records">
                      <NavDropdown.Item>Medical Records</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Sign Out
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Admin" id="adminmenu">
                    <LinkContainer to="/admin/medicinelist">
                      <NavDropdown.Item>Medicines</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/orderlist">
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/appointmentlist">
                      <NavDropdown.Item>Appointments</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/requestlist">
                      <NavDropdown.Item>Blood Request</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/userlist">
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/bloodlist">
                      <NavDropdown.Item>Bloods</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/doctorlist">
                      <NavDropdown.Item>Doctors</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/chat">
                      <NavDropdown.Item>Chat</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/admin/profile">
                    <Nav.Link className="nav-profile-btn d-flex align-items-center">
                      <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                      Profile
                    </Nav.Link>
                  </LinkContainer>
                  <Nav.Link onClick={logoutHandler} className="nav-logout-btn d-flex align-items-center">
                    <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                      <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z" />
                    </svg>
                    Sign Out
                  </Nav.Link>
                </>
              ) : (
                userInfo &&
                !userInfo.isAdmin && (
                  <>
                    <NavDropdown title={
                      <span className="d-inline-flex align-items-center">
                        <span style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(13, 148, 136, 0.15)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '8px',
                          border: '1px solid rgba(13, 148, 136, 0.3)',
                          verticalAlign: 'middle'
                        }}>
                          <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'var(--primary-teal)', display: 'block' }}>
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                          </svg>
                        </span>
                        {userInfo.name}
                      </span>
                    } id="username">
                      <LinkContainer to="/myprofile">
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/my-records">
                        <NavDropdown.Item>Medical Records</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/cart">
                        <NavDropdown.Item>
                          Cart
                          {cartItems.length > 0 && (
                            <Badge
                              pill
                              bg="success"
                              style={{ marginLeft: "5px" }}
                            >
                              {cartItems.reduce((a, c) => a + c.qty, 0)}
                            </Badge>
                          )}
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/placeappointment">
                        <NavDropdown.Item>
                          Appointment
                          {doctorInfo.length > 0 && (
                            <Badge
                              pill
                              bg="success"
                              style={{ marginLeft: "5px" }}
                            >
                              *
                            </Badge>
                          )}
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to="/chat">
                        <NavDropdown.Item>Chat</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Sign Out
                      </NavDropdown.Item>
                    </NavDropdown>
                    <LinkContainer to="/myprofile">
                      <Nav.Link className="nav-profile-btn d-flex align-items-center">
                        <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                        Profile
                      </Nav.Link>
                    </LinkContainer>
                    <Nav.Link onClick={logoutHandler} className="nav-logout-btn d-flex align-items-center">
                      <svg viewBox="0 0 24 24" width="14" height="14" style={{ fill: 'currentColor', marginRight: '6px', verticalAlign: 'middle' }}>
                        <path d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 0 1 2 2v2h-2V4H5v16h9v-2h2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9z" />
                      </svg>
                      Sign Out
                    </Nav.Link>
                  </>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
