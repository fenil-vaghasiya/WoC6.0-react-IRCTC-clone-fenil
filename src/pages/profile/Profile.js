import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { auth, fireDB } from '../../firebase/FirebaseConfig';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';

function Profile() {
    
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

    let loggeduser = GetCurrentUser();
    let usercurr = loggeduser[0];
    let [currUser,setCurrUser] = useState({});

    // console.log(usercurr)
    const logout = ()=>{
        localStorage.clear('user');
        window.location.href = '/login';
    }

    const handleUpdate = async()=>{
        // console.log(currUser);
        usercurr.firstname=currUser.firstname;
        usercurr.middlename=currUser.middlename;
        usercurr.lastname=currUser.lastname;
        usercurr.username=currUser.username;
        usercurr.email=currUser.email;
        usercurr.phone=currUser.phone;
        usercurr.state=currUser.state;
        usercurr.gender=currUser.gender;
        usercurr.dob=currUser.dob;

        await setDoc(doc(fireDB,"users",usercurr.id),usercurr);
        console.log("user",usercurr);
    }

  return (
    <Layout>
        <div className='h-full gap-2'>
            <div className='flex h-full w-3/5 mx-auto p-3'>
                <div className='w-2/5 h-1/2 mr-4 shadow-lg rounded-lg'>
                    <div className='w-full rounded-t-lg'>
                        <img src="/assets/train-img3.webp" alt="" className='h-72 p-2'/>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center py-3'>
                        <h1 className='font-bold text-lg'>{currUser?.gender=="male"?"Mr.":"Miss."}{currUser?.firstname}</h1>
                        <h2>{currUser?.username}</h2>
                        <h3>{currUser?.email}</h3>
                        <h3>{currUser?.phone}</h3>
                    </div>
                </div>
                <div className='w-3/5 flex flex-col p-3 shadow-lg h-full rounded-lg'>
                    <h1 className='text-2xl font-bold'>Profile</h1>
                    <FormControl action="" className='flex flex-col gap-3 my-2 relative'>
                        <TextField value={currUser?.firstname} onChange={(e)=>setCurrUser({...currUser,firstname:e.target.value})} label="firstname" type="text"/>
                        <TextField value={currUser?.middlename} onChange={(e)=>setCurrUser({...currUser,middlename:e.target.value})} label="middlename" type="text"/>
                        <TextField value={currUser?.lastname} onChange={(e)=>setCurrUser({...currUser,lastname:e.target.value})} label="lastname" type="text"/>
                        <TextField value={currUser?.username} onChange={(e)=>setCurrUser({...currUser,username:e.target.value})} label="username" type="text"/>
                        <TextField value={currUser?.email} onChange={(e)=>setCurrUser({...currUser,email:e.target.value})} label="email" type="email"/>
                        <FormLabel id="demo-row-radio-buttons-group-label"><p className='font-bold text-black'>Gender</p></FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={currUser?.gender}
                                onChange={(e)=>setCurrUser({...currUser,gender:e.target.value})}
                            >
                                <FormControlLabel value="male" checked={currUser?.gender=="male"} control={<Radio />} label="Male" />
                                <FormControlLabel value="female" checked={currUser?.gender=="female"} control={<Radio />} label="Female" />
                                <FormControlLabel value="other" checked={currUser?.gender=="other"} control={<Radio />} label="Other" />
                            </RadioGroup>
                        {/* <span className='flex justify-center gap-1 relative'>
                        <label htmlFor="gender" className='left-0 absolute font-bold'>Gender</label>
                            <input type="radio" name="gender" value="male"/>
                            <label htmlFor="male" className='pr-3'>Male</label>
                            <input type="radio" name="gender" value="female"/>
                            <label htmlFor="female" className='pr-3'>Female</label>
                            <input type="radio" name="gender" value="other"/>
                            <label htmlFor="other" className='pr-3'>Other</label>
                        </span> */}

                        <label htmlFor="dob" className='font-bold'>Date Of Birth</label>
                        <input type="date" value={currUser?.dob} onChange={(e)=>setCurrUser({...currUser,dob:e.target.value})} className='border-1 border-gray-300 py-1 px-2 rounded-sm outline-none'/>
                        <TextField value={currUser?.phone} onChange={(e)=>setCurrUser({...currUser,phone:e.target.value})} label="phone number" type="text" placeholder='phone number'/>
                        <label htmlFor="state" className='font-bold'>State</label>
                        <select name="state" value={currUser?.state} onChange={(e)=>setCurrUser({...currUser,state:e.target.value})} className='border-1 border-gray-500 p-3 rounded-md outline-none'>
                            <option value="Gujarat" name="state">Gujarat</option>
                            <option value="Goa" name="state">Goa</option>
                            <option value="Tamilnadu" name="state">Tamilnadu</option>
                            <option value="Delhi" name="state">Delhi</option>
                        </select>
                        <button className='btn bg-blue-900 text-white hover:bg-blue-950 w-1/5 mx-auto' onClick={handleUpdate}>Update</button>
                    </FormControl>
                </div>
            </div>
            <div className='flex justify-center pt-20 pb-5'>
                <button className='btn btn-danger px-4' onClick={logout}>Log out</button>
            </div>
        </div>
    </Layout>
  )
}

export default Profile