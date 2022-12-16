import { Button, Radio } from '@material-tailwind/react'
import React from 'react'
import Experience from '../../components/Experience'

const MenteeCompleteProfilePage = () => {
  return (
    <div className='bg-gray-100 py-10'>
       <div className="px-4 py-16 mx-auto bg-white rounded-3xl shadow-xl sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <h1 className='text-xl font-semibold'>Complete Your Profile</h1>
            <form className='space-y-5'>
                <div className='rounded-full h-24 w-24 relative'>
                    <div className='rounded-full h-24 w-24 overflow-hidden '>
                        <img className='w-full h-full object-cover object-center' alt='Avatar' src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'/>
                    </div>
                    <label className='absolute z-50 bottom-0 right-0 h-6 w-6 border-2 border-white  rounded-full bg-blue-500 text-white inline-flex items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                        </svg>
                        <input class="appearance-none hidden" id="default_size" type="file" />
                    </label>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className=''>
                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                        <input type="text" name="firstName" id="firstName" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="First Name" required />
                    </div>
                    <div className=''>
                        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                        <input type="text" name="lastName" id="lastName" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Last Name" required />
                    </div>
                    <div className=''>
                        <label htmlFor="Role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                        <input type="text" name="Role" id="Role" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Role" required />
                    </div>
                    <div className=''>
                        <label htmlFor="professionalExperience" className="block mb-2 text-sm font-medium text-gray-900">Professional Experience</label>
                        <input type="text" name="professionalExperience" id="professionalExperience" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Professional Experience" required />
                    </div>
                    <div className='col-span-2'>
                        <label htmlFor="topicsOfInterests" className="block mb-2 text-sm font-medium text-gray-900">Professional Experience</label>
                        <input type="text" name="topicsOfInterests" id="topicsOfInterests" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Professional Experience" required />
                    </div>
                    <div className='col-span-2'>
                        <h5  className="block mb-2 text-sm font-medium text-gray-900">Topics of Interests</h5>
                        <div className='flex gap-10'>
                            <Radio id="html" name="type" label="Yes" 
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-black h-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                                }
                            />
                            <Radio id="react" name="type" label="No" defaultChecked
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 text-black h-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                </svg>
                                }
                                />
                        </div>
                    </div>
                    <div className="py-10 border-y  col-span-2">
                        <h5  className="block mb-2 text-xl font-medium text-gray-900">Experience</h5>
                        <Experience/>
                        <Experience/>
                    </div>
                    <div className="py-5 grid grid-cols-2 gap-5  col-span-2">
                        <h5  className="block mb-2 text-xl col-span-2 font-medium text-gray-900">Other Details</h5>
                        <div className=''>
                            <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
                            <input type="text" name="country" id="country" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Country" required />
                        </div>
                        <div className=''>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">City</label>
                            <input type="text" name="city" id="city" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="City" required />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="timezone" className="block mb-2 text-sm font-medium text-gray-900">Timezone</label>
                            <input type="text" name="timezone" id="timezone" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Timezone" required />
                        </div>
                        <div className='col-span-2'>
                            <label htmlFor="languages" className="block mb-2 text-sm font-medium text-gray-900">Languages</label>
                            <input type="text" name="languages" id="languages" className=" border-2 border-gray-300 outline-none appearance-none focus:border-blue-500 transition duration-300  text-gray-900 sm:text-sm rounded-lg block w-full p-4 " placeholder="Languages" required />
                        </div>
                    </div>
                </div>
                  <div className='flex items-center justify-start space-x-5'>
                    <Button variant="filled" className='py-3 px-16 text-base capitalize font-semibold ' >
                    Save
                    </Button>
                    <Button variant="outlined" color='gray' className='py-3 px-16 text-base text-gray-700 capitalize font-semibold ' >
                        I will do later
                    </Button>
                  </div>
                  
              </form>
        </div>
    </div>
  )
}

export default MenteeCompleteProfilePage