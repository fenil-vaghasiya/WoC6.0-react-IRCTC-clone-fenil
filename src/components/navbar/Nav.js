import { QuerySnapshot, collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FaRegUserCircle } from "react-icons/fa";
import myContext from '../../context/myContext';
function Nav() {
  
  const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user);
  
  const logout = ()=>{
    localStorage.clear('user');
    window.location.href = '/login';
  }

  const context = useContext(myContext);
  const {GetUser} = context;

  let currUser={};
  if(user){
      const loggeduser = GetUser();
      currUser = loggeduser[0];
  }
  
    return (
    <div>
        <div className='flex bg-blue-900 text-xl h-20 items-center text-white'>
            <div className='col-2 pl-5'>
                <h1 className='font-bold text-2xl font-sans'>{user?currUser?.firstname:"Welcome To IRCTC..."}</h1>
            </div>
            <div className='col-10 flex justify-end gap-5 pr-7 items-center'>
                <a href="/">Home</a>
                <a href="/booklist">Booklist</a>
                {user ? "" : <a href='/signup'>Sign In</a>}
                {user ? <a href="" onClick={logout}>Log out</a>: ""}
                <a href="/profile" className='text-3xl'><FaRegUserCircle /></a>
                
            </div>
        </div>
    </div>
  )
}

export default Nav