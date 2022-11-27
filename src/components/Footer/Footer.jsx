import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-[#131313] ">
    <div className="container mx-auto text-white footer py-24  flex flex-wrap justify-center lg:justify-between ">
      <div className="flex items-center">
        <img className="w-[4rem]" src={logo} alt="" />
        <div>
        <h2 className="text-2xl">
          NEXT-CAR
          <br />
        </h2>
          <p>Best used car selleing service</p>
        </div>
      </div>
      <div className='text-gray-300 font-semibold'>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div className='text-gray-300 font-semibold'>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text text-gray-300 font-semibold">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>

</div>
  <div className="footer footer-center py-8 text-base-content border-t-2 border-[#272727] bg-[#1A1A1A]">
  <div>
    <p className='text-[#999999] font-semibold '><span className="font-bold">© Copyright 2022 </span> by NEXT-CAR - FARHAD</p>
  </div>
    
    </div>
  </footer>
  )
}

export default Footer