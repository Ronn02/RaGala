import React from 'react';
import Home from '../assets/otherAssets/homeIcon.png'
import Plus from '../assets/otherAssets/plusIcon.png'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center flex-col fixed bottom-0 mb-[40px] left-0 w-full'>
      <div className='flex justify-evenly items-center bg-[#6F87BE] h-[60px] w-[40vh] rounded-[20px]'>
        <a href="home"><img src={Home} alt="" /></a>
        <a href=""><img src={Plus} alt="" /></a>
      </div>
      {/* The rest of your content */}
    </div>
  );
};

export default Navbar;