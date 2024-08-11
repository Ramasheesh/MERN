require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
// dotenv.config();
const app = express();
const port = process.env.PORT;
const dbConnect = require("./connection/Db.connection");
const Message = require("./models/contacts.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());
app.use(cors({ origin: "http://localhost:3000" }));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// POST route to handle form submission
app.post("/send/message", async (req, res) => {
  try {
    const { name, email, address, mobileNumber } = req.body;
    console.log("req.body: ", req.body);

    if (!mobileNumber) {
      console.error("Mobile number is missing or null");
      return res.status(400).json({ error: "Mobile number is required" });
    }

    // Save to MongoDB
    const message = new Message({ name, email, address, mobileNumber });
    await message.save();
    console.log("message: ", message);

    // Send Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "New Message Received",
      text: `You have a new message from ${name}. Address: ${address}, Mobile Number: ${mobileNumber}.`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    // Send WhatsApp Message
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    client.messages
      .create({
        from: `whatsapp:${process.env.TWILIO_WHATSAPP_NUMBER}`,
        to: `whatsapp:+91${mobileNumber}`, // Fixed concatenation here
        body: `You have a new message from ${name}. Address: ${address}.`,
      })
      .then((message) => console.log("WhatsApp message sent: " + message.sid))
      .catch((err) => console.log(err));
    console.log("to: ", this.to);

    // Send SMS
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${mobileNumber}`,
        body: `You have a new message from ${name}. Address: ${address}.`,
      })
      .then((message) => console.log("SMS sent: " + message.sid))
      .catch((err) => console.log(err));

    // Respond to the client after all operations are complete
    res.send("Message sent successfully");
  } catch (err) {
    console.error("An error occurred: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// app.post('/send/message', (req, res) => {
//   const { name, email, address, mobileNumber } = req.body;
//   // Handle the request
//   res.json({ message: 'Message received successfully', data: req.body });
// });
app.listen(port, async () => {
  try {
    await dbConnect.dbConnection();
    console.log(`Server listening on port ${port}`);
  } catch (error) {
    console.log("error: ", error);
  }
});
