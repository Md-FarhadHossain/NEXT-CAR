import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/AuthContext'
import logo from '../../assets/logo.png'
import { AccountType } from '../../context/UserAccoutContext'
import { useState } from 'react'

const Navbar = () => {
 
  const {user,logout} = useContext(UserContext)
 
 


  const handleLogout = () => {
    logout()
    .then(() => {})
    .catch(err => console.log(err))
  }
  const menu = <>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {user ? <li><Link to='/dashbord'>Dashbord</Link></li> : ''}

  </>
  return (
    <div>
        <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menu}
      </ul>
    </div>
    <Link to='/' className="font-bold flex items-center normal-case text-3xl"><img className='w-14' src={logo} alt="logo" /> <span>Next-Car</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {menu}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <button onClick={handleLogout} className="btn btn-error">Logout</button> : <Link to='/login' className="btn">Login</Link>
    }
     <label htmlFor="dashbord-sidebar"  tabIndex={1} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
    </div>
  )
}

export default Navbar