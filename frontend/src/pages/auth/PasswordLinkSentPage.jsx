import React from 'react'
import { Button } from "@material-tailwind/react";
import coverLogin from '../../images/loginCover.png'
const PasswordLinkSentPage = () => {
  return (
    <div className="bg-white">
    <div className="flex justify-center items-center ">
        <div className="hidden bg-cover p-10  overflow-hidden lg:block lg:w-3/5">
           <img src={coverLogin} className="w-full rounded-[40px] h-full object-cover object-top" alt="" />
        </div>

        <div className="flex space-y-6 text-center flex-col items-center w-full  md:p-24  lg:w-2/5">
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <div className='space-y-3 '>
              <h1 className='text-3xl font-semibold '>Email Confirmation</h1>
              <p className='text-lg font-normal text-gray-800'>A confirmation email has been sent to:johnsmith@gmail.com</p>
              <p className='text-lg font-normal text-gray-800'>Click on the confirmation link in the email to activate your account.If you don't see this email you can 
              check your junk mail folder</p>
            </div>
              <Button variant="filled" className='py-3 text-base capitalize font-semibold ' fullWidth>
                Resend Link
              </Button>
        </div>
    </div>
</div>
  )
}

export default PasswordLinkSentPage