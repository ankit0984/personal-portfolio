import React from 'react'
import './About.css'
import { Button } from '@/components/ui/button'

function About() {
    return (
        <div className='h-screen bg-black text-white flex justify-items-center'>
            <div className='flex items-center mx-auto'>
                <div>
                    <img src='https://avatars.githubusercontent.com/u/70026576?v=4' alt='My App' className='rounded-full image' />
                </div>
                <div>
                    <h1 className='about'>
                        About me
                    </h1>
                    <div className='mt-4'>
                        <h1 className='expert'>
                            DevOps
                        </h1>
                        <p>
                            Passionate DevOps engineer skilled in CI/CD pipelines,<br /> infrastructure as code, and system monitoring for efficient<br /> and reliable application delivery.
                        </p>
                    </div>
                    <div className='mt-4'>
                        <h1 className='expert'>
                            Flutter Developer
                        </h1>
                        <p>
                            Experienced in building cross-platform mobile applications<br /> with Flutter, I ensure a smooth user experience with<br /> responsive design and functionality.
                        </p>
                    </div>
                    <div className='mt-4'>
                        <Button className="btn">Download Resume</Button>
                    </div>
                    {/* <div className='mt-4'>
                        <h1>
                            Web Developer
                        </h1>
                        <p>
                            Proficient in front-end and back-end development, I create<br /> responsive websites with clean code and user-friendly design.
                        </p>
                        </div> */}

                </div>

            </div>


        </div>
    )
}

export default About