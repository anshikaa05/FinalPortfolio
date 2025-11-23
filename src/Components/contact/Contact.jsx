import React from "react";
import { useState} from 'react'
 import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false); // 👈 new popup state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending delay
    setStatus("Sending...");

    setTimeout(() => {
      setStatus("✅ Message sent successfully!");
      setShowPopup(true); // 👈 show popup

      // Clear form
      setFormData({ name: "", email: "", message: "" });

      // Hide popup & message after 3 seconds
      setTimeout(() => {
        setStatus("");
        setShowPopup(false);
      }, 3000);
    }, 1000);
  };


  return (
    <section id="contact" className="relative py-20 text-white overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1e1e1e] to-transparent"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-blue-400/30 rounded-full animate-pulse"></div>
      </div>

      {/* Section heading */}
      <h2 className="text-center text-4xl font-bold mb-12">
        Get In <span className="bg-gradient-to-r from-teal-800 to-indigo-400 bg-clip-text text-transparent">Touch</span>
      </h2>

      {/* Content grid */}
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row gap-10 bg-black">
        
        {/* Left Card – Contact Info */}
        <div className="lg:w-2/5 bg-white/5 border border-blck rounded-2xl shadow-lg backdrop-blur-md p-8 space-y-10 transition-transform duration-500 hover:scale-[1.02]">
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-white/1 pb-2 bg-gradient-to-r from-teal-600 to-indigo-400 bg-clip-text text-transparent">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="h-6 w-6 text-teal-500">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2
                      19.79 19.79 0 0 1-8.63-3.07
                      19.5 19.5 0 0 1-6-6
                      19.79 19.79 0 0 1-3.07-8.67
                      A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72
                      12.84 12.84 0 0 0 .7 2.81
                      2 2 0 0 1-.45 2.11L8.09 9.91
                      a16 16 0 0 0 6 6l1.27-1.27
                      a2 2 0 0 1 2.11-.45
                      12.84 12.84 0 0 0 2.81.7
                      A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+916387127384"
                    className="text-lg font-medium hover:text-teal-500 transition-colors">
                    +91-6387127384
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="h-6 w-6 text-teal-500">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:anshika.working2023@gmail.com"
                    className="text-lg font-medium hover:text-teal-500 transition-colors">
                    anshika.working2023@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-2 bg-gradient-to-r from-teal-500 to-indigo-400 bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <div className="flex gap-4">
               <a
                                      href="https://github.com/anshikaa05"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2  text-teal-200 hover:text-teal-600 transition-colors"
                                      aria-label="GitHub"
                                    >
                                      <FiGithub className="w-5 h-5" />
                                    </a>
                                    <a
                                      href="https://linkedin.com/in/anshika-srivastava-3417831b0"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="p-2 text-teal-200 hover:text-teal-600 transition-colors"
                                      aria-label="LinkedIn"
                                    >
                                      <BsLinkedin className="w-5 h-5" />
                                    </a>
            </div>
          </div>
        </div>

        {/* Right Card – Contact Form */}
      <div className="lg:w-3/5 bg-white/5 border border-white/10 rounded-2xl shadow-lg backdrop-blur-md p-8">
        <div className="h-1 bg-gradient-to-r from-teal-500 to-indigo-400 mb-6"></div>
        <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-2 bg-gradient-to-r from-teal-600 to-indigo-400 bg-clip-text text-transparent">
          Send Me a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-teal-600 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-transparent border border-white/20 rounded-md px-4 py-2 text-white min-h-[150px] focus:ring-2 focus:ring-teal-600 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-teal-700 to-indigo-500 text-white font-semibold rounded-md hover:from-teal-700 hover:to-indigo-600 transition-all flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {status && (
          <p className="mt-4 text-center text-teal-400 font-medium animate-pulse">
            {status}
          </p>
        )}
      </div>
       {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 transition-opacity">
          <div className="bg-white text-gray-900 rounded-xl shadow-2xl p-6 w-80 text-center animate-fadeIn">
            <h4 className="text-lg font-semibold mb-2">✅ Message Sent!</h4>
            <p className="text-sm text-gray-600">
              Thank you for reaching out. I’ll get back to you soon!
            </p>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default Contact;
