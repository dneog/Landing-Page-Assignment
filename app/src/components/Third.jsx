import React from 'react'
import group from '../assets/Group.png';
import search from '../assets/search.png';
import people from '../assets/people.png';
import report from '../assets/report.png';
import hat from '../assets/hat.png';

const Third = () => {
  return (
    <div className='flex justify-between max-w-[1280px] mx-auto mt-28 mb-20 max-twelve:flex-wrap'>
      <div className='w-1/2 max-twelve:w-[90%] max-twelve:mx-auto'>
      <h1 className=' text-[60px] font-bold max-up:text-[42px]'> <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-700'>All-in-One platform</span> that Makes Easier</h1>

      <p className='text-[24px] pt-3 mb-4 max-up:text-[19px]'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>

      <div className='flex items-center max-twelve:w-[80%] max-twelve:mx-auto max-up:flex-wrap'>

      <div className='flex items-center mt-8 min-w-[300px] max-w-[300px]'>
      <img className='mr-4' src={search} alt="search" />
      <p className='text-[18px]'><span className='font-semibold'>SEARCH</span> for vital company information </p>
      </div>

      <div className='flex items-center mt-7'>
      <img className='mr-4' src={people} alt="search" />
      <p className='text-[18px]'><span className='font-semibold'>CONNECT</span> with the resources to meet your business needs </p>
      </div>

      </div>

      <div className='flex items-center mt-5 max-twelve:w-[80%] max-twelve:mx-auto max-up:flex-wrap'>

      <div className='flex items-center mt-7 min-w-[300px] max-w-[300px]'>
      <img className='mr-4' src={report} alt="search" />
      <p className='text-[18px]'><span className='font-semibold'>RESEARCH</span> and generate reports that drive growth  </p>
      </div>

      <div className='flex items-center mt-7'>
      <img className='mr-4' src={hat} alt="search" />
      <p className='text-[18px]'><span className='font-semibold'>ACADEMY</span> to give you the skills for success in your career</p>
      </div>

      </div>

     
      
      </div>

      <div className='max-twelve:w-[90%] max-twelve:mx-auto'>
        <img className='max-twelve:mx-auto max-up:w-[95%]' src={group} alt="group" />

      </div>
    </div>
  )
}

export default Third