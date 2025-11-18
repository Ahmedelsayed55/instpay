import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const [userName]= useState(localStorage.getItem("userName") || "Guest");
  return (
    <div>
        <div className="container mx-auto px-4 py-2 flex justify-between items-center border-b">
            <h1 className="text-2xl font-bold">InstaPay</h1>
            <div>
                <Link to="/login" className="btn btn-outline btn-primary mr-2">Login</Link>
                <h1 className="inline-block text-amber-200"><span className="font-bold text-gray-300">Welcome:</span>  {userName}</h1>
            </div>
        </div>
    </div>
  )
}

export default NavBar
