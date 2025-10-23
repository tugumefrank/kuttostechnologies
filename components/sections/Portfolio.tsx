"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Project Alpha",
    description: "An enterprise-grade CRM solution.",
    image: "https://placehold.co/500x500/0b0d10/c0c0c0?text=Project+Alpha",
  },
  {
    title: "Project Beta",
    description: "A cross-platform mobile application for logistics.",
    image: "https://placehold.co/500x500/0b0d10/c0c0c0?text=Project+Beta",
  },
  {
    title: "Project Gamma",
    description: "A cloud-native data analytics platform.",
    image: "https://placehold.co/500x500/0b0d10/c0c0c0?text=Project+Gamma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Our Portfolio</h2>
          <p className="mt-4 text-lg text-k-silver">
            A glimpse into some of our successful projects.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
                <div className="text-center text-white">
                  <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
