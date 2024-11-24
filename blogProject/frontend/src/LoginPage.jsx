import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function LoginPage() {
  return (
    <Container>
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h1 className="text-center mb-4">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="exampleInputEmail1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleInputPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mb-3">
                Submit
              </Button>
              <div className="text-center">
                <span>New here? </span>
                <a href="/register" className="text-primary">
                  Register now
                </a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;
