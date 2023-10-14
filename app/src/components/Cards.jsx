import React from 'react'

const Cards = ({data}) => {
  return (
    <div className='min-w-[340px] w-[30%] bg-white rounded-lg shadow-lg border-[1px] border-gray-150 p-5 m-4 relative '>
        <p className='absolute left-[-10px] top-[-10px] bg-gradient-to-r from-sky-600 to-purple-700 px-2 py-1 rounded-lg font-semibold text-white'><span className='text-[22px]'>{data.id}</span>{data.pre}</p>
        <p className='text-[20px] font-semibold text-center pb-2'>{data.name}</p>
        <p className='text-[15px] pb-3'>{data.desc}</p>

        <div className='bg-zinc-100 p-3 flex justify-between gap-2  rounded-lg '>

            <div className='w-[100px]'>
                <p className='text-[17px] font-semibold text-sky-600 pb-[5px]'>Due Date</p>
                <p className='text-[16px]'>{data.days}</p>
            </div>

            <div>
            <p className='text-[17px] font-semibold text-red-500 pb-[5px]'>Penalty fees</p>
            <p className='text-[15px]'>{data.fees}</p>
            <p className='text-[15px]'>{data.fees2}</p>
            </div>
           
            <div>

            </div>

        </div>
    </div>
  )
}

export default Cards