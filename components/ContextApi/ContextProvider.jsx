"use client"
import React, { useState } from 'react'
import { awbDetailsContext } from './Context'
const ContextProvider = ({ children }) => {
    const [getUserData,setUserData]  = useState([])
  return (
   <>
   <awbDetailsContext.Provider value={{getUserData,setUserData}}>
   <div>{children}</div>
   </awbDetailsContext.Provider>
   </>
  )
}

export default ContextProvider
