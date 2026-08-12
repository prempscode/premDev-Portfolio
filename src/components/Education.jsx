import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="py-24 bg-dark px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-accent tracking-[0.3em] mb-4"
        >
          // SECTION_04
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className=" text-4xl md:text-5xl font-black text-white mb-12 bg-blue-600  inline-block"
        >
          EDUCATION.
        </motion.h2>

        <div className="max-w-3xl">
          {portfolioData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-accent pl-8 py-2"
            >
              <h3 className="text-xl font-bold text-white mb-1">
                {edu.school}
              </h3>
              <p className="text-muted">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
