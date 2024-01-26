import React from 'react'
import Search from './Search'
import Expertise from './Expertise'

function Home() {
  return (
    <div>
        <div>
            <div className='h-[500px] bg-gradient-to-b from-gray-100 to-cyan-500 rounded-b-full flex justify-center items-center'>
              <div className=' w-1/3 px-5 text-center'>
                <h1 className='font-semibold text-4xl'>WELCOME,</h1>
                <p className=''>Revolutionize your travel experience with our train travel website, offering seamless booking, real-time updates, and curated itineraries. Explore the world by rail, where every journey is a story waiting to be written.</p>
              </div>
              <div className='w-[430px] h-full flex justify-center items-center'>
                <img src="assets/train_img2.png" alt="" className='rounded-tr-[120px] rounded-bl-[120px] h-3/4'/>
              </div>
            </div>
            <Search/>
            <Expertise/>
        </div>
    </div>
  )
}

export default Home