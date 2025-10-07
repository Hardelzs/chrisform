
import React, {  useState } from 'react';

export default function ContactForm() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-[700px] text-black">
        {/* Icon or Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Form Icon"
            className="w-16 h-16"
          />
        </div>

        {/* Form Title */}
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>
          <div className="accordion-container">
            {[...Array(10)].map((_, index) => (
              <div key={index} className="accordion-item">
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <span>Section {index + 1}</span>
                  <span className="icon">{openIndex === index ? '−' : '+'}</span>
                </div>
                {openIndex === index && (
                  <div className="accordion-body">
                    <input type="text" placeholder={`Input for section ${index + 1}`} />
                    <input type="text" placeholder={`Input for section ${index + 1}`} />
                    <input type="text" placeholder={`Input for section ${index + 1}`} />
                    <input type="text" placeholder={`Input for section ${index + 1}`} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              rows="4"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}