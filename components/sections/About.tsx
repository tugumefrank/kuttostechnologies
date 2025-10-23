"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold font-heading text-white">About Us</h2>
          <p className="mt-4 text-lg text-k-silver/80">
            Kuttos Technologies is a premier software development firm dedicated to delivering high-end, scalable web and mobile applications. Our mission is to empower businesses by transforming their innovative ideas into robust, enterprise-grade solutions. We are committed to excellence, leveraging cutting-edge technologies and a user-centric approach to build the future of technology, one project at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
