import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from "react-bootstrap";
import { saveContact, reset } from '../features/contact/contactSlice';
import Spinner from '../pages/Spinner'
import './pages.css';

const Parcel = () => {

  const [parcelData, setParcelData] = useState({
    description: "",
    senderName: "",
    receiverName: "",
    startLocation: "",
    endLocation: ""
  });

  
  let v = {
    description: "",
    senderName: "",
    receiverName: "",
    startLocation: "",
    endLocation: "",
  };
 

  const { description, senderName, receiverName, startLocation, endLocation } = parcelData

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
      setParcelData(v);
    }
    dispatch(reset());
  }, [contact, error, success, navigate, dispatch]);

  const parcelChange = (e) => {
    setParcelData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parcelData !== "") {
      dispatch(saveContact(parcelData));
    }
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="Parcel">
      <div className="container-fluid">
        <div className="otp">
          <h2 className="text-center mb-2 shadow-sm p-3">Parcel Form:</h2>
        </div>
        <div className="row">
          <div className="col-md-7 shadow rounded p-5">
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                name="description"
                type="text"
                value={description}
                className="form-control"
                placeholder="user name"
                onChange={parcelChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">senderName</label>
              <input
                type="text"
                name="senderName"
                value={senderName}
                className="form-control"
                placeholder="sender name"
                onChange={parcelChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">receiverName</label>
              <input
                type="text"
                name="receiverName"
                value={receiverName}
                className="form-control"
                placeholder="receiver name"
                onChange={parcelChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">start location</label>
              <input
                type="text"
                name="startLocation"
                value={startLocation}
                className="form-control"
                placeholder="start Location"
                onChange={parcelChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">end location</label>
              <input
                type="text"
                name="endLocation"
                value={endLocation}
                className="form-control"
                placeholder="end Location"
                onChange={parcelChange}
              />
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

export default Parcel
