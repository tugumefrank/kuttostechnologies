"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background to-gray-900/50 -z-10" />
      <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white max-w-4xl mx-auto leading-tight">
          Empowering the Future of Enterprise Technology
        </h1>
        <p className="mt-4 text-lg md:text-xl text-k-silver max-w-2xl mx-auto">
          We build scalable, high-end web and mobile applications for the modern
          enterprise.
        </p>
        <Link
          href="#contact"
          className="mt-8 inline-block px-8 py-3 bg-k-blue text-white rounded-md text-lg font-medium hover:bg-opacity-80 transition-colors"
        >
          Let's Talk
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
