import React from 'react';
import logo from '../assets/logo.png';
import bgimage from '../assets/loginPageBg.png';

const Login = () => {
  return (
    <div name="login" className="w-full h-screen">
      <div
        className="flex justify-center items-center h-[30vh]"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <img src={logo} alt="" style={{ width: '300px' }} />
      </div>

      <div className="flex justify-center items-center flex-col h-[70vh] bg-[#FBE470]">
        <form className="flex flex-col items-center">
          <h2>Login</h2>
          <input type="text" placeholder="Username" required className="inputField m-[5px] p-[5px] " />
          <input type="password" placeholder="Password" required className="inputField m-[5px] p-[5px]" />
            <a href='home'><button className='bg-[#6F87BE] hover:border-black border border-blue-600 text-white rounded-full py-2 px-4 w-56 my-4'>
            Login
          </button></a>
          <p>
            Don't have an account? <a href="createAccount">Create one</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
