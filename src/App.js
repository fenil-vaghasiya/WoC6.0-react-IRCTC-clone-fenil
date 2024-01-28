import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import Signup from './pages/registration/Signup';
import Login from './pages/registration/Login';
import Profile from './pages/profile/Profile';
import Payment from './pages/payment/Payment';
import Booklist from './pages/booklist/Booklist';

function App() {
  // const [user,setUser]=useState(null)

  // useEffect(()=>{
  //   onAuthStateChanged(auth,user=>{
  //     if(user){
  //       setUser(user);
  //     } else {
  //       setUser(null);
  //     }
  //   })
  // },[])

  // if(user != null){
  //   return(
  //     <div className='flex flex-col justify-center items-center p-2'>
  //       <div>Hello {user.email}</div>
  //       <button 
  //         className='btn bg-blue-900 hover:bg-slate-500 text-white font-semibold'
  //         onClick={()=>signOut(auth)}>SIGN OUT</button>
  //     </div>
  //   )
  // }

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/booklist' element={<Booklist/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;
