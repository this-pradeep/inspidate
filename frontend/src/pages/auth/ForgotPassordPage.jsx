import React from 'react'
import { Button } from "@material-tailwind/react";
import coverLogin from '../../images/loginCover.png'
import logo from '../../images/inspidate.svg'
const ForgotPassordPage = () => {
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
              <h1 className='text-3xl flex items-center font-semibold '>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" strokeWidth={2} d="M20.25 12a.75.75 0 01-.75.75H6.31l5.47 5.47a.75.75 0 11-1.06 1.06l-6.75-6.75a.75.75 0 010-1.06l6.75-6.75a.75.75 0 111.06 1.06l-5.47 5.47H19.5a.75.75 0 01.75.75z" clipRule="evenodd" />
              </svg>
               <span>Forgot Password</span>
                </h1>
              <p className='text-lg font-normal text-gray-800'>Enter your registered email addres.</p>
            </div>
            <div className='w-full'>
              <form className='space-y-5'>
                  <div className=''>
                    <label htmlFor="emailId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email ID</label>
                    <input type="email" name="emailId" id="emailId" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Email ID" required />
                  </div>
                  
                  <Button variant="filled" className='py-3 text-base capitalize font-semibold ' fullWidth>
                    Submit
                  </Button>
              </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default ForgotPassordPage