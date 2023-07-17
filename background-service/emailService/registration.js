require("dotenv").config();
const db = require("../config/");
const ejs = require('ejs');

const { sendMail } = require("../helpers/email");

module.exports = async() => {
    const items = await (await db.collection('users').find({ isSent: 0 }).toArray());
    for (let item of items) {
        const email = item.email
        const id = item.id
        console.log(id);

        ejs.renderFile("templates/registration.ejs", { email }, async(error, data) => {
            if (error) return console.log(error);
            const mailOptions = {
                from: {
                    name: "Send It App ",
                    address: process.env.Email,
                },
                to: email,
                subject: "Welcome to Send It App",
                html: data
            };
            try {
                await sendMail(mailOptions);
                db.users.updateOne({ id: id }, { $set: { isSent: 1 } });
                console.log(`Registration email sent to ${email}`);
            } catch (error) {
                console.log(error);
            }
        })
    }
}