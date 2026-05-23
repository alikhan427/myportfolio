import React from 'react';
import Navbar from '../../components/navbar/Navbar';

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div style={{ padding: '100px', textAlign: 'center' }}>
        <h1>My Portfolio</h1>
        <p>Check out my latest projects and work samples.</p>
      </div>
    </>
  );
};

export default Portfolio;