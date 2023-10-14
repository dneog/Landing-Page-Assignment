import React from 'react'
import logo from '../assets/logo1.png';
import fb from '../assets/fb.png';
import ln from '../assets/ln.png';
import ins from '../assets/ins.png';
import wh from '../assets/wh.png';


const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-sky-600 to-purple-700 mt-14 pb-5 flex flex-col max-sm:w-full'>
        <div className='flex justify-between max-w-[1290px] w-full mx-auto mb-24 gap-4 pt-5 max-up:flex-wrap max-up:px-2  px-[10px]'>
        <div className='max-w-[300px] relative bottom-1  max-up:max-w-full '>
            <img src={logo} className='w-[130px]' alt="" />
            <p className='text-[14px] text-zinc-300'>India's first platform dedicated to simplifying partner search</p>
        </div>
          
        <p className='text-white text-[15px] font-bold'>COMPANY</p>      
        <p className='text-white text-[15px] font-bold'>SOLUTIONS</p>     
        <p className='text-white text-[15px] font-bold'>RESOURCES</p>
        <p className='text-white text-[15px] font-bold'>SUPPORT</p>     
        <p className='text-white text-[15px] font-bold'>LEGAL</p>
       
        </div>
        
        <div className='max-w-[1280px] pt-2 border-t-2 mx-auto flex w-full px-2 justify-between text-sm text-white mt-3 items-center'>
            <p className='max-sm:w-[200px]'>Sambhaji Nagar, No2, St. Antony Road, Chembur, Mumbai - 400071, Maharashtra</p>
            <div className='flex gap-3'>
            <i><img src={fb} alt="" /></i>
            <i><img src={ins} alt="" /></i>
            <i><img src={ln} alt="" /></i>
            <i><img src={wh} alt="" /></i>
            </div>
           
        </div>
    </div>
  )
}

export default Footer