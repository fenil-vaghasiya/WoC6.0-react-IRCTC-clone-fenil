import React from 'react'

function Search() {
  return (
    <div>
        <div className='h-full w-full'>
            <div className='flex flex-col items-center p-5'>
                <h1 className='font-semibold text-4xl'>Start Your Journy</h1>
                <div className='flex flex-col item-start w-1/3'>
                    <label htmlFor="" className='text-xl pb-2'>From :</label>
                    <input type="text" name="" id="" placeholder="Your location" className='border-1 border-gray-500 p-3 rounded-md outline-none w-full'/>
                </div>
                <div className='flex justify-center items-center w-full h-full py-3'>
                    <button className='btn bg-blue-900 text-white hover:bg-blue-950 px-4'>Find</button>
                </div>
                <div className='flex flex-col item-start w-1/3'>
                    <label htmlFor="" className='text-xl pb-2'>To :</label>
                    <input type="text" name="" id="" placeholder="Destination" className='border-1 border-gray-500 p-3 rounded-md outline-none w-full'/>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-center w-full p-3 gap-3'>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2'>
                        <label htmlFor="date" className='font-bold text-xl'>Date</label>
                        <input type="date" className="p-2 rounded-md w-2/3 border-1 border-gray-500" />
                    </div>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2'>
                        <label htmlFor="state" className='font-bold text-xl'>All Classes</label>
                        <select name="state" id="" className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Goa">Goa</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                    <div className='w-1/3 flex flex-col border-2 border-blue-900 rounded-md p-2'>
                        <label htmlFor="state" className='font-bold text-xl'>Categories</label>
                        <select name="state" id="" className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Goa">Goa</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-center p-3'>
                    <button className='btn bg-blue-900 text-white hover:bg-blue-950 px-4'>SEARCH</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Search