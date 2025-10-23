"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Contact Us</h2>
          <p className="mt-4 text-lg text-k-silver/80">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-background/50 border border-white/10 rounded-md p-3 text-white focus:ring-2 focus:ring-k-blue outline-none transition-shadow"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-background/50 border border-white/10 rounded-md p-3 text-white focus:ring-2 focus:ring-k-blue outline-none transition-shadow"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-background/50 border border-white/10 rounded-md p-3 text-white focus:ring-2 focus:ring-k-blue outline-none transition-shadow"
            ></textarea>
            <div className="text-right">
              <button
                type="submit"
                className="px-8 py-3 bg-k-blue text-white rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-k-blue/20"
              >
                Send Message
              </button>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            className="mt-12 text-center text-k-silver/80"
          >
            <p>123 Future Street, Suite 101, Metropolis, 12345</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Github</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
