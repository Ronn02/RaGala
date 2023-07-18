import React from 'react';
import Navbar from './Navbar';
const Home = () => {
  return (
    <div name='home' className='w-full h-screen '>
      <h1>Welcome to the Homepage!</h1>
      <p>This is the content of the homepage.</p>

      <Navbar/>
    </div>
  );
};

export default Home;