import React from 'react'
import logo from '../assets/logo.png'
import bgimage from '../assets/loginPageBg.png'
const LoginOrSignup = () => {
  return (
    <div name='loginOrSignup' className='w-full h-screen '>

        <div className='flex justify-center items-center h-[70vh]' 
                style={{ backgroundImage: `url(${bgimage})`, 
                backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',}}>
            <img src={logo} alt="" style = {{width: ' 300px'}} />
        </div>

        
        <div className='flex justify-center items-center flex-col h-[30vh] bg-[#FBE470]'>
        <a href="login">
          <button className='bg-[#6F87BE] hover:border-black border border-blue-600 text-white rounded-full py-2 px-4 w-56 my-4'>Login</button>
        </a>
        <p>Don't have an account?</p>
        <a href="createAccount">
          <button className='bg-[#6F87BE] hover:border-black border border-blue-600 text-white rounded-full py-2 px-4 w-56 my-4'>Create Account</button>
        </a>
      </div>
    
    
    
    </div>
  )
}

export default LoginOrSignup