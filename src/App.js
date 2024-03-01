import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Home from "./Home";
import About from "./About";
import Education from "./Education";
import Contact from "./Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faGraduationCap, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <Router>
       <Navbar expand="lg" className="mb-4 navbar-dark"> {/* Removed bg-primary */}
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white d-flex align-items-center"> {/* Changed href to as={Link} to use React Router Link */}
              WELCOME!!!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 bg-transparent">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="fs-5 fw-italic">
              <Nav.Link as={Link} to="/" className="text-white text-decoration-none px-3"> {/* Corrected px-7=20 to px-3 */}
                <FontAwesomeIcon icon={faHome} className="me-2" />
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-white text-decoration-none px-3">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/education" className="text-white text-decoration-none px-3">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-white text-decoration-none px-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5" style={{ maxWidth: "800px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
