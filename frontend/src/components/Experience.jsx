import { IconButton } from '@material-tailwind/react'
import React from 'react'

const Experience = () => {
  return (
    <div className='mb-10'>
        <div className='flex  items-start w-full'>
            <div className='rounded-lg  overflow-hidden'>
                <img src="https://picsum.photos/80" alt="" />
            </div>
            <div className='ml-5 space-y-1'>
                <h3 className='text-lg font-medium text-gray-900'>Senior HR, Delhi</h3>
                <p className='text-base text-gray-600'>Hexa Solutions</p>
                <p className='text-base text-gray-600'>May 2008 - Present</p>
            </div>
            <div className=' place-items-end ml-auto'>
                <IconButton variant="text" color='gray' className='rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clipRule="evenodd" />
                    </svg>
                </IconButton>
            </div>
        </div>
        <p className='text-gray-700 my-5'>At this point, I have run experiments across most marketing channels and throughout the don't exist.
                I believe growth comes from a disciplined process of testing</p>
    </div>
  )
}

export default Experience