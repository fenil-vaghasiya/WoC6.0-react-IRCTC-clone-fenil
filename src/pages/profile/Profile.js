import React from 'react'
import Layout from '../../components/layout/Layout'

function Profile() {
  return (
    <Layout>
        <div className='h-full gap-2'>
            <div className='flex h-full w-3/5 mx-auto p-3'>
                <div className='w-2/5 h-1/2 mr-4 shadow-lg rounded-lg'>
                    <div className='w-full rounded-t-lg'>
                        <img src="/assets/train-img3.webp" alt="" className='h-72 p-2'/>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center py-3'>
                        <h1 className='font-bold text-lg'>YOU</h1>
                        <h2>@Guest</h2>
                        <h3>irctc@gmail.com</h3>
                        <h3>+91 1234567890</h3>
                    </div>
                </div>
                <div className='w-3/5 flex flex-col p-3 shadow-lg h-full rounded-lg'>
                    <h1 className='text-2xl font-bold'>Profile</h1>
                    <form action="" className='flex flex-col gap-3 my-2 relative'>
                        <input type="text" placeholder='first name' v-model="email" className='border-1 border-gray-500 p-2 rounded-md outline-none'/>
                        <input type="text" placeholder='middle name' className='border-1 border-gray-500 p-2 rounded-md outline-none'/>
                        <input type="text" placeholder='last name' className='border-1 border-gray-500 p-2 rounded-md outline-none'/>
                        <input type="text" placeholder='username' className='border-1 border-gray-500 p-2 rounded-md outline-none'/>
                        <input type="email" placeholder='email' className='border-1 border-gray-500 p-2 rounded-md outline-none'/>

                        <span>
                            
                        </span>
                        <span className='flex justify-center gap-1 relative'>
                        <label htmlFor="gender" className='left-0 absolute font-bold'>Gender</label>
                            <input type="radio" name="gender" value="male"/>
                            <label htmlFor="male" className='pr-3'>Male</label>
                            <input type="radio" name="gender" value="female"/>
                            <label htmlFor="female" className='pr-3'>Female</label>
                            <input type="radio" name="gender" value="other"/>
                            <label htmlFor="other" className='pr-3'>Other</label>
                        </span>

                        <label htmlFor="dob" className='font-bold'>Date Of Birth</label>
                        <input type="date" className='border-1 border-gray-500 py-1 px-2 rounded-md outline-none'/>
                        <input type="text" placeholder='phone number' className='border-1 border-gray-500 p-2 rounded-md outline-none'/>
                        <label htmlFor="state" className='font-bold'>State</label>
                        <select name="state" id="" className='border-1 border-gray-500 p-2 rounded-md outline-none'>
                            <option value="Gujarat">Gujarat</option>
                            <option value="Goa">Goa</option>
                            <option value="Tamilnadu">Tamilnadu</option>
                            <option value="Delhi">Delhi</option>
                        </select>
                        <button className='btn bg-blue-900 text-white hover:bg-blue-950 w-1/5 mx-auto'>Update</button>
                    </form>
                </div>
            </div>
            <div className='flex justify-center pt-20 pb-5'>
                <button className='btn btn-danger px-4'>Log out</button>
            </div>
        </div>
    </Layout>
  )
}

export default Profile