import React from 'react'

function Bookingticket() {
  return (
    <div>
        <div className='h-screen'>
            <div className='w-4/5 mx-auto pt-3'>
                <h1 className='text-3xl font-bold pb-5'>BookList</h1>
            </div>
        
            <div class="bg-blue-50 border-none dropdown flex flex-col w-3/5 rounded-md ml-40 shadow-md">
                <button class="btn outline-none rounded-md flex justify-between items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <div className='flex gap-2'>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>1</div>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>FROM : SURAT</div>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>TO : AHMEDABAD</div>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>DATE : 25/01/2024</div>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>TRAIN : 20901</div>
                                <div className='bg-blue-100 py-1 px-3 rounded-full'>Paid</div>
                    </div>
                    <div><button className='dropdown-toggle'></button></div>
                </button>
                <table class="dropdown-menu w-full p-3">
                    <tr>
                        <td className='col-8'>Train Name</td>
                        <td className=''>:</td>
                        <td className=''>Thunder Arrow Express</td>
                    </tr>
                    <tr>
                        <td>From</td>
                        <td>:</td>
                        <td>SURAT</td>
                    </tr>
                    <tr>
                        <td>To</td>
                        <td>:</td>
                        <td>AHMEDABAD</td>
                    </tr>
                    <tr>
                        <td>Categoty</td>
                        <td>:</td>
                        <td>GENERAL</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>:</td>
                        <td>25-01-2024</td>
                    </tr>
                    <tr>
                        <td>All Classes</td>
                        <td>:</td>
                        <td>All Classes</td>
                    </tr>
                    <tr>
                        <td>TrainNumber</td>
                        <td>:</td>
                        <td>19011</td>
                    </tr>
                    <tr>
                        <td>AcChairCar</td>
                        <td>:</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>AC3Tier</td>
                        <td>:</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>ExecChairCar</td>
                        <td>:</td>
                        <td>Yes</td>
                    </tr>
                    <tr>
                        <td>SecondSitting</td>
                        <td>:</td>
                        <td>No</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>:</td>
                        <td>100Rs.</td>
                    </tr>
                    <div className='gap-3 py-2 flex'> 
                        <button className='btn bg-blue-900 hover:bg-blue-950 text-white px-3'>PAY NOW</button>
                        <button className='btn border-1 text-blue-900 border-blue-900 hover:bg-blue-950 hover:text-white'>REMOVE ITEM--</button>
                    </div>
                </table>
                
            </div>
        </div>
    </div>
  )
}

export default Bookingticket