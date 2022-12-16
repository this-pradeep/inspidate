import { Button } from '@material-tailwind/react'
import React from 'react'

const Modal = () => {

  return (
    <div className='fixed p-5 inset-0 z-50 bg-black/50 h-screen w-screen flex items-center justify-center'>
        <div className='bg-white m-auto rounded-2xl max-w-xl text-center p-10 flex items-center justify-center flex-col space-y-5'>
            <div className=''>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-blue-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
              </svg>
            </div>
            <div className='space-y-5 '>
                <h1 className='text-2xl font-semibold '>Password Changed</h1>
                <p className='text-base font-normal text-gray-800'>
                Your password has been changed successfully    
                </p>
            </div>
            <div className='flex flex-col md:flex-row items-center justify-between w-full space-y-3 md:space-y-0 md:space-x-5'>
              <Button variant="filled" className='py-3 text-base capitalize font-semibold' fullWidth >
                Back to Login
              </Button>
              <Button variant="outlined" className='py-3 text-base capitalize font-semibold '  fullWidth>
                Back to Login
              </Button>
            </div>
        </div>
    </div>
  )
}

export default Modal