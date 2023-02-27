import React, { useState } from "react";
import './pages.css';
import { useDispatch } from "react-redux";
import { Button, Modal} from "react-bootstrap";

const Contact = () => {

  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  // const dispatch = useDispatch();

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (contactData !== "") {
    //   dispatch(saveContact(contactData));
    // }
    setContactData(v);
  };
  return (
    <div className="Contact">
      <div className="container-fluid">
        <div className="otp">
          <h2 className="text-center mb-4 shadow-sm p-3">Contact Us:</h2>
        </div>
        <div className="row">
          <div className="col-md-7 shadow rounded p-5">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                name="firstName"
                type="text"
                value={userName}
                className="form-control"
                placeholder="first name"
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
