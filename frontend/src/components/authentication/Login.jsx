import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./auth.css"
import profile from "../../images/profile-icon.png";

const Login = () => {
  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const {  email, password } = formData

  const loginChange = (e) =>{
    setFormData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  
    

  const loginSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col md={5} className="login__bg"></Col>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={loginSubmit}>
            <div className="image">
              <div className="cont-image">
                <img src={profile} alt="profile" className="prof-pic" />
              </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={loginChange}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={loginChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              login
            </Button>
            <div className="py-4">
              <p>
                Don't have an account ? <Link to="/register" className="text-decoration-none">SignUp</Link>
              </p>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
