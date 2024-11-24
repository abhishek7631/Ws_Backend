import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3034/api/register", {
        username,
        email,
        password,
        role,
      })
      .then((res) => {
        toast.success("Registration Successful!");
        setTimeout(() => navigate("/"), 2000);
      })
      .catch((err) => {
        toast.error("Registration Failed! " + err.message);
      });
  };

  return (
    <Container>
      <ToastContainer />
      <Row className="justify-content-center align-items-center vh-100">
        <Col xs={12} sm={8} md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h1 className="text-center mb-4">Register</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="registerName">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="registerRole">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Admin or Student"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="success" type="submit" className="w-100 mb-3">
                Register
              </Button>
              <div className="text-center">
                <span>Already have an account? </span>
                <a href="/" className="text-primary">
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
