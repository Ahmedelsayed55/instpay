import React from 'react'
import InstPay from './InstPay'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './Login'


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer position='top-right'/>
        
        <Routes>
          <Route path='/' element={<InstPay/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
