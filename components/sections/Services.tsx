"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Application Development",
    description: "Creating powerful, scalable web apps tailored to your business needs.",
  },
  {
    title: "Mobile App Development",
    description: "Building intuitive and high-performance mobile apps for iOS and Android.",
  },
  {
    title: "Cloud & DevOps Solutions",
    description: "Automating and optimizing your infrastructure for scalability and reliability.",
  },
  {
    title: "AI & Automation Systems",
    description: "Leveraging AI to build smart solutions that drive efficiency and growth.",
  },
  {
    title: "UI/UX & Product Design",
    description: "Designing beautiful, user-centric interfaces that deliver great experiences.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-heading text-white">Our Services</h2>
          <p className="mt-4 text-lg text-k-silver">
            We offer a comprehensive suite of services to bring your vision to life.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-background/50 p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-xl font-bold font-heading text-white">{service.title}</h3>
              <p className="mt-2 text-k-silver">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
