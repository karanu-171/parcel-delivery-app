import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Button } from "react-bootstrap";
import { saveParcel, reset } from '../features/parcel/parcelSlice';
import Spinner from '../pages/Spinner'
import './pages.css';

const Parcel = () => {

  const [parcelData, setParcelData] = useState({
    description: "",
    senderName: "",
    receiverName: "",
    senderNumber: "",
    receiverNumber: "",
    startLocation: "",
    endLocation: ""
  });

  
  let v = {
    description: "",
    senderName: "",
    receiverName: "",
    senderNumber: "",
    receiverNumber: "",
    startLocation: "",
    endLocation: ""
  };
 

  const { description, senderName, receiverName, senderNumber, receiverNumber, startLocation, endLocation } = parcelData

  const { parcel, loading, success, error, messages } = useSelector(
    (state) => state.parcel
  );

  console.log(parcel)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      toast.error(messages);
    }
    if (success || parcel) {
      setParcelData(v);
    }
    dispatch(reset());
  }, [parcel, error, success, navigate, dispatch]);

  const parcelChange = (e) => {
    setParcelData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parcelData !== "") {
      dispatch(saveParcel(parcelData));
    }
  };

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="Parcel">
      <div className="container-fluid">
        <div className="otp">
          <h2 className="text-center mb-3 shadow-sm p-3">Parcel Form:</h2>
        </div>
        <div className="row">
          <div className="col-md-7 shadow rounded p-5">
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input
                type="text"
                name="description"
                value={description}
                className="form-control"
                placeholder="type of parcel"
                onChange={parcelChange}
              />
            </div>
            <div className="row">
              <div className="col mb-3">
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
              <div className="col mb-3">
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
            </div>
            <div className="row">
              <div className="col mb-3">
                <label className="form-label">sender number</label>
                <input
                  type="text"
                  name="senderNumber"
                  value={senderNumber}
                  className="form-control"
                  placeholder="sender number"
                  onChange={parcelChange}
                />
              </div>
              <div className="col mb-3">
                <label className="form-label">receiver number</label>
                <input
                  type="text"
                  name="receiverNumber"
                  value={receiverNumber}
                  className="form-control"
                  placeholder="receiver number"
                  onChange={parcelChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
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
              <div className=" col mb-3">
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
