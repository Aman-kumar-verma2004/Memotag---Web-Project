import React from 'react'

function CTA() {
  return (
    <div>
      <section id="contact" className="py-20 px-6 bg-blue-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Interested in MemoTag?</h2>
        <p className="text-gray-600 mb-8">
          Join the waitlist or request a demo to see how MemoTag can improve dementia care for your loved ones or patients.
        </p>
        <a
          href="mailto:contact@memotag.io"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
    </div>
  )
}

export default CTA
