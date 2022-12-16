import React from 'react'
import { Button, Checkbox } from "@material-tailwind/react";
import coverLogin from '../../images/loginCover.png'
import logo from '../../images/inspidate.svg'
import linkedin from '../../images/linkedin.svg'
import { NavLink } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="bg-white">
    <div className="flex justify-center ">
        <div className="hidden bg-cover p-10  overflow-hidden lg:block lg:w-3/5">
           <img src={coverLogin} className="w-full rounded-[40px] h-full object-cover object-top" alt="" />
        </div>
        <div className="flex space-y-6 flex-col items-start w-full  p-10  lg:w-2/5">
            <div className='mt-10'>
                <img src={logo} alt="" />
            </div>
            <div className='space-y-3'>
              <h1 className='text-3xl font-semibold '>Welcome Back!</h1>
              <p className='text-lg font-normal text-gray-800'>Login in to your account</p>
            </div>
            <div className='w-full'>
              <form className='space-y-5'>
                  <div className=''>
                    <label htmlFor="emailId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email ID</label>
                    <input type="email" name="emailId" id="emailId" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Email ID" required />
                  </div>
                  <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    <input type="password" name="password" id="password" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Password" required />
                  </div>
                  <div className='flex items-center justify-between'>
                    <Checkbox color='black' label='Keep me signed in.' className='rounded-full checked:bg-black' />
                    <NavLink to="/forgotPassword"> Forgot password?</NavLink>
                  </div>
                  <Button variant="filled" className='py-3 text-base capitalize font-semibold ' fullWidth>
                    Sign In
                  </Button>
                  <div className='flex items-center text-gray-400 justify-between space-x-2'>
                    <span className='h-px bg-gray-400 w-full '></span>
                    <span>OR</span>
                    <span className='h-px bg-gray-400 w-full '></span>
                  </div>
                  <Button variant="outlined" className='py-3 text-base flex items-center justify-center space-x-2 border-[#0077B7] text-[#0077B7] capitalize font-medium ' fullWidth>
                    <img src={ linkedin} className="h-6 w-6" alt="" />
                    <span> Continue with linkedin</span>
                  </Button>
                  <p className='text-center'>Already have an account? <NavLink to="/login" className="font-medium">  
                   Log In
                </NavLink></p>
              </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default LoginPage