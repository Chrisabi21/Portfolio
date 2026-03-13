import React from "react";
import { motion } from "framer-motion";
import { Linkedin, User, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-[#071a36] px-4 sm:px-6 py-8 sm:py-12">

      <motion.div
        className="max-w-6xl w-full bg-white rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Top Bar */}
        <div className="bg-[#3E6399] h-12 sm:h-14 md:h-16 flex items-center justify-between px-4 sm:px-6">

          {/* Decorative Bars - Left */}
          <div className="flex gap-2 sm:gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="w-8 sm:w-10 md:w-14 h-1.5 sm:h-2 bg-white/40 rounded" />
            ))}
          </div>

          {/* Social Icons - Center */}
          <div className="flex gap-10 sm:gap-12 md:gap-16 text-white">
            <a href="tel:07901654395" className="hover:text-[#18A7BD] transition hover:scale-110">
              <Phone size={30} />
            </a>
            <a href="mailto:seunabi20@gmail.com" className="hover:text-[#18A7BD] transition hover:scale-110">
              <Mail size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/oluwaseun-abiodun34"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#18A7BD] transition hover:scale-110"
            >
              <Linkedin size={30} />
            </a>
          </div>

          {/* Decorative Bars - Right */}
          <div className="flex gap-2 sm:gap-4">
            {[1, 2].map((i) => (
              <div key={i} className="w-8 sm:w-10 md:w-14 h-1.5 sm:h-2 bg-white/40 rounded" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side - Form */}
          <motion.div
            className="p-6 sm:p-8 md:p-10 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#324A67] mb-5 sm:mb-6 md:mb-8">
              Contact Us
            </h2>

            {/* Name */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 mb-3 sm:mb-4">
              <User className="text-gray-400 mr-2 sm:mr-3 shrink-0" size={18} />
              <input
                type="text"
                placeholder="Name"
                className="bg-transparent outline-none w-full text-sm sm:text-base"
              />
            </div>

            {/* Email */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 mb-3 sm:mb-4">
              <Mail className="text-gray-400 mr-2 sm:mr-3 shrink-0" size={18} />
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent outline-none w-full text-sm sm:text-base"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center bg-gray-100 rounded-full px-4 sm:px-5 py-2.5 sm:py-3 mb-3 sm:mb-4">
              <Phone className="text-gray-400 mr-2 sm:mr-3 shrink-0" size={18} />
              <input
                type="tel"
                placeholder="Phone"
                className="bg-transparent outline-none w-full text-sm sm:text-base"
              />
            </div>

            {/* Message */}
            <textarea
              placeholder="Message"
              className="bg-gray-100 rounded-2xl p-3 sm:p-4 h-24 sm:h-28 md:h-32 outline-none mb-4 sm:mb-5 md:mb-6 resize-none text-sm sm:text-base"
            />

            {/* Button */}
            <button className="bg-[#18A7BD] text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#1490a3] transition hover:scale-105 duration-300">
              Send Message
            </button>
          </motion.div>

          {/* Right Side - Illustration */}
          <motion.div
            className="bg-[#F1F4F7] flex items-center justify-center p-6 sm:p-8 min-h-48 sm:min-h-64 md:min-h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="/contact1.jpg"
              alt="Contact illustration"
              className="w-full max-w-[180px] sm:max-w-[240px] md:max-w-sm object-contain"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default Contact;