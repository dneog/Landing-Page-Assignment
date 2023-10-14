import React, { useState } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/logo.png';
import arrow from '../assets/arrow.png';
const Header = () => {
  const [show, setShow] = useState(false)
  
  return (
    <div className=' py-1 max-sm:px-1 max-sm:py-2  max-w-[1290px] mx-auto px-1'>
        <div className='flex justify-between flex-wrap items-center mx-auto'>
          <div className='flex items-center gap-5'>
          <NavLink to={'/'} className='flex items-center'>
          <img src={logo} className='w-[170px] max-md:w-[140px] max-sm:w-[120px]' alt="logo" />
          </NavLink>

          <div className={`lg:static duration-50 lg:bg-transparent  max-two:bg-white max-sm:bg-white z-50 p-5 absolute md:min-h-[6vh] min-h-[30vh] left-0  w-full flex md:items-center gap-6  ${show ? 'top-[8%]' : 'top-[-100%]'}`} >
          <ul className='flex lg:flex-row flex-col gap-6 font-semibold text-[18px]'>
            <li><a className='flex items-center' href="#">Solutions <span><img src={arrow} alt="" /></span></a></li>
            <li><a className='flex items-center' href="#">Features <span><img src={arrow} alt="" /></span></a></li>
            <li><a href="#">Blogs</a></li>
            <li><a className='flex items-center' href="#">About <span><img src={arrow} alt="" /></span></a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          </div>
          </div>
         

          

          <div className='flex items-center gap-5 max-sm:gap-2'>

            <button className='text-blue-600 text-[16px] font-semibold px-5 py-[6px] rounded-md border-2 max-sm:px-2 max-sm:text-sm border-blue-600 '>Login</button>

            <button className='text-white font-[16px] max-sm:text-sm  font-semibold px-5 max-sm:px-2 py-[6px] rounded-md border-2 border-blue-600 bg-blue-600 '>Register</button>

            <div className='lg:hidden block'>
            {show ? <svg onClick={()=> setShow(!show)} className='lg:hidden block' xmlns="http://www.w3.org/2000/svg" width="24" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
             :  
             <svg className='cursor-pointer lg:hidden block' onClick={()=> setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg> }
            </div>

            
           

          </div>


        </div>
    </div>
  )
}

export default Header