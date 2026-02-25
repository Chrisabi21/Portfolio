import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react"; // Import icons

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-stretch relative overflow-hidden"
    >
      

{/* Left: Contact Form Card with animation */}
<motion.div
  className="w-full md:w-1/2 flex items-center justify-center px-6 py-12 md:py-0 z-10"
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <motion.div
    className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 flex flex-col justify-between"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-500">Contact Me</h2>
      <form className="space-y-4">
        {[
          { id: "name", label: "Name", type: "text" },
          { id: "email", label: "Email", type: "email" },
        ].map(({ id, label, type }, index) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
          >
            <label className="block text-sm mb-1" htmlFor={id}>
              {label}
            </label>
            <input
              type={type}
              id={id}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 }}
        >
          <label className="block text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Send Message
        </motion.button>
      </form>
    </div>

    {/* Icons Row */}
    <div className="mt-8 flex justify-center space-x-6 text-blue-500">
      <a href="tel:+1234567890" className="hover:text-blue-600 transition">
        <Phone size={28} />
      </a>
      <a href="mailto:youremail@example.com" className="hover:text-blue-600 transition">
        <Mail size={28} />
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition"
      >
        <Linkedin size={28} />
      </a>
    </div>
  </motion.div>
</motion.div>


      {/* Right: Full-Height Image with background glow and animation */}
        <motion.div
          className="hidden md:block w-1/2 h-full relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Glow behind the image */}
          <div className="absolute inset-0 bg-blue-400 opacity-10 blur-3xl z-0"></div>

          {/* Animated Image */}
          <motion.img
            src="/contact.jpg" // Update to your image path
            alt="Contact"
            className="w-full h-full object-cover relative z-10"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </motion.div>

    </section>
  );
};

export default Contact;
