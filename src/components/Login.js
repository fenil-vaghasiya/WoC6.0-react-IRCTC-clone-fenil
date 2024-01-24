import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase'
import { ToastContainer,toast } from 'react-toastify'

const auth = getAuth(app);

function Login() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signinUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
            .then(value=>toast.success("Login successfull",{position:"top-center"}))
            .catch(e=>{
                let errorcode = e.code.split("auth/")[1];
                toast.error(errorcode,{position:"top-center"});
            })
    }
  return (
    <div className='sign-up'>
        <div className='h-screen backdrop-blur-[3px] bg-slate-600/30 w-full flex justify-center items-center'>
            <div className='w-1/3 h-3/6 rounded-3xl backdrop-blur-2xl bg-white/30'>
                <div className='h-1/4 w-full flex flex-col justify-end items-center text-2xl font-bold'>
                    <div className='rounded-full bg-blue-900 text-white w-7 h-7 text-sm font-bold text-center'><FontAwesomeIcon icon={faLock} /></div>
                    <div>Sign In</div>
                </div>
                <div className='h-2/4 flex flex-col w-5/6 mx-auto justify-center'>
                    <label htmlFor="email">Email address*</label>
                    <input 
                        type="email" 
                        placeholder='Enter your email' 
                        className='outline-none border-4 border-b-black border-none rounded-lg py-2 pl-2' 
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="password">Password*</label>
                    <input 
                        type="password" 
                        placeholder='Enter your password'
                        className='outline-none border border-b-black rounded-lg py-2 pl-2'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    
                </div>
                <div className='h-1/4 text-md w-5/6 mx-auto text-white flex flex-col'>
                    <button 
                        className='btn bg-blue-900 hover:bg-slate-500 text-white font-semibold'
                        onClick={()=>signinUser()}>SIGN IN</button>
                    <a href="/signup" className='underline underline-offset-2'>DON'T HAVE AN ACCOUNT? SIGN UP</a>
                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Login