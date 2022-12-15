import React from 'react'
import cover from '../images/cover.jpg'
const Homepage = () => {
  return (
    <>
    <div className="relative">
      <img
        src={cover}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative ">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
               <span className='whitespace-nowrap'>Join the INSPIdate</span> community
              </h2>
              <p className="max-w-xs mb-4 text-base text-gray-900 md:text-lg">
              Learn from the most inspiring personalities in the world.
              </p>
             <div>
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full appearance-none outline-none p-5 pl-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Find mentors around the globe" required />

                        <button type="submit" class="text-white absolute right-1.5 bottom-1.5 bg-gray-900 hover:bg-gray-800  focus:outline-none  font-medium rounded-lg text-sm px-8 py-4 ">Search</button>
                    </div>
                </form>
             </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Homepage