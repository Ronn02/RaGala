import React from 'react';
import Navbar from './Navbar';
import Cavite3 from '../assets/destination/CAVITE/AGUINALDO SHRINE/AGUINALDO SHRINE, CAVITE - 1.jpg';
import Cavite2 from '../assets/destination/CAVITE/SKYRANCH TAGAYTAY/SKYRANCH TAGAYTAY, CAVITE - 3.jpg';
import Cavite1 from '../assets/destination/CAVITE/CORREGIDOR ISLAND/CORREGIDOR ISLAND, CAVITE - 2.jpg';
import Cavite4 from '../assets/destination/CAVITE/ST. MARY MAGDALENE CHURCH/ST. MARY MAGDALENE CHURCH, CAVITE - 3.jpg';

const Province = () => {
    return (
        <div className="w-full">
            <div className='h-[150px] bg-[#FBE470]'>
                <div className=" h-full w-full flex flex-col justify-end items-start text-black">
                    <h2 className="ml-3 text-2xl sm:text-3xl font-bold">CAVITE</h2>
                </div>
            </div>
            
        <div className='w-full h-3/4'>
                <div className='h-full mx-2 justify-center items-center flexc mt-3'>
                    <h2 className=' text-[#6F87BE] text-center font-semibold text-xl'>Welcome to Cavite: Where History and Nature Unite!</h2>
                </div>
                <p className='ml-3 my-2 text-2xl'> Explore </p>
                
                <div className='flex-col mx-3'>
                    
                    <div className='flex'>
                        <a href=""><div className='relative h-[200px] w-[150px] pr-1 flex'>
                            <img src={Cavite3} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Aguinaldo Shrine</h2>
                            </div>
                        </div></a>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Cavite2} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                            </div>
                        </div></a>
                    </div>

                    <div className='flex mt-5'>
                        <a href=""><div className='relative h-[200px] w-[150px] pr-1 flex'>
                                <img src={Cavite1} alt="" className="object-cover h-full w-full" />
                                <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-center text-black">
                                    <h2 className="text-lg sm:text-3xl font-bold">Sky Ranch</h2>
                                </div>
                            </div></a>

                        <a href=""><div className='relative h-[200px] w-[150px] pl-1 flex'>
                            <img src={Cavite4} alt="" className="object-cover h-full w-full" />
                            <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-end items-end text-black">
                                <h2 className="text-lg sm:text-3xl font-bold">Aguinaldo Shrine</h2>
                            </div>
                        </div></a>    
                    </div>
            </div>
        </div>  
            <Navbar />
        
        </div>
    );
};

export default Province;