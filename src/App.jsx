import React from 'react'
import InstPay from './InstPay'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Login from './Login'
import UserControl from './UserControl'
import Register from './Register'


const App = () => {
  return (
    <div >
      <BrowserRouter>
        <ToastContainer position='top-right'/>
        
        <Routes>
          <Route path='/' element={<InstPay/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/user-control' element={<UserControl/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App
