'use client'
import React from 'react'
import './Navbar.css'
import { useState, useEffect } from "react";



function Navbar() {
const [scroll, setScroll] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 10);
  });
});  
  return (
    // <div className='bg-black sticky'>
    <div className={scroll ? "bg-black sticky" : "bg-transparent sticky"}>
        <div className='container mx-auto flex justify-between items-center py-4 px-16'>
            <h1 className='text-white text-2xl font-bold'>Ankit Kumar</h1>
            <ul className='flex'>
                <li className='ml-4'><a href='#' className='text-white'>Home</a></li>
                <li className='ml-4'><a href='#' className='text-white'>About</a></li>
                <li className='ml-4'><a href='#' className='text-white'>Resume</a></li>
                <li className='ml-4'><a href='#' className='text-white'>Skill</a></li>
                <li className='ml-4'><a href='#' className='text-white'>Projects</a></li>
                <li className='ml-4'><a href='#' className='text-white'>Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar