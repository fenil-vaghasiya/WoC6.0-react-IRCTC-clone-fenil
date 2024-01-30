import { QuerySnapshot, collection, doc, getDocs, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Nav() {
  
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  
  function GetCurrentUser(){
    const [user,setUser] = useState('');
    const userCollectionRef = collection(fireDB,"users");

    useEffect(()=>{
        auth.onAuthStateChanged((userlogged)=>{
            if(userlogged){
                const getUsers =async()=>{
                    const q = query(collection(fireDB,"users"),where("uid","==",userlogged.uid));
                    // console.log("this is profile run",q);
                    const data = await getDocs(q);
                    setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
                }
                getUsers();
            }else{
                setUser(null);
            }
        })
    },[])
    return user;
}

const loggeduser = GetCurrentUser();
const currUser = loggeduser[0];
  // const q = query(collection(fireDB,'users'));
  // let userName = "";
  // const data = onSnapshot(q,(QuerySnapshot)=>{
  //   QuerySnapshot.forEach((doc)=>{
  //     console.log('doc',doc);
  //     if(doc.data().uid === user.uid){
  //       userName = doc.name;
  //     }
  //   })
  // })
  // console.log("username",userName);
  const logout = ()=>{
    localStorage.clear('user');
    window.location.href = '/login';
  }
  return (
    <div>
        <div className='flex bg-blue-900 text-xl h-20 items-center text-white'>
            <div className='col-2 pl-5'>
                <h1 className='font-bold text-2xl font-sans'>{currUser ? `Hello ${currUser.firstname}...` : "Welcome To IRCTC!"}</h1>
            </div>
            <div className='col-10 flex justify-end gap-5 pr-7'>
                <a href="/">Home</a>
                <a href="/booklist">Booklist</a>
                <a href="/about">AboutUs</a>
                {user ? <a href="" onClick={logout}>Log out</a>: ""}
                <a href="/profile"><FontAwesomeIcon icon={faUser} /></a>
                {user ? "" : <a href='/signup'>Sign Up</a>}
            </div>
        </div>
    </div>
  )
}

export default Nav