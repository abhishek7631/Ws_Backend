import { Container, Row, Col, Nav } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={10}>
            <h5>About Us</h5>
            <p className="w-50">
              We are a company committed to providing high-quality services and
              solutions. Our mission is to deliver exceptional value to our
              clients.
            </p>
          </Col>
          <Col md={2}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#services" className="text-white">
                Services
              </Nav.Link>
              <Nav.Link href="#contact" className="text-white">
                Contact
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
