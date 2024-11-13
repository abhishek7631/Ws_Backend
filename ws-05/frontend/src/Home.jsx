// Home.js
import React from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <Container>
          <h1>Welcome to My Website</h1>
          <p className="lead">
            Discover amazing features and services that will elevate your
            experience.
          </p>
          <Button variant="light" size="lg" href="#features">
            Explore Features
          </Button>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features" className="features py-5">
        <Container>
          <h2 className="text-center mb-4">Our Features</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Feature 1</Card.Title>
                  <Card.Text>
                    Discover amazing tools that can help you boost your
                    productivity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Feature 2</Card.Title>
                  <Card.Text>
                    A seamless and intuitive user experience that you will love.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>Feature 3</Card.Title>
                  <Card.Text>
                    Get personalized support and tailored solutions for your
                    needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="cta bg-light py-5 text-center">
        <Container>
          <h2>Ready to Get Started?</h2>
          <p className="lead">
            Join us today and unlock all the features we offer!
          </p>
          <Button variant="primary" size="lg" href="/register">
            Sign Up Now
          </Button>
        </Container>
      </section>
    </>
  );
}

export default Home;
