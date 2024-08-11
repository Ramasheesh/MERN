import React from 'react';
import '../css/Contacts.css'; // Import the CSS file
import { FaWhatsapp, FaFacebook, FaLinkedin, FaTelegram, FaInstagram } from 'react-icons/fa'; // Import social icons
import axios from 'axios';

const Contacts = () => {
    const handleSend = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
        const address = formData.get("address");
        const mobileNumber = formData.get("mobileNumber");
        try {
            const response = await axios.post('http://localhost:4000/send/message', { name, email, address, mobileNumber });
            console.log('response.data: ', response.data);
            // Redirect to another page or handle success response as needed
            // window.location.href = ("http://localhost:3000" );
        } catch (error) {
            console.error('Error during message sending:', error.response ? error.response.data : error.message);
        }
    };
    // const handleSend = async (event) => {
    //   event.preventDefault(); // Prevent default form submission
    //   const name = document.querySelector('input[name="name"]').value;
    //   const email = document.querySelector('input[name="email"]').value;
    //   const address = document.querySelector('input[name="address"]').value;
    //   const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
  
    //   try {
    //     const response = await fetch('http://localhost:4000/send/message', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         name,
    //         email,
    //         address,
    //         mobileNumber,
    //       }),
    //     });
  
    //     const data = await response.json();
    //     console.log('Success:', data);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // };
   
  return (
    <>
      <h2 style={{marginTop:'30px'}}>Contact Information</h2>

      <div className="contact-container">
        <div className="form-content">
          <h3>Send Me a Message</h3>
          {/* <form onSubmit={handleSend}>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="address" placeholder="Address" />
            <input type="text" name="mobileNumber" placeholder="Mobile Number" />
            <button type="submit">Send</button>
          </form> */}
           <form className="form-group" onSubmit={handleSend}>
            {/* <div className="mb-3"> */}
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            {/* </div> */}
            {/* <div className="mb-3"> */}
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            {/* </div>
            <div className="mb-3"> */}
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Enter your address" />
            {/* </div>
            <div className="mb-3"> */}
              <label htmlFor="mobileNumber" className="form-label"> Mobile Number</label>
              <input type="text" className="form-control" id="number" placeholder="Enter your mobile number" />
            {/* </div> */}
           <button type="submit" className="btn btn-primary">Send</button>
          </form>   
        </div>
        <div className="contact-info">
          <h3>Connect with me</h3>
          <p>Calling Numbers: 8874910202, 6283757617</p>
          <p>WhatsApp Numbers: <a href="https://wa.me/7234876285?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
          6283757617,
            </a></p>
            <p><a href="https://wa.me/7234876285?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
          7234876285
            </a></p>
          <p>Telegram Numbers:  <a href="https://t.me/ramasheeshchauhan?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
          6283757617
            </a> </p>
          <p>Email: <a href='mailto:ramasheesh.g7576@gmail.com?subject=Subject%20Here&body=Message%20Here'>ramasheesh.g7576@gmail.com</a></p>
          <p> <a href='mailto:ramasheeshch9920@gmail.com?subject=Subject%20Here&body=Message%20Here'>ramasheeshch9920@gmail.com</a></p>
          <div className="social-icons">
            <a href="https://linkedin.com/in/ramasheesh-chauhan-872220159" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} />
            </a>
            <a href="https://wa.me/7234876285?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={30} />
            </a>
            <a href="https://www.facebook.com/ramashish.chauhan.5688" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} />
            </a>
            <a href="https://t.me/ramasheeshchauhan?text=Hello%20RamAsheesh%2C%20I%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer">
              <FaTelegram size={30} />
            </a>
            <a href="https://www.instagram.com/ramasheesh12/?hl=en" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div> 
    </>
  );
};

export default Contacts;
