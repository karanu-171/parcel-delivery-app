import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import bot from "../images/bot.jpeg";
import "./auth.css";
import { useSelector,useDispatch } from "react-redux";
import { registerUser, reset } from '../features/user/userSlice'
import Spinner from "../pages/Spinner";

function Register() {
  const [picture, setPicture]= useState('')
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });

  const {  userName, email, phoneNumber,password, confirmPassword } = formData

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, loading, success, error, message} = useSelector(state => state.user);


  useEffect(()=>{
    if(error) {
      toast.error(message)
    }
    if(success || user) {
      navigate('/')
    }
    dispatch(reset())

  },[user, error, success, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  

  const picChange = async (e) => {
    const file = e.target.files[0];
    set(file);
    console.log(file);
  };

  const set = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPicture(reader.result);
    };
  };

 

  const handleSignup = async (e) => {
    e.preventDefault();
    //signup the user
    if(password !== confirmPassword){
      toast.error('passwords do not match')
    }else {
      const user = {picture, userName, email, phoneNumber, password}
      dispatch(registerUser(user));
      console.log(user)
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center mt-3"> Create Account</h1>
            <Form.Group className="mb-3">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                name="userName" 
                value={userName}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                name="phoneNumber"
                value={phoneNumber}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirm password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={onChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              submit
            </Button>
            <div className="py-4">
              <p>
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </div>
          </Form>
        </Col>
        <Col md={5} className="signup__bg"></Col>
      </Row>
    </Container>
  );
}

export default Register;
