require("dotenv").config();
const db = require("../config/db.js");
const ejs = require('ejs');
const { MongoClient } = require('mongodb');
const { sendMail } = require("../helpers/email");
const path = require('path');



// Define your renderEjsTemplate function to render EJS templates

const renderEjsTemplate = async (templatePath, data) => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templatePath, data, (error, content) => {
      if (error) reject(error);
      resolve(content);
    });
  });
};


module.exports = async () => {
    try {
      const client = await MongoClient.connect(process.env.MONGO_URL);
      const db = client.db(process.env.DB);

      const collection = db.collection('users');
      const items = await collection.find({ isSent: false }).toArray();
  
      for (const item of items) {
        const email = item.email;
        const id = item._id.toString(); // Convert the MongoDB ObjectId to a string
  
        console.log(`Processing user: ID=${id}, Email=${email}`);

        const templatePath = path.resolve(__dirname, 'template.ejs');
        const renderedContent = await renderEjsTemplate(templatePath, { email });
  
        const mailOptions = {
          from: {
            name: 'Send It App',
            address: process.env.Email,
          },
          to: email,
          subject: 'Welcome to Send It App',
          html: renderedContent,
        };
  
        try {
          await sendMail(mailOptions);
          await collection.updateOne({ _id: item._id }, { $set: { isSent: true } });
          console.log(`Registration email sent to ${email}`);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };