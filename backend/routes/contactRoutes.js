const express = require("express");
const {
    saveContact,
    getContact,
    getAllContacts
} = require("../controllers/contactController");

const contactRoutes = express.Router();

contactRoutes.post("/save", saveContact);
contactRoutes.get("/:id", getContact);
contactRoutes.get("/", getAllContacts);

module.exports = contactRoutes;
