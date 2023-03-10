import axios from "axios";

const API_URL = "http://localhost:4000/parcel";

// save parcel
const saveParcel = async (parcelData) => {
  const response = await axios.post(`${API_URL}/save`, parcelData);
  console.log(response.data);

  return response.data;
};

//get all parcels
const getAllParcel = async (parcelData) => {
  const response = await axios.get(`${API_URL}`, parcelData);
  console.log(response.data);

  return response.data;
};
// get parcel
const getParcel = async (parcelData) => {
  const response = await axios.get(`${API_URL}/:id`, parcelData);
  console.log(response.data);

  return response.data;
};

const parcelService = {
  saveParcel,
  getAllParcel,
  getParcel,
};

export default parcelService;
