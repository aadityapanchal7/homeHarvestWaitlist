import React from 'react'
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function Navbar() {

  const StyledText = styled.h1
  `font-family: 'Outfit';`
  

  return (
    <div className='px-8 py-10 md:px-36 ' data-aos='fade-down' data-aos-duration="1500">
    <div className='flex items-center justify-between py-4 border-green-900 shadow-md border-spacing-1 rounded-2xl shadow-green-950 bg-blue-100/1 px-7 '>
      
      {/* Name */}
      <div className='flex space-x-2 items-center z-[2]'>
      <img src='../assets/HomeHarvester.png' className='shadow-lg rounded-2xl size-8' />
        <div className='font-semibold text-green-800 md:text-2xl '>
          <StyledText>HomeHarvest</StyledText>
        </div>
      </div>
      
      {/* Button */}
      <button className="hover:brightness-110 hover:animate-pulse font-semibold py-2 px-2 rounded-full border-green-950 border-[0.5px] shadow-sm shadow-[#3d4561] text-green-800">
        <StyledText>Join the waitlist!</StyledText>
      </button>
    </div>
  </div>
)
};

  
export default Navbar