"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { smoothScroll } from "@/lib/smoothScroll";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-background -z-20" />
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5, transition: { duration: 1.5, ease: "easeInOut" } }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(55,108,177,0.3),rgba(255,255,255,0))]"></div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold font-heading text-white max-w-4xl mx-auto leading-tight tracking-tight">
          Empowering the Future of Enterprise Technology
        </h1>
        <p className="mt-6 text-lg md:text-xl text-k-silver/80 max-w-2xl mx-auto">
          We build scalable, high-end web and mobile applications for the modern
          enterprise.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        >
          <Link
            href="#contact"
            onClick={(e) => smoothScroll(e, "#contact")}
            className="mt-8 inline-block px-8 py-3 bg-k-blue text-white rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg shadow-k-blue/20"
          >
            Let's Talk
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
