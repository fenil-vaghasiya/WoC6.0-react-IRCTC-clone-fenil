import React, { useEffect, useState } from 'react'
import Bookingticket from '../../components/ticketdetail/Bookingticket'
import Layout from '../../components/layout/Layout'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { auth, fireDB } from '../../firebase/FirebaseConfig';


function Booklist() {
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

  return (
    <Layout>
      <div className='h-screen'>
          <h1 className='font-semibold text-3xl p-3 w-4/5 mx-auto'>Booklist</h1>
          {
            currUser?.trains?.map((data)=>{
              return(
                <div>
                  <Bookingticket data={data} currUser={currUser}/>
                </div>
              )
            })
          }
      </div>
    </Layout>
  )
}

export default Booklist