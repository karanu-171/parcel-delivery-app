const Contact = require('../models/contactModel')

const saveContact = async (req, res) => {
    const { userName, email, subject, message} = req.body

    try {
        const contact = new Contact({
          userName,
          email,
          subject,
          message,
        });
        const result = await contact.save();

    return res.status(200).json(result);
    } catch (error) {
        console.log(error)
    }
};

const getContact = async (req, res) => {
  const contactId = req.params.id;
  try {
    const contact = await Contact.findById(contactId);
    if (contact) {
      res.status(200).json({ message: contact });
    }else {
      res.status(404).json({ message: "contact not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getAllContacts = async (req, res) => {
  
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  saveContact,
  getContact,
  getAllContacts,
};
