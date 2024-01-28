import React from 'react'

function Footer() {
  return (
    <div className='h-80 flex'>
        <div className='bg-cyan-100 w-full divide-y divide-neutral-300'>
            <div className='w-full h-1/5 flex items-center '>
                <div className='w-1/2 pl-5 font-bold text-lg'>
                    <h1>Get connected with us on social networks</h1>
                </div>
                <div className='w-1/2 flex justify-end gap-5 pr-5'>
                    <button>Y</button>
                    <button>I</button>
                    <button>L</button>
                    <button>G</button>
                </div>
            </div>
            <div className='h-3/5 flex w-5/5 mx-auto pl-96 items-center'>
                <div className='w-1/2 flex flex-col'>
                    <h1 className='font-bold pb-3'>WINTER OF CODE</h1> 
                    <p className='w-1/2'> 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, consequuntur. 
                    </p>
                </div>
                <div className='w-1/2 flex flex-col'>
                    <h1 className='font-bold pb-3'>CONTACT</h1>
                    <p>DAIICT,INDIA</p>
                    <p>irctc@gmail.com</p>
                </div>
            </div>
            <div className='h-1/5 flex justify-center items-center backdrop-opacity-10 backdrop-invert bg-cyan-100/50'>
                <a href="/" className='underline underline-offset-1'>WINTER OF CODE</a>
            </div>
        </div>
    </div>
  )
}

export default Footer