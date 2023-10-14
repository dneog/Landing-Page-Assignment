import React, { useEffect, useState } from 'react'
import im from '../assets/im.png';
import star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';

const PostData = ({data, ChildData}) => {
  const navigate = useNavigate()
  const [name, setName] =useState(null)

  const scroll=()=> {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(()=> {
    async function call(){
      const response =await fetch(`http://localhost:8000/data?name_like=${name}`)
      if(name.trim() === ''){
        ChildData(null)
    }else{
    const data = await response.json()
    ChildData(data.slice(0,1))
   
    }           
     
    }

     call()
    

  },[name])

  const handleClick=(Name)=> {
    setName(Name)
    navigate(`/profile?q=${Name}`)
    scroll()
  }
  return (

    <div className='min-w-[320px] w-[30%] bg-white rounded-lg shadow-lg border-[1px] border-gray-150  m-4 relative '>
       <img src={im} alt="" />
       <div className='flex justify-between px-3 mt-4 mb-2'>
        <p className='text-[20px] font-semibold'>{data.name}</p>
        <p className='text-[20px] font-semibold'>{data.price}</p>
       </div>
        <p className='px-3 text-[14px]'>{data.intro}</p>

        <div className='flex items-center px-3 mt-3'>
            <img src={star} alt="" />
        <p className='px-1 text-[14px]'>{data.rating}</p>
        <p className=' text-[14px]'>{data.reviewCount}</p>
        </div>
        <div className='p-3'>
        <button className='text-white text-[16px] font-semibold w-full bg-sky-600  rounded-lg py-2 mb-1 mt-4' onClick={()=> handleClick(data.name)} >View Services</button>
        </div>
        
       
    </div>
  )
}

export default PostData