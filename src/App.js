import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Search from './components/Search';
import Home from './components/Home';
import Payment from './components/Payment';
import Addtobooklist from './components/Addtobooklist';
import Booklist from './components/Booklist';
import Bookinglist from './components/Bookinglist';
import PaymentFooter from './components/PaymentFooter';
import Expertise from './components/Expertise';

const auth = getAuth(app);

function App() {
  const [user,setUser]=useState(null)

  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      if(user){
        setUser(user);
      } else {
        setUser(null);
      }
    })
  },[])

  if(user != null){
    return(
      <div className='flex flex-col justify-center items-center p-2'>
        <div>Hello {user.email}</div>
        <button 
          className='btn bg-blue-900 hover:bg-slate-500 text-white font-semibold'
          onClick={()=>signOut(auth)}>SIGN OUT</button>
      </div>
    )
  }

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/addtobooklist' element={<Addtobooklist/>}/>
        <Route path='/booklist' element={<Booklist/>}/>
        <Route path='/bookinglist' element={<Bookinglist/>}/>
        <Route path='/paymentfooter' element={<PaymentFooter/>}/>
        <Route path='/expertise' element={<Expertise/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
