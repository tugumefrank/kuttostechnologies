"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "React", logo: "/react.svg" },
  { name: "Next.js", logo: "/next.svg" },
  { name: "Node.js", logo: "/nodejs.svg" },
  { name: "Flutter", logo: "/flutter.svg" },
  { name: "AWS", logo: "/aws.svg" },
  { name: "Docker", logo: "/docker.svg" },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Technologies We Use</h2>
          <p className="mt-4 text-lg text-k-silver">
            We work with the latest and greatest technologies to deliver robust solutions.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={80}
                height={80}
                className="dark:invert"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
