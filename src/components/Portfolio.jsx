import React from 'react'
import reactWeather from '../assets/portfolio/reactWeather.jpg'
import travel from '../assets/portfolio/travel.jpg'
import tsp from '../assets/portfolio/tsp.jpg'
import event from '../assets/portfolio/event.jpg'
import housing from '../assets/portfolio/house.jpg'
import hospital from '../assets/portfolio/hospital.jpg'

const Portfolio = () => {
    const portfolios = [
    {
        id :1,
        src :travel,
        hyperlink : 'https://github.com/aakashrajawat00/web-project'

    },
    {
        id :2,
        src :hospital,
        hyperlink : 'https://github.com/aakashrajawat00/Info-5100-AED'
    },
    {
        id :3,
        src :tsp,
        hyperlink : 'https://github.com/ruchita-iyer/PSA_final_project'
    },
    {
        id :4,
        src :event,
        hyperlink : 'https://github.com/poojary-shiv/technical-event-recommendations-within-mobile-app'
    },
    {
        id :5,
        src :reactWeather,
        hyperlink : 'https://github.com/aakashrajawat00/002764127_AakashRajawat/tree/Assignment10'
    },
    {
        id :6,
        src :housing,
        hyperlink : 'https://github.com/Diyabaldota7/Apartment_Database'
    }
]
const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div  className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-bold border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check Out some of my Work</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id,src,hyperlink})=>(
                         <div  key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                        
                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' onClick={() => handleClick(hyperlink)} >Code</button>
                    </div>
                </div>
                
                    
                ))
            }   
            </div>                   
        </div>
    </div>
  )
}

export default Portfolio