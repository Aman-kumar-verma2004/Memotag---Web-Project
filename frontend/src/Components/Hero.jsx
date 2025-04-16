import React from 'react'
import {motion} from "framer-motion"
function Hero() {
  return (
    <div>
      <section className='min-h-screen flex-column text-center justify-center  bg-gradient-to-br from-blue-50 to-purple-700 px-4 pt-24'>
        <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
        >
        <h1 className='text-4xl md:text-6xl font-extrabold text-gray-800 mt-20 mb-6'>AI for Demantic Care</h1>
        <p className='text-xl md:text-2xl w-[50%] m-auto text-gray-600 mb-6 md:mb-15'>Helping caregivers track and care for loved ones with cognitive conditions — using smart tags and real-time AI.</p>
        <a href="#contact" className='inline-block bg-blue-200 text-black px-6 py-3 font-medium hover:bg-blue-500 transition border-1 rounded-full p-2 md:mt-10'>Get Early Access</a>
        </motion.div>
      </section>
    </div>
  )
}

export default Hero
