import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from "react-bootstrap";
import { saveContact, reset } from '../features/contact/contactSlice';
import Spinner from '../pages/Spinner'
import './pages.css';

const Contact = () => {

  const [contactData, setContactData] = useState({
    userName: "",
    email: "",
    subject: "",
    message: ""
  });

  
  let v = {
    userName: "",
    email: "",
    subject: "",
    message: "",
  };
 

  const { userName, email, subject, message } = contactData

  const { contact, loading, success, error, messages } = useSelector(
    (state) => state.contact
  );

  console.log(contact)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(messages);
    }
    if (success || contact) {
      setContactData(v);
    }
    dispatch(reset());
  }, [contact, error, success, navigate, dispatch]);

  const contactChange = (e) => {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactData !== "") {
      dispatch(saveContact(contactData));
    }
  };

  if (loading) {
    return <Spinner />;
  }

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
                onChange={contactChange}
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
                onChange={contactChange}
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
                onChange={contactChange}
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
                onChange={contactChange}
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
