import React from 'react';
import logo from '../media/homepagelogo.png';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="place-self-center mr-auto lg:col-span-7">
                <h1 className="font-lora mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Organization tool for new software engineers</h1>
                <p className="font-montserrat mb-6 max-w-2xl font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From searching to applying for new job, new software engineers use <span className='font-bold'>The Dev Hub</span> to simplify and aid the job searching process.</p>
                <a className="font-lora inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <Link to='/mainhub'>Main Hub</Link>
                </a>
                <a className="font-lora inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    <Link to='/myhub'>My Hub</Link>
                </a> 
            </div>
            <div className="p-4 first-line:lg:mt-0 lg:col-span-5  lg:flex">
                <img src={logo} alt="mockup" className='rounded-2xl'/>
            </div>                
        </div>
    </section>
    </div>
  )
}

export default Homepage