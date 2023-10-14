import React from 'react'
import Header from '../components/Header'
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <div className='h-[740px] max-twelve:h-[687px] max-sm:h-[750px] max-lg:h-[850px] w-full overflow-hidden z-0 relative bg-gradient-to-r from-rose-100 via-purple-50 via-teal-100 to-fuchsia-100 side'>
      <div className=' m-auto z-10'>
      <Header />
      <First />
      
      </div>
     
      </div>

     <Second />
     <Third />
     <Footer />
    </>

  )
}

export default Home