import React, { useState } from 'react'
import  Picture1 from '../assets/Picture1.png';
import  Picture2 from '../assets/Picture2.png';
import  Picture3 from '../assets/Picture3.png';
import { useNavigate } from 'react-router-dom';

const First = () => {
  const [search, setSearch]= useState('')
 const navigate = useNavigate()

  const handleSubmit=(e)=> {
    e.preventDefault()
    
      navigate(`profile?q=${search}`)
    
  }

  return (
    <>
       <div className='flex justify-between w-full h-[77vh]  max-twelve:h-[70vh]  max-twelve:items-center z-10 max-w-[1290px] mx-auto items-center relative max-lg:flex-wrap px-1 max-sm:mx-auto'>

<div className='w-1/2 pr-2 flex flex-col min-w-[550px] max-sm:min-w-[370px]  max-lg:w-[600px] max-lg:m-auto max-lg:text-center'>

<p className='text-[60px] max-sm:leading-mobile max-sm:mt-10 max-twelve:text-[50px] max-sm:text-[30px]  leading-very-small font-bold max-up:mt-4 '>Find  <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-700'>Partners</span> (CAs) available online</p>
<p className='text-zinc-600 max-sm:mt-2'>CONNECT with us where your services are listed and visible to a myriad of businesses seeking CA’s for compliance support</p>

<div className='flex items-center mt-[50px] max-sm:mx-auto '>
  <form onSubmit={(e)=> handleSubmit(e)}>
<input type="text" placeholder='Search by name' value={search} onChange={(e)=> setSearch(e.target.value)} required className='font-inter font-semibold text-[18px] border-2 border-stone-300 border-r-0 p-4 sm:w-[450px] outline-none max-sm:text-[14px]  rounded-md max-twelve:p-3 '/>

<button className='font-semibold text-[17px] font-inter py-[18px] px-[50px] max-twelve:px-[40px] max-twelve:py-[14px]  relative right-2 rounded-md text-white max-sm:text-[13.3px]  bg-sky-600'  type='submit'>Search</button>
</form>
</div>
</div>


<div className='w-1/2 flex gap-4 max-md:justify-center max-md:w-[700px] z-20 max-lg:m-auto max-twelve:justify-center max-lg:mt-10 max-sm:w-[350px] max-sm:mx-auto max-sm:mt-12'>
  <img className='relative top-20 max-twelve:w-[160px] max-twelve:h-[330px] max-sm:w-[105px] max-sm:h-[205px]'  src={Picture1} alt="pic1" />
  <img className='relative bottom-4 max-twelve:w-[160px] max-twelve:h-[330px] max-sm:w-[105px] max-sm:h-[205px] ' src={Picture2} alt="pic2" />
  <img className='relative top-12 max-twelve:w-[160px] max-twelve:h-[330px] max-sm:w-[105px] max-sm:h-[205px]' src={Picture3} alt="pic3" />    
</div>


</div>

<div className='w-full relative bg-white bottom-[125px] z-0 h-[200px] clips max-lg:bottom-[-30px] max-lg:h-[205px] max-twelve:h-[215px] max-sm:hidden max-up:h-[245px]'>
 
</div>

    
    </>
 
  )
}

export default First