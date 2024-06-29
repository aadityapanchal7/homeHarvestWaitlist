import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

function About() {
  
  const StyledText = styled.h1`
  font-family: 'Outfit'
`
  return (
    <section>
  <div className="px-4 mx-auto text-white sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="absolute inset-0 flex items-center justify-center object-cover w-full px-10 mt-20 shadow-sm md:pr-28"
          data-aos='fade-left'
          data-aos-duration="500"
        />
      </div>

      <div className="flex flex-col justify-center px-10 text-center md:px-28 lg:py-24 " >
        <h2 className="text-3xl font-bold  sm:text-4xl text-green-800 " data-aos='fade-up' data-aos-duration="500">
          <StyledText>Our Mission</StyledText>
        </h2>

        <p className="mt-4 text-[#597854] text-sm" data-aos='fade-up' data-aos-duration="500">
        "HomeHarvest simplifies home searching with advanced filters for location, budget, and amenities. Stay updated with real-time alerts on new listings and price changes, while AI-driven analytics personalize recommendations based on your preferences, ensuring a seamless and tailored home-finding experience.        </p>

        <a href="#" className="inline-block px-12 py-3 mt-3 text-sm font-semibold border-[#3d4561]  rounded-2xl border text-green-700" data-aos='fade-up' >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default About