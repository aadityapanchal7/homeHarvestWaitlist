import React from 'react'
import Lander from './Components/Lander'
import About from './Components/About'
import Features from './Components/Features'
import Prices from './Components/Prices'

function App() {
  return (
    <>
      <div className=' bg-gradient-to-b from-green-700/10 to-green-200/10 md:min-h-screen md:flex md:justify-center'>
        <div className='md:max-w-[1263px] md:w-full md:flex md:flex-col'>
          <Lander />
          <About />
          <Features />
          <Prices />
        </div>
      </div>
    </>
  )
}

export default App