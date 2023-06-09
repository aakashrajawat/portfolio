import React from 'react'

const Contact = () => {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
                <p className='py-6'>Fill the Form to get in touch with Me!!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/b7f323c8-48d1-443a-bfb8-c8640269b7ef' method='POST' className='flex flex-col w-full md:w-1/2'> 
                    <input type="text" required name="name"  placeholder="Enter Your Name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address" placeholder="Enter Your Email" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name='message' required placeholder='Enter Your Message' rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact