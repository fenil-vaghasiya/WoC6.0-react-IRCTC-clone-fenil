import React from 'react'
import PaymentFooter from './PaymentFooter'

function Payment() {
  return (
    <div>
        <div className='pt-16'>
            <div className='w-1/3 bg-cyan-100 py-4 mx-auto rounded-3xl flex justify-center items-center shadow-lg border border-gray-400'>
                <form action="" className='flex flex-col w-full justify-center items-center p-4 gap-3'>
                    <h1 className='font-bold text-3xl'>Payment Details</h1>
                    <input type="text" placeholder='Card number' className='border-1 border-gray-500 p-2 rounded-md outline-none w-full bg-cyan-50'/>
                    <div className='flex items-center w-full gap-3'>
                        <input type="text" placeholder='Month' className='border-1 border-gray-500 p-2 rounded-md outline-none w-1/2 bg-cyan-50'/>
                        <input type="text" placeholder='Year' className='border-1 border-gray-500 p-2 rounded-md outline-none w-1/2 bg-cyan-50'/>
                    </div>
                    <input type="text" placeholder='CVV' className='border-1 border-gray-500 p-2 rounded-md outline-none w-full bg-cyan-50'/>
                    <input type="text" placeholder='Country' className='border-1 border-gray-500 p-2 rounded-md outline-none w-full bg-cyan-50'/>
                    <button className='btn bg-blue-900 hover:bg-blue-950 px-4 text-white'>PAY NOW</button>
                    <h2>T & C Apply</h2>
                </form>
            </div>
            <PaymentFooter/>
        </div>
    </div>
  )
}

export default Payment