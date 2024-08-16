import React, { useState } from "react";
import "../css/Contacts.css";
import Notification from "./Notification";
import {
  FaWhatsapp,
  FaFacebook,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
// import axios from "axios";


const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const mobileNumber = formData.get("number");
    const regex = /^[0-9]{10}$/;
    if (!regex.test(mobileNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch('https://portfolio-xawd.onrender.com/send/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          mobileNumber: mobileNumber,
        }),
      });
      const data = await response.json();
      console.log('Response:', data);

      await new Promise((resolve) => setTimeout(resolve, 300));
      setSuccessMessage("Message sent successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      form.reset();

      // Optionally, reset any state variables related to the form
      setName("");
      setEmail("");
      setMessage("");
      setMobileNumber("");
      // window.open("http://localhost:3000", "_self");
    } catch (error) {
      console.error(
        "Error during message sending:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Notification
        message={successMessage}
        onClose={() => setSuccessMessage("")}
      />
      <h2 style={{ marginTop: "30px" }}>Contact Information</h2>
      <div className="contact-container">
        <div className="form-content">
          <h3>Send Me a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                name="name"
                value ={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value = {email}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <input
                type="text"
                className="form-control"
                id="message"
                value={message}
                placeholder="Enter your message"
                onChange={(e) => setMessage(e.target.value)}
                name="message"
              />
            </div>
            <div className="form-group">
              <label htmlFor="number" className="form-label">
                Mobile Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="number"
                name="number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                pattern="[0-9]{10}"
                placeholder="Enter 10-digit mobile number"
                required
              />
              <button
                type="submit"
                className="btn btn-primary "
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {/* {successMessage && (
                <div className="success-message">{successMessage}</div>
              )} */}
            </div>
          </form>
        </div>
        <div className="contact-info">
          <h3>Connect with me</h3>
          <p>Calling Numbers: 8874910202, 6283757617</p>
          <p>
            WhatsApp Numbers:{"  "}
            <a
              href="https://wa.me/6283757617?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              6283757617
            </a>{",  "}
            <a
              href="https://wa.me/8874910202?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              8874910202
            </a>
          </p>
          <p>
            Telegram Numbers:{"  "}
            <a
              href="https://t.me/ramasheeshchauhan?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              6283757617
            </a>{"  "}
          </p>
          <p>
            Email:{"  "}
            <a href="mailto:ramasheesh.g7576@gmail.com?subject=Subject%20Here&body=Message%20Here">
              ramasheesh.g7576@gmail.com
            </a>
            {",  "}
            <a href="mailto:ramasheeshch9920@gmail.com?subject=Subject%20Here&body=Message%20Here">
              ramasheeshch9920@gmail.com
            </a>
          </p>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/ramasheesh-chauhan-872220159"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://wa.me/6283757617?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.facebook.com/ramashish.chauhan.5688"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://t.me/ramasheeshchauhan?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size={30} />
            </a>
            <a
              href="https://www.instagram.com/ramasheesh12/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
