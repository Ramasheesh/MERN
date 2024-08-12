// src/ServerError.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServerError = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Something went wrong</h1>
      <p>We're having trouble connecting to the server. Please try again later.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default ServerError;
