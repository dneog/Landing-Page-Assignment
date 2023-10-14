import React, { useEffect, useState } from 'react'
import star from '../assets/star.png'
import cad from '../assets/cad.png'
import pd from '../assets/pd.png'
import im from '../assets/im.png'
import { useLocation } from 'react-router-dom'

import PostData from './PostData'

const MainProfile = () => {
    const [user, setUser]= useState(null)
    const [allData, setAllData] = useState([])
    const[loading, setLoading] = useState(false)

    const search = useLocation().search;

    const searchData = new URLSearchParams(search).get("q")
    console.log(searchData)
    

    useEffect(()=> {
        async function Profile(){
            setLoading(true)
            const response = await fetch(`http://localhost:8000/data?name_like=${searchData}`)
            
            if(searchData.trim() === ''){
                setUser(null)
                setLoading(false)
            }else{
            const data = await response.json()
            setUser(data.slice(0,1))
            setLoading(false)
            }           
        }
        

        Profile()
        getAllData()
       
    },[])

    const getAllData = async ()=> {
        setLoading(true)
        const response = await fetch(`http://localhost:8000/data`)
        const allData = await response.json()
        setLoading(false)
        setAllData(allData)
        
    }

    // if(user && allData){
    //     const filteredArr = allData.filter((item) => {
    //         return !user.some((userName)=> userName.name == item.name)
    //        })
        
    //        const NewFilteredArr = filteredArr.slice(0,3)
        
    // }else{
    //     
    // }
    const NewFilteredArr = allData.slice(5,8)
    
   const ChildData=(data)=> {
    setUser(data)
   }

   

  return (
    
  
    <>
    {loading && <div className='pageLoading'></div> }
    {!loading && !user && <div className='text-center text-xl font-semibold mt-20 mb-16'>No Result Found</div>}
    {!loading && user && user.length==0 && <div className='text-center text-xl font-semibold mt-20 mb-16'>No Result Found</div>}

    {!loading && user && user.map((item) => (
         <div className='max-w-[1290px] mx-auto flex justify-between mt-14 px-[10px] max-three:flex-wrap'>

         <div className='w-[38%] max-three:w-[76%] max-three:mx-auto max-sm:w-[95%] mt-3'>
         <h2 className='text-[33px] font-semibold'>{item.name}</h2>
         <p className='text-[18px] pt-4'>{item.intro}</p>
     
                 <div className='flex items-center mt-5'>
                     <img src={star} alt="" />
                     <span className='font-semibold mr-1 ml-1'>{item.rating}</span>
                     <span>({item.reviewCount})</span>
                 </div>
     
     
                 <div className='bg-white shadow-lg p-5 rounded-xl
                 border-[1px] border-gray-150 mt-7 max-three:max-w-[750px] max-three:mx-auto'>
     
                     <div className='flex justify-between'>
                         <p>{item.taskComplexity}</p>
                         <p className='font-semibold text-[18px]'>{item.price}</p>
                     </div>
     
                     <div className='flex items-center mt-4'>
                     <img src={cad} alt="" />
                     <p className='ml-2'>{item.deliveryTime}</p>
                     </div>
                    
                    <div className='flex items-center justify-between mt-5'>
                     <button className='px-6 py-2 max-sm:text-[14px] max-sm:px-2 font-semibold text-white
                     bg-sky-600 rounded-lg'>Request Proposal</button>
                     <button className='px-6 py-2 text-[16px] max-sm:text-[14px] max-sm:px-2 font-semibold text-sky-600 border-2 
                     border-sky-600 rounded-lg '>Chat with me</button>
                    </div>
     
                 </div>
     
                 <div className='bg-white shadow-lg p-5 rounded-xl
                 border-[1px] border-gray-150 mt-7 max-three:max-w-[750px] max-three:mx-auto'>
                     <p className='text-[30px] font-semibold '>What People say ?</p>
                     <p className='mt-2'>{item.testimonial.text}</p>
                     {/* <p className='text-center font-semibold pt-3'>- {item.testimonial.author}</p> */}
     
                     <img className='w-[80px] mx-auto mt-5 ' src={pd} alt="" />
                 </div>
         </div>
     
     
        <div className='w-[61%] ml-11 max-three:w-[76%] max-three:mx-auto max-three:mt-6 max-sm:w-[95%]'>
          <div className='max-w-[650px] max-three:max-w-[750px] max-three:mx-auto'>
         <img className='rounded-lg' src={item.image} alt="" />
          </div>
     
          <p className='text-[32px] max-sm:text-[23px] font-semibold mt-3'>About {item.name}</p>
          <div className='flex justify-between mt-3 max-w-[600px] max-sm:flex-wrap max-sm:gap-4'>
             <div className=''> 
                 <p className='text-neutral-400 text-[16px] font-semibold pb-1'>FROM</p>
                 <p className='text-[16px]'>{item.about.from}</p>
             </div>
             <div className=''> 
                 <p className='text-neutral-400 text-[16px] font-semibold pb-1'>PARTNER SINCE</p>
                 <p className='text-[16px]'>{item.about.partnerSince}</p>
             </div>
             <div className=''> 
                 <p className='text-neutral-400 text-[16px] font-semibold pb-1'>AVERAGE RESPONSE TIME</p>
                 <p className='text-[16px]'>{item.about.averageResponseTime}</p>
             </div>
          </div>
     
          <p className='text-neutral-400 text-[16px] font-semibold pb-1 mt-5 '>ABOUT</p>
          <p>{item.about.description}</p>
     
          <div className='flex justify-between mt-7 max-sm:flex-wrap max-sm:gap-4 max-sm:mt-4 '>
             <div>
                 <p className='text-neutral-400 text-[16px] font-semibold pb-1'>SERVICES I OFFER</p>
                 <ul className='ml-4'>
                    {item.about.services.map((service) => (
                        <li className='list-disc pt-1'>{service}</li>
                    ))}
                     
                 </ul>
             </div>
     
             <div>
             <p className='text-neutral-400 text-[16px] font-semibold pb-1'>WHY ME ?</p>
             <ul className='ml-4'>
                    {item.about.benefits.map((service) => (
                        <li className='list-disc pt-1'>{service}</li>
                    ))}
                     
                 </ul>
             </div>
          </div>
        </div>
     
     
     
         </div>
    ))}
   
   <div className='max-w-[1290px] mx-auto  px-[10px] mt-10 mb-5'>
      <p className='text-[32px] font-semibold'>Recommended for you</p>
      <div className='flex justify-center mt-5 gap-4 max-three:flex-wrap'>
      {!loading && NewFilteredArr.map((data)=> (
    <PostData key={data.id} data={data} ChildData={ChildData}/>
   )) }
    </div>
    </div>  
  


    
    </>
   
    
   
  )
}

export default MainProfile