require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;
const HOST = '0.0.0.0' || process.env.HOST;
const dbConnect = require("./connection/Db.connection");
const Message = require("./models/contacts.js");

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const allowedOrigins = [
  'http://localhost:3000', // Local development
  'https://ramasheesh.netlify.app' // Netlify deployment
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET,POST,PUT,DELETE',
}));

app.post("/send/message", async (req, res) => {
  try {
    const { name, email, message, mobileNumber } = req.body;

    if (!mobileNumber) {
      console.error("Mobile number is missing or null");
      return res.status(400).json({ error: "Mobile number is required" });
    }

    // Save to MongoDB
    const messageData = new Message({ name, email, message, mobileNumber });
    await messageData.save();

    // Send Email
    if (email) {
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
        text: `You have a new message from ${name}. Message: ${message}, Mobile Number: ${mobileNumber}.`,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log("Email error: ", error);
        } else {
          console.log("Email sent Successfully  " + info.response);
        }
      });
    }

    // Send WhatsApp Message
    const client = twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );
    const number = "8874910202";
    const messageTemplate = `
New Contact Request:

Name: ${name}

Email: ${email}

Phone: ${mobileNumber}

Message: ${message}

Please reach out to them at your earliest convenience.
`;
    client.messages
      .create({
        from: process.env.TWILIO_WHATSAPP_NUMBER,
        to: `whatsapp:+91${number}`,
        body: messageTemplate,
      })
      .then((messageData) =>
        console.log("WhatsApp message sent: "+ messageData.sid))
      // console.log("WhatsApp message sent Successfully ")
      .catch((err) => console.log(err));
    // Send SMS
    client.messages
      .create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: `+91${number.replace(/^0+/, "")}`,
        body: messageTemplate,
      })
      .then((messageData) => console.log("SMS sent Successfully " + messageData.sid))
      .catch((err) => console.log(err));
      res.status(200).json({ message: "Message sent successfully" });
  } catch (err) {
    console.error("An error occurred: ", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, HOST, async () => {
  try {
    await dbConnect.dbConnection();
    console.log(`Server listening on port: ${PORT} And Host: ${HOST}`);
  } catch (error) {
    console.log("error: ", error);
  }
});
