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
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Our Portfolio</h2>
          <p className="mt-4 text-lg text-k-silver/80">
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
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeInOut" }}
              className="relative group overflow-hidden rounded-lg shadow-lg shadow-black/20"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="rounded-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold font-heading">{project.title}</h3>
                  <p className="text-k-silver/80">{project.description}</p>
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
