import axios from "axios";

const API_URL = "http://localhost:4000/contact";

// save contact
const saveContact = async (contactData) => {
  const response = await axios.post(`${API_URL}/save`, contactData);
  console.log(response.data);

  return response.data;
};

//get all contacts
const getAllContact = async (contactData) => {
  const response = await axios.get(`${API_URL}`, contactData);
  console.log(response.data);

  return response.data;
};
// get contact
const getContact = async (contactData) => {
  const response = await axios.get(`${API_URL}/:id`, contactData);
  console.log(response.data);

  return response.data;
};

const contactService = {
  saveContact,
  getAllContact,
  getContact,
};

export default contactService;
