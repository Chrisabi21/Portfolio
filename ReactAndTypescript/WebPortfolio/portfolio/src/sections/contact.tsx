import React from "react";
import { motion } from "framer-motion";
import { Linkedin,User, Mail, Phone } from "lucide-react"; // Import icons

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#071a36] px-6 py-12">
      
      <div className="max-w-6xl w-full bg-white rounded-xl shadow-xl overflow-hidden">

        {/* Top Bar */}
        <div className="bg-[#3E6399] h-12 flex items-center justify-end px-6 gap-4">
          <div className="w-14 h-2 bg-white/40 rounded"></div>
          <div className="w-14 h-2 bg-white/40 rounded"></div>
          <div className="w-14 h-2 bg-white/40 rounded"></div>
          <div className="w-14 h-2 bg-white/40 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2">

          {/* Left Side - Form */}
          <div className="p-10 flex flex-col justify-center">

            <h2 className="text-4xl font-semibold text-[#324A67] mb-8">
              Contact Us
            </h2>

            {/* Name */}
            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 mb-4">
              <User className="text-gray-400 mr-3" size={20} />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-gray-100 rounded-full px-5 py-3 mb-4">
              <Mail className="text-gray-400 mr-3" size={20} />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="bg-gray-100 rounded-2xl p-4 h-32 outline-none mb-6 resize-none"
            />

            {/* Button */}
            <button className="bg-[#18A7BD] text-white py-3 rounded-full text-lg font-medium hover:bg-[#1490a3] transition">
              Send Message
            </button>

          </div>

          {/* Right Side - Illustration */}
          <div className="bg-[#F1F4F7] flex items-center justify-center p-8">
            <img
              src="/contact-illustration.png"
              alt="Contact illustration"
              className="max-w-sm"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
