import React from 'react'
import {motion} from "framer-motion"
function Problem() {
  return (
    <div>
      <section id='problem' className='py-20 px-6 bg-white'>
        <motion.div
         className="max-w-5xl mx-auto text-center"
        initial = {{opacoty: 0, y: 30}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        >
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>The Dementia Care Crisis</h2>
        <p className='text-gray-600 mb-10'>Over <strong>55 Million</strong> people live with Dementia globally, with diagnosis delays and rising caregiver stress.</p>
        <div className='grid md:grid-cols-3 gap-6'>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Late Diagnoses</h3>
                <p>Many cases go unnoticed until severe stages, making early intervention difficult.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Caregiver Burnout</h3>
                <p>Families often bear the emotional and physical toll without real-time help.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-2">Lack of Data</h3>
                <p>No easy way to track behavior or cognitive changes regularly at home.</p>
            </div>
        </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Problem
