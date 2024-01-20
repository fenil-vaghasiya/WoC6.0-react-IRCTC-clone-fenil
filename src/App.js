import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';
import { useEffect, useState } from 'react';

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
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
