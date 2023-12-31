import React from 'react';
import Navbar from './Navbar';
import ToDo from '../assets/otherAssets/toDoIcon.png';
import Expenses from '../assets/otherAssets/expensesIcon.png';
import Message from '../assets/otherAssets/messageIcon.png';
import Cavite from '../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 1.jpg';
import Laguna from '../assets/destination/LAGUNA/ENCHANTED KINGDOM/ENCHANTED KINGDOM, LAGUNA - 1.jpg';
import Batangas from '../assets/destination/BATANGAS/CALERUEGA CHURCH/CALERUEGA CHURCH, BATANGAS - 1.jpg';
import Rizal from '../assets/destination/RIZAL/AVILON ZOO/AVILON ZOO, RIZAL - 1.jpg';
import Quezon from '../assets/destination/QUEZON/CAGBALETE ISLAND/CAGBALETE ISLAND, QUEZON - 1.jpg';

const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen'>
      <div className='h-[100px] w-full top-0 flex justify-end'>
        <div className='mr-[30px] mt-[20px] flex justify-center items-center rounded-full overflow-hidden bg-blue-100 h-[70px] w-[70px]'>
          <p className=''>User Pic</p>
        </div>
      </div>

      <div className='m-[30px] '>
        <h1 className='text-5xl sm:text-6xl font-bold'>Tara Gala?</h1>

        <li className='list-none flex justify-start m-[30px] '>
          <a href="">
            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={ToDo} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>To-D1</p>
            </ul>
          </a>
          <a href="">
            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={Expenses} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>Expenses</p>
            </ul>
          </a>
          <a href="">
            <ul className='h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] flex flex-col justify-center items-center m-[2px] sm:m-[10px] p-[10px] border-black border-2 rounded-[20px] hover:bg-[#FBE470]'>
              <img src={Message} alt='' className='h-[30px] sm:h-[50px] mb-[15px]' />
              <p className='text-[10px] sm:text-[10px]'>Social</p>
            </ul>
          </a>
        </li>
      </div>

      <div className='m-[30px] '>
      <h1 className='text-2xl sm:text-3xl font-bold'>Discover</h1>
      <p>Start exploring now and plan your next memorable trip!</p>
      </div>  
      {/*Container */}
      <div className=' grid grid-cols-1 sm:grid-cols-3 gap-3 text-center py-8  p-[30px]'>

      <a href="province"><div className='relative h-[250px] max-w-[350px] '>
        <img src={Cavite} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">CAVITE</h2>
      
        </div>
      </div></a>


      <a href=""><div className='relative h-[250px] max-w-[350px]  '>
        <img src={Laguna} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">LAGUNA</h2>
      
        </div>
      </div></a>


      <a href=""><div className='relative h-[250px] max-w-[350px] '>
        <img src={Batangas} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">BATANGAS</h2>
      
        </div>
      </div></a>

      <a href=""><div className='relative h-[250px] max-w-[350px] '>
        <img src={Rizal} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">RIZAL</h2>
      
        </div>
      </div></a>

      <a href=""><div className='relative h-[250px] max-w-[350px] '>
        <img src={Quezon} alt="" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
          <h2 className="text-2xl sm:text-3xl font-bold">QUEZON</h2>
      
        </div>
      </div></a>
        
      </div>

      <Navbar />
    </div>
  );
};

export default Home;
