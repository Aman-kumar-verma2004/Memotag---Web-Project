import React from 'react'
import {motion} from "framer-motion"

const steps = [
    {
        title: "Attach the Tag",
        description: "Patients wear a discreet smart tag on their wrist or clothing.",
    },
    {
        title: "Track Behavior & Movement",
        description: "AI monitors daily routines, mobility, and cognitive cues.",
    },
    {
        title: "Care Insights Delivered",
        description: "Caregivers get real-time alerts and recommendations.",
    },
]

function Solution() {
  return (
    <div>
      <section id="solution" className="py-20 px-6 bg-gray-50">
      <motion.div 
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">How MemoTag Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
    </div>
  )
}

export default Solution
