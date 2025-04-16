import React from 'react'
import { motion } from 'framer-motion';

const stats = [
  { label: "Preorders", value: "2,000+" },
  { label: "Pilot Clinics", value: "15+" },
  { label: "Caregivers Helped", value: "5,000+" },
];

function Traction() {
  return (
    <div>
       <section id="traction" className="py-20 px-6 bg-white">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Traction So Far</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl font-extrabold text-blue-700">{s.value}</p>
              <p className="text-gray-600 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default Traction
