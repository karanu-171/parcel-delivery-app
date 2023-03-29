import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../features/user/userSlice";
import "./auth.css"
import profile from "../images/profile-icon.png";
import Spinner from '../pages/Spinner'

const Login = () => {
  
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const {  email, password } = loginData
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, success, error, message } = useSelector(
    (state) => state.user
  );


  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, error, success, navigate, dispatch]);

  const loginChange = (e) =>{
    setLoginData((prevState) =>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

  
  const loginSubmit = (e) => {
    e.preventDefault();
    //login the user
      const user = { email, password };
      dispatch(login(user));
      console.log(user);
  };

  if (loading) {
    return <Spinner />;
  }

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
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={loginChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={loginChange}
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
