"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-k-silver">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="bg-gray-900/50 border border-white/10 rounded-md p-3 text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-900/50 border border-white/10 rounded-md p-3 text-white"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="md:col-span-2 bg-gray-900/50 border border-white/10 rounded-md p-3 text-white"
            ></textarea>
            <div className="md:col-span-2 text-right">
              <button
                type="submit"
                className="px-8 py-3 bg-k-blue text-white rounded-md text-lg font-medium hover:bg-opacity-80 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="mt-12 text-center text-k-silver">
            <p>123 Future Street, Suite 101, Metropolis, 12345</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Github</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
