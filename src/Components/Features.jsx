import React from 'react'
import { Featureslist } from '../utils/featuresList.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Features() {
  return (
    <article className='space-y-10 h-[100vh] md:pt-5 pt-28' id='Features'>

      {/* Heading */}
      <span className="relative flex justify-center ">
        <span className="relative z-10 items-center px-6 text-4xl font-semibold text-green-800 rounded-2xl " data-aos='fade-down' data-aos-duration="500">Features</span>
      </span>

      {/* Cards */}
      <section className='px-10 md:px-28'>

        <div className="grid flex-wrap grid-cols-1 gap-4 space-y-4 md:space-y-0 lg:grid-cols-2 lg:gap-8 ">

          {Featureslist.map((info, index) => (
        <div className="flex items-center justify-center w-full h-48 transition ease-in-out delay-75 border border-black rounded-lg hover:-translate-y-1 hover:scale-105 " data-aos="flip-up" key={index}>
          {/* Info */}
          <div className='flex flex-col items-center space-y-2 '>

            {/* Topic */}
            <div className='text-2xl font-semibold text-[#325a2d]'>
              {info.Topic}
            </div>

            {/* Subtopic */}
            <div className='px-5 text-center text-[#597854] '>
              {info.Info}
            </div>
           </div>
         </div>
          ))}
      

        </div>
      </section>
    </article>
  )
}

export default Features