import React, { useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bot from "../../images/bot.jpeg";
import "./auth.css";
import { useSelector,useDispatch } from "react-redux";
import { registerUser, reset } from '../features/user/userSlice'

function Register() {
  const [picture, setPicture] = useState({ myFile: ""});
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading, error} = useSelector(state => state.user);

  useEffect(()=>{
    if(error) {
      toast.error(message)
    }
    if(success || user) {
      navigate('/')
    }
    dispatch(reset())

  },[user, error, success, message, navigate, dispatch])

  function convertToBase64(file){
    return new Promise((resolve, reject) =>{
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload(() => {
        resolve(fileReader.result)
      });
      fileReader.onerror((error)=> {
        reject(error)
      })
    })
  }

  const picChange = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file)
    setPicture({ ...image, myFile: base64})
    console.log(base64);
  };

 

  const handleSignup = async (e) => {
    e.preventDefault();
    //signup the user
    if(password !== confirmPassword){
      toast.error('passwords do not match')
    }else {
      const user = {picture, userName, email, phoneNumber, password}
      dispatch(registerUser(user));
    }
  };

  return (
    <Container>
      <Row>
        <Col
          md={7}
          className="d-flex align-items-center justify-content-center flex-direction-column"
        >
          <Form style={{ width: "80%", maxWidth: 500 }} onSubmit={handleSignup}>
            <h1 className="text-center"> Create Account</h1>
            <div className="signup-profile-pic__container">
              <img src={imagePreview || bot} className="signup-profile-pic" />
              <label htmlFor="image-upload" className="image-upload-label">
                <img src="" alt=""/>
              </label>
              <input
                type="file"
                id="image-upload"
                hidden
                accept='.jpeg, .png, .jpg'
                onChange={e=> picChange(e)}
              />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>UserName</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {uploadingImg ? "signing you up" : "Signup"}
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
