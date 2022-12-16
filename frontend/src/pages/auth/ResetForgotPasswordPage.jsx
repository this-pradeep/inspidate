import React from 'react'
import { Button } from "@material-tailwind/react";
import coverLogin from '../../images/loginCover.png'
import logo from '../../images/inspidate.svg'

const ResetForgotPasswordPage = () => {
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
              Reset Password
                </h1>
              <p className='text-lg font-normal text-gray-800'>Update your password.</p>
            </div>
            <div className='w-full'>
              <form className='space-y-5'>
                  <div className=''>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="password" name="password" id="password" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="New Password" required />
                  </div>
                  <div className=''>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm New Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Confirm Password" required />
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

export default ResetForgotPasswordPage