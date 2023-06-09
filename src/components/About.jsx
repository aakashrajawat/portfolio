import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 mt-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            
        
            <div className='text-md mt-20'>
            "Driven by my passion for Full Stack Development, I am on a mission to empower businesses with a compelling online presence. With a strong foundation in both front-end and back-end technologies, I strive to create seamless digital experiences that captivate users and drive business growth."
            <br /> <br/>
            "As a web development intern, I took charge of developing a dynamic website that seamlessly integrated a mail API, streamlining customer communications for the company. By optimizing hosting services, I successfully doubled their profits and reduced latency by 50%. These accomplishments fueled my determination to pursue a career in Full Stack Development."

            </div>
            <br />
            <p className='text-md'>
            In my free time, I like researching and writing content on LinkedIn and also helping students, professionals leverage their LinkedIn profiles. My content was also featured on LinkedIn for Locals creator page. I also create LinkedIn posts with step-by-step instructions that help professionals get the most out of their LinkedIn profiles.

            </p>
        </div>
    </div>
  )
}

export default About