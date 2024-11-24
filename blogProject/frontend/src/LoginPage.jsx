import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3034/api/login", { email, password })
      .then((res) => {
        toast.success("Login Successful!");
        setTimeout(() => navigate("/dashboard"), 2000);
      })
      .catch((err) => {
        toast.error("Login Failed!");
        console.log(err.response);
      });
  };

  return (
    <Container>
      <ToastContainer />
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h1 className="text-center mb-4">Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="exampleInputEmail1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleInputPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
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
