import React from 'react'

function Navbar() {
  return (
    <div className='bg-black'>
        <div className='container mx-auto flex justify-between items-center py-4 px-16'>
            <h1 className='text-white text-2xl font-bold'>My App</h1>
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