import React from 'react';
import ParticlesComponent from './Particles';
import Navbar from './Navbar';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Lander() {

  const StyledText = styled.h1`
    font-family: 'Outfit'
  `
  return (
    <>
    <ParticlesComponent />
      <Navbar />
      {/* Main */}
      <section className='h-[675px] md:h-[350px]'  data-aos='fade-up' data-aos-duration="1500" >

        {/* Text */}
        <div className='px-10 md:px-60'>
          <div className='flex flex-col items-center justify-center '>
            {/* Hero Statement */}
            <div className=' text-5xl font-semibold text-center mt-36 md:mt-14 md:text-6xl bg-gradient-to-r from-[#2b621f] via-[#308846] to-[#237529] inline-block text-transparent bg-clip-text animate-gradient-animation '>
              <StyledText>Finding Homes Made Easier Than Ever</StyledText>
            </div>

            {/* Subtext */}
            <div className='flex mt-6 text-lg text-center text-[#597854] text-balance'>
              Making your dream home a reality, effortlessly
            </div>

            {/* Buttons */}
            <div className='flex flex-row mt-8 space-x-6'>
              <a href='#Features'>
                <button className="hover:brightness-110 hover:animate-pulse font-light py-2 px-5 rounded-full border-[#3d4561] bg-green-700 border-[0.5px] shadow-sm shadow-[#308846] text-white">
                  Features 
                </button>
              </a>
              <button className="hover:brightness-110 hover:animate-pulse font-light py-2 px-5 rounded-full border-[#3d4561] bg-green-700 border-[0.5px] shadow-sm shadow-[#308846] text-white">
                Sign up now!
              </button>
            </div>

          </div>
        </div>
        
      </section>
    </>
  )
}

export default Lander