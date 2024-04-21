import React from 'react'
import './Landing.css'
function Landing() {
  return (
   
    <div className='flex justify-center bg-black h-screen'>
      <div className='container mx-auto flex justify-around items-center py-4 px-16 mt-12'>
      <div>
        <h1 className='text-4xl textstyle'>Hello !</h1>
        <h1 className='text-4xl style'>I'm Ankit<br/>Kumar</h1>
        <p className='text-white'> I'm a DevOps engineer passionate about optimizing software<br/> development through automation and collaboration. Skilled in<br/> CI/CD pipelines, infrastructure as code, and system monitoring,<br/> I ensure efficient and reliable application delivery.</p>
        <button className='mt-16'>Get Started</button>
      </div>
      <div>
        <img src='https://avatars.githubusercontent.com/u/70026576?v=4' alt='My App' className='rounded-full h-15 w-15'/>
      </div>
      </div>
    </div>
    
  )
}

export default Landing