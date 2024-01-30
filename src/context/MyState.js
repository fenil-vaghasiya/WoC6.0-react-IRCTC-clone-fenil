import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { auth } from '../firebase/FirebaseConfig';

function MyState(props) {
  
  return (
    <MyContext.Provider>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState