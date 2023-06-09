import React from 'react';
import HeroImage from '../assets/heroImage.png';
import {MdKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black'>
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className='flex flex-col justify-center h-full'>
                
                <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    I have an experience of 2 Internships in the field of Full Stack Development.
                    Currently, I enjoy to build webapps using React, TailwindCSS, JavaScript
                </p>
                
                <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                <Link to='Portfolio' smooth duration={500}>Portfolio </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                    <MdKeyboardArrowRight size={25} />
                    </span>
                </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="My Profile Pic" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>    
  )
}

export default Home