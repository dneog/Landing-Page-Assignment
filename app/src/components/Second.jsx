import React from 'react'
import Cards from './Cards'

const Second = () => {
  let formData = [
    {
      id: 1,
      name: 'Commencement of business',
      desc : 'Invested shareholders must confirm payment and office address ',
      days: 'Within 180 days',
      fees: <p><span style={{fontWeight: 'bold'}}>₹50,000</span> for the company</p>,
      fees2: <p><span style={{fontWeight: 'bold'}}>₹50,000</span> day for directors</p>,  
      pre: <span className='text-sm relative bottom-2'>st</span>
    },
    {
      id: 2,
      name: 'Auditor Appointment',
      desc : 'Company informs new auditor and submits ADT.1 form to ROC.',
      days: 'Within 30 days ',
      fees: <p><span style={{fontWeight: 'bold'}}>₹300</span> per month</p>,
      pre: <span className='text-sm relative bottom-2'>nd</span>
    },
    {
      id: 3,
      name: 'DIN eKYC',
      desc : 'Directors share personal information for identification & verification ',
      days: 'Every Year',
      fees: <p><span style={{fontWeight: 'bold'}}>₹5000</span> one time</p>,
      pre: <span className='text-sm relative bottom-2'>rd</span>
    },
    {
      id: 4,
      name: 'DIN eKYC',
      desc : 'Companies report money taken from people to ROC; auditors confirm details.',
      days: 'Within 30 days ',
      fees: <p><span style={{fontWeight: 'bold'}}>₹300</span> per month</p>,
      pre: <span className='text-sm relative bottom-2'>th</span>
    },
    {
      id: 5,
      name: 'MCA Form AOC-4',
      desc : "It's like an official report card for a company's documents",
      days: 'On or Before 30th November ',
      fees: <p><span style={{fontWeight: 'bold'}}>₹200</span> per day</p>,
      fees2: '(No upper limit)*',
      pre: <span className='text-sm relative bottom-2'>th</span>
    },
    {
      id: 6,
      name: 'MCA Form MGT-7',
      desc : "Companies must annually report activities and finances to the registrar.",
      days: 'On or Before 31th December ',
      fees: <p><span style={{fontWeight: 'bold'}}>₹200</span> per day</p>,
      fees2: '(No upper limit)*',
      pre: <span className='text-sm relative bottom-2'>th</span>
    },
    
  ]
  return (
    <div className=' mx-auto mt-20'>
      <h1 className='text-center text-[65px]  max-up:text-[45px] font-bold'>Want to  <span className='text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-purple-700'>Join</span> Us?</h1>
      <p className='text-center text-[22px]  mx-auto max-w-[1290px]'>To remain with us, it is essential that you diligently follow the steps provided</p>

      <div className='bg-hero bg-no-repeat'>
        <div className='flex justify-center flex-wrap mx-auto max-w-[1290px] pt-32 '>
        {formData.map((data)=> (
        <Cards key={data.id} data={data} />
      )
      )}
        </div>
     <p className='max-w-[1280px] mx-auto p-2'>* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 <span className='font-semibold'> every day</span> until you file the form . There is no maximum penalty amount. So, if you don't file the form for a year, you will owe ₹73,000 per form</p>

      </div>
    </div>
  )
}

export default Second