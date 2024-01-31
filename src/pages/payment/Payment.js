import React, { useContext, useState } from 'react'
import Services from '../../components/expertise/Services'
import Layout from '../../components/layout/Layout'
import { useLocation, useNavigate } from 'react-router-dom'
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import myContext from '../../context/myContext';
import { toast } from 'react-toastify';

function Payment() {

    const location = useLocation();
    
    const context = useContext(myContext);
    const {GetUser} = context;
    const loggeduser = GetUser();
    const currUser = loggeduser[0];

    const HandlePay =async(e)=>{
        e.preventDefault();
        if(currUser.trains.some((i)=>i.train_number === location.state.data.train_number && i.paid==true)){
            toast("Your ticket is already booked!");
        }else{
            const trainNumberToFind = location.state.data.train_number;
            const trainIndex = currUser.trains.findIndex(train => train.train_number === trainNumberToFind);
            if (trainIndex !== -1) {

                currUser.trains[trainIndex].paid = true;
                try {
                        await updateDoc(doc(fireDB, "users", currUser.id), currUser);
                        toast.success('Your payment is succefull!');
                    } catch (error) {
                        toast.error(error);
                    }
            } else {
                toast.error('Train not found in the user\'s trains array.');
            }
        }
        window.location.href='/';
    }
  return (
    <Layout>
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
                        <button className='btn bg-blue-900 hover:bg-blue-950 px-4 text-white' onClick={HandlePay}>PAY NOW</button>
                        <h2>T & C Apply</h2>
                    </form>
                </div>
                <Services/>
            </div>
        </div>
    </Layout>
  )
}

export default Payment