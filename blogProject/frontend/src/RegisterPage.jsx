import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function RegisterPage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h1 className="text-center mb-4">Register</h1>
            <Form>
              <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create a password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm your password"
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mb-3">
                Register
              </Button>
              <div className="text-center">
                <span>Already have an account? </span>
                <a href="/login" className="text-primary">
                  Login here
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
