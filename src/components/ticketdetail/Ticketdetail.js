import React from 'react'

function Ticketdetail() {
  return (
    <div>
        <div className='py-4'>
            <div className='h-1/3 bg-blue-100 w-4/5 mx-auto rounded-lg shadow-md p-3'>
                <div className='h-1/4 flex justify-between items-center p-2 '>
                    <div className='font-bold'>Flying Lion Express</div>
                    <div className='text-center text-blue-900'>
                        <p>Runs on:</p>
                        <button className='px-4'>M</button>
                        <button className='px-4'>T</button>
                        <button className='px-4'>W</button>
                        <button className='px-4'>T</button>
                        <button className='px-4'>F</button>
                        <button className='px-4'>S</button>
                        <button className='px-4'>S</button>
                    </div>
                    <div><button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>TRAIN SCHEDULE</button></div>
                </div>
                <div className='h-1/4 flex justify-between items-center p-2 text-gray-400'>
                    <div className=''>06:23 | Surat | 25-01-2024</div>
                    <div className='text-center'>
                        <p>--05:07--</p>
                    </div>
                    <div>06:25 | Ahmedabad | 25-01-2024</div>
                </div>
                <div className='h-1/4 flex items-center gap-3 p-2'>
                    <div>Discount On</div>
                    <div className='gap-3 flex'>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>2S</button>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>ACCC</button>
                    </div>
                </div>
                <div className='h-1/4 flex items-center p-2'>
                    <div className='flex gap-3'>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>REMOVE FROM BOOKLIST --</button>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>BOOK</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ticketdetail