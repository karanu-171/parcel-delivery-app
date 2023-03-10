import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from "react-bootstrap";
import { saveContact, reset } from '../features/contact/contactSlice';
import './pages.css';

const Contact = () => {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const contact = useSelector(
    (state) => state.contact
  );

  console.log(contact)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (error) {
  //     toast.error(messages);
  //   }
  //   if (success || contact) {
  //     navigate("/");
  //   }
  //   dispatch(reset());
  // }, [contact, error, success, navigate, dispatch]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = { userName, email, subject, message}
    console.log(contactData)

    dispatch(saveContact(contactData));
  };

  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className="Contact">
      <div className="container-fluid">
        <div className="otp">
          <h2 className="text-center mb-4 shadow-sm p-3">Contact Us:</h2>
        </div>
        <div className="row">
          <div className="col-md-7 shadow rounded p-5">
            <div className="mb-3">
              <label className="form-label">user name</label>
              <input
                name="userName"
                type="text"
                value={userName}
                className="form-control"
                placeholder="user name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-control"
                placeholder="name@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="subject"
                value={subject}
                className="form-control"
                placeholder="subject"
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea
                value={message}
                name="message"
                className="form-control"
                placeholder="write your message"
                rows="3"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <Button variant="primary" onClick={handleSubmit}>
              submit
            </Button>
          </div>
          <div className="col-md-5">
            <div className="ml-5 mt-3">
              <img src="home-icon.jpg" alt="home" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
