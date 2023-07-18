import React from 'react';
import Navbar from './Navbar';
import ToDo from '../assets/otherAssets/toDoIcon.png';
import Expenses from '../assets/otherAssets/expensesIcon.png';
import Message from '../assets/otherAssets/messageIcon.png';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen'>
      <div className='h-[100px] w-full top-0 flex justify-end'>
        
      <div className='mr-[50px] mt-[20px] flex justify-center items-center rounded-full overflow-hidden bg-blue-100 h-[70px] w-[70px]'>
          <p className=''>User Pic</p>
        </div>
      </div>

      <div className='m-[30px] '>
        <h1 className='text-6xl font-bold'>Tara Gala?</h1>
       
        <li className='list-none flex justify-start m-[30px]'>
          <a href="/"><ul className='h-[100px] w-[100px] flex flex-col justify-center items-center m-[10px] p-[10px] border-black border-2 rounded-[20px]'>
            <img src={ToDo} alt='' className='h-[50px] mb-[15px]' />
            To-D1
          </ul></a>
          <a href="/"> <ul className='h-[100px] w-[100px] flex flex-col justify-center items-center m-[10px] p-[10px] border-black border-2 rounded-[20px]'>
            <img src={Expenses} alt='' className='h-[50px] mb-[15px]' />
            Expenses
          </ul></a>
          <a href="/"> <ul className='h-[100px] w-[100px] flex flex-col justify-center items-center m-[10px] p-[10px] border-black border-2 rounded-[20px]'>
            <img src={Message} alt='' className='h-[50px] mb-[15px]' />
            Social
          </ul></a>
        </li>
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
