// Footer.js
import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // You can use react-icons for social media icons

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          {/* Column for links */}
          <Col md={6}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#features" className="text-white">
                Features
              </Nav.Link>
              <Nav.Link href="#about" className="text-white">
                About
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Column for social media links */}
          <Col md={6} className="text-md-end">
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link
                href="https://facebook.com"
                target="_blank"
                className="text-white"
              >
                <FaFacebook size={24} />
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com"
                target="_blank"
                className="text-white"
              >
                <FaTwitter size={24} />
              </Nav.Link>
              <Nav.Link
                href="https://instagram.com"
                target="_blank"
                className="text-white"
              >
                <FaInstagram size={24} />
              </Nav.Link>
              <Nav.Link
                href="https://linkedin.com"
                target="_blank"
                className="text-white"
              >
                <FaLinkedin size={24} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Copyright Section */}
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 My Website. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
